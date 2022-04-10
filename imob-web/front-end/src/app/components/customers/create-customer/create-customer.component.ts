import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { CreateCustomer, Customer } from 'src/app/core/interfaces/customer.interface';
import { Lead, UpdateLead } from 'src/app/core/interfaces/lead.interface';
import { State } from 'src/app/core/interfaces/state.interface';
import { City, CreateCity } from 'src/app/core/interfaces/city.interface';
import { CreateNeighborhood, Neighborhood } from 'src/app/core/interfaces/neighborhood.interface';
import { Address, CreateAddress, ResponseViaCEPModel } from 'src/app/core/interfaces/address.interface';
import { CustomerService } from 'src/app/core/services/customer.service';
import { LeadService } from 'src/app/core/services/lead.service';
import { AddressService } from 'src/app/core/services/address.service';
import { NeighborhoodService } from 'src/app/core/services/neighborhood.service';
import { CityService } from 'src/app/core/services/city.service';
import { StateService } from 'src/app/core/services/state.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-create-customer',
    templateUrl: './create-customer.component.html',
    styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public customer: Customer;
    public lead: Lead;
    public leads: Lead[];
    public state: State;
    public city: City;
    public neighborhood: Neighborhood;
    public address: Address;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
        private readonly _activatedRoutes: ActivatedRoute,
        private readonly _customerService: CustomerService,
        private readonly _leadService: LeadService,
        private readonly _addressService: AddressService,
        private readonly _neighborhoodService: NeighborhoodService,
        private readonly _cityService: CityService,
        private readonly _stateService: StateService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = 'content/customers';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.createFormGroup();
        this.loadLeads();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private loadLeads(): void {
        const subscription: Subscription = this._activatedRoutes
            .data
            .subscribe((data: Data) => {
                if (data && data['leads'] && data['leads'].length > 0) {
                    this.leads = data['leads'];
                    this.leads = this.leads.filter((lead: Lead) => !lead.registered);

                    if (this.leads.length === 0)
                        this._alertService.openSnackBar('Todas as leads já foram cadastradas como clientes!');
                } else {
                    this._alertService.openSnackBar('Não existem leads cadastradas na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
    }

    private createFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            customer: this._formBuilder.group({
                id: [null, []],
                name: [null, [Validators.required]],
                surname: [null, [Validators.required]],
                email: [null, [Validators.required, Validators.email]],
                birthDate: [null, [Validators.required]],
                RG: [null, [Validators.required]],
                CPF: [null, [Validators.required]],
                landline: [null, []],
                cellPhone: [null, [Validators.required]],
                profession: [null, []],
                lead: [null, [Validators.required]]
            }),
            address: this._formBuilder.group({
                CEP: [null, [Validators.required]],
                street: [null, [Validators.required]],
                number: [null, [Validators.required]],
                neighborhood: [null, [Validators.required]],
                city: [null, [Validators.required]],
                state: [null, [Validators.required]],
                complement: [null, []]
            })
        });
    }

    private parseCustomer(form: any): CreateCustomer {
        return {
            name: form.customer.name,
            surname: form.customer.surname,
            email: form.customer.email,
            birthDate: form.customer.birthDate,
            RG: form.customer.RG,
            CPF: form.customer.CPF,
            landline: form.customer.landline,
            cellPhone: form.customer.cellPhone,
            profession: form.customer.profession,
            lead: form.customer.lead
        };
    }

    private parseLead(form: any): UpdateLead {
		return {
			name: form.customer.lead.name,
			surname: form.customer.lead.surname,
			email: form.customer.lead.email,
			source: form.customer.lead.source,
			landline: form.customer.lead.landline,
			cellPhone: form.customer.lead.cellPhone,
			comments: form.customer.lead.comments,
			createdByAdministrator: form.customer.lead.createdByAdministrator,
			createdByManager: form.customer.lead.createdByManager,
			createdBySecretary: form.customer.lead.createdBySecretary,
			registered: true
		};
	}

    private parseCity(city: string, state: State): CreateCity {
        return {
            city,
            state
        };
    }

    private parseNeighborhood(neighborhood: string, city: City): CreateNeighborhood {
        return {
            neighborhood,
            city
        };
    }

    private parseCreateAddress(form: any, neighborhood: Neighborhood): CreateAddress {
        return {
            street: form.address.street,
            complement: form.address.complement,
            number: form.address.number,
            CEP: form.address.CEP,
            isCompany: false,
            isManager: false,
            isAdvisor: false,
            isBroker: false,
            isSecretary: false,
            isOwner: false,
            isCustomer: true,
            isProperty: false,
            company: form.company,
            customer: form.customer,
            neighborhood
        };
    }

    private createCustomer(): void {
        const subscription: Subscription = this._customerService
            .create(this.parseCustomer(this.formGroup.value))
            .subscribe((data: Customer) => {
                if (data) {
                    this.customer = data;
                    this.formGroup.get('customer')?.patchValue(this.customer);
                    this.updateLead();
                }
            });

        this.subscriptions.push(subscription);
    }

    private updateLead(): void {
        if (this.lead.id) {
            const subscription: Subscription = this._leadService
                .update(this.parseLead(this.formGroup.value), this.lead.id)
                .subscribe((data: UpdateLead) => {
                    if (data) {
                        this.findState();
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

    private createAddress(): void {
        const subscription: Subscription = this._addressService
            .create(this.parseCreateAddress(this.formGroup.value, this.neighborhood))
            .subscribe((data: Address) => {
                if (data) {
                    this.address = data;
                    this._router.navigate([`${this.path}/list`]);
                    this._alertService.openSnackBar(`Cliente ${this.customer.name} ${this.customer.surname} criado com sucesso!`);
                }
            });

        this.subscriptions.push(subscription);
    }

    private createNeighborhood(): void {
        const subscription: Subscription = this._neighborhoodService
            .create(this.parseNeighborhood(this.formGroup.get('address')?.get('neighborhood')?.value, this.city))
            .subscribe((data: Neighborhood) => {
                if (data) {
                    this.neighborhood = data;
                    this.createAddress();
                }
            });

        this.subscriptions.push(subscription);
    }

    private createCity(): void {
        const subscription: Subscription = this._cityService
            .create(this.parseCity(this.formGroup.get('address')?.get('city')?.value, this.state))
            .subscribe((data: City) => {
                if (data) {
                    this.city = data;
                    this.createNeighborhood();
                }
            });

        this.subscriptions.push(subscription);
    }

    private findState(): void {
        const subscription: Subscription = this._stateService
            .index()
            .subscribe((data: State[]) => {
                if (data && data.length > 0) {
                    this.state = data.filter(
                        (state: State) => state.UF === this.formGroup.get('address')?.get('state')?.value
                    )[0];

                    this.createCity();
                }
            });

        this.subscriptions.push(subscription);
    }

    public search(): void {
        if (this.formGroup.get('address')?.get('CEP')?.value.length === 8) {
            const subscription: Subscription = this._addressService
                .search(this.formGroup.get('address')?.get('CEP')?.value)
                .subscribe((data: ResponseViaCEPModel) => {
                    if (data && data.cep) {
                        this.formGroup.get('address')?.get('street')?.setValue(data.logradouro);
                        this.formGroup.get('address')?.get('complement')?.setValue(data.complemento);
                        this.formGroup.get('address')?.get('neighborhood')?.setValue(data.bairro);
                        this.formGroup.get('address')?.get('city')?.setValue(data.localidade);
                        this.formGroup.get('address')?.get('state')?.setValue(data.uf);
                    } else {
                        this._alertService.openSnackBar(
                            'API ViaCEP não encontrou nenhum endereço ou o CEP é inválido!'
                        );
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

    public setCustomer(): void {
        this.lead = this.formGroup.get('customer')?.get('lead')?.value;

        this.formGroup.get('customer')?.get('name')?.setValue(this.lead.name);
        this.formGroup.get('customer')?.get('surname')?.setValue(this.lead.surname);
        this.formGroup.get('customer')?.get('email')?.setValue(this.lead.email);
        this.formGroup.get('customer')?.get('landline')?.setValue(this.lead.landline);
        this.formGroup.get('customer')?.get('cellPhone')?.setValue(this.lead.cellPhone);
    }

    public onSubmit(): void {
        if (this.formGroup.valid) {
            this.createCustomer();
        }
    }
	
}

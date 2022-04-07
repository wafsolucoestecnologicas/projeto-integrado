import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Customer, UpdateCustomer } from 'src/app/core/interfaces/customer.interface';
import { State } from 'src/app/core/interfaces/state.interface';
import { City, CreateCity, UpdateCity } from 'src/app/core/interfaces/city.interface';
import { Neighborhood, CreateNeighborhood, UpdateNeighborhood } from 'src/app/core/interfaces/neighborhood.interface';
import { Address, CreateAddress, UpdateAddress, ResponseViaCEPModel } from 'src/app/core/interfaces/address.interface';
import { CustomerService } from 'src/app/core/services/customer.service';
import { AddressService } from 'src/app/core/services/address.service';
import { NeighborhoodService } from 'src/app/core/services/neighborhood.service';
import { CityService } from 'src/app/core/services/city.service';
import { StateService } from 'src/app/core/services/state.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public customer: Customer;
    public state: State;
    public city: City;
    public neighborhood: Neighborhood;
    public address: Address;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _customerService: CustomerService,
        private readonly _addressService: AddressService,
        private readonly _neighborhoodService: NeighborhoodService,
        private readonly _cityService: CityService,
        private readonly _stateService: StateService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/customers';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.createFormGroup();
        this.loadCustomerData();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private loadCustomerData(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['customer']) {
					this.customer = data['customer'];
                    this.customer.landline = this.customer.landline?.trim();
					this.formGroup.get('customer')?.patchValue(this.customer);

                    this.loadAdressesData();
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Cliente não encontrado na base de dados!');
				}
			});

        this.subscriptions.push(subscription);
    }

    private loadAdressesData(): void {
        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['adresses'] && data['adresses'].length > 0) {
                    this.address = data['adresses'].filter((address: Address) => this.customer.id === address.customer?.id && address.isCustomer)[0];

                    if (this.address) {
                        this.loadNeighborhoodsData();
                    }
                }
            });

        this.subscriptions.push(subscription);
    }

    private loadNeighborhoodsData(): void {
        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['neighborhoods'] && data['neighborhoods'].length > 0) {
                    this.neighborhood = data['neighborhoods'].filter(
                        (neighborhood: Neighborhood) => neighborhood.id === this.address.neighborhood.id
                    )[0];

                    if (this.neighborhood) {
                        this.loadCitiesData();
                    }
                }
            });

        this.subscriptions.push(subscription);
    }

    private loadCitiesData(): void {
        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['cities'] && data['cities'].length > 0) {
                    this.city = data['cities'].filter(
                        (city: City) => city.id === this.neighborhood.city.id
                    )[0];

                    if (this.city) {
                        this.state = this.city.state;

                        this.formGroup.get('address')?.get('CEP')?.setValue(this.address.CEP);
                        this.formGroup.get('address')?.get('street')?.setValue(this.address.street);
                        this.formGroup.get('address')?.get('complement')?.setValue(this.address.complement);
                        this.formGroup.get('address')?.get('number')?.setValue(this.address.number);
                        this.formGroup.get('address')?.get('neighborhood')?.setValue(this.address.neighborhood.neighborhood);
                        this.formGroup.get('address')?.get('city')?.setValue(this.city.city);
                        this.formGroup.get('address')?.get('state')?.setValue(this.state.UF);
                    }
                }
            });

        this.subscriptions.push(subscription);
    }

    private createFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            customer: this._formBuilder.group({
                id: [null, [Validators.required]],
                name: [null, [Validators.required]],
                surname: [null, [Validators.required]],
                email: [null, [Validators.required, Validators.email]],
                birthDate: [null, [Validators.required]],
                RG: [null, [Validators.required]],
                CPF: [null, [Validators.required]],
                landline: [null, []],
                cellPhone: [null, [Validators.required]],
                profession: [null, []]
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

    private parseCustomer(form: any): UpdateCustomer {
        return {
            name: form.customer.name,
            surname: form.customer.surname,
            email: form.customer.email,
            birthDate: form.customer.birthDate,
            RG: form.customer.RG,
            CPF: form.customer.CPF,
            landline: form.customer.landline,
            cellPhone: form.customer.cellPhone,
            profession: form.customer.profession
        };
    }

    private parseCity(city: string, state: State): CreateCity | UpdateCity {
        return {
            city,
            state
        };
    }

    private parseNeighborhood(neighborhood: string, city: City): CreateNeighborhood | UpdateNeighborhood {
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

    private parseUpdateAddress(form: any, neighborhood: Neighborhood): UpdateAddress {
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
            neighborhood
        };
    }

    private updateCustomer(): void {
        if (this.customer.id) {
            const subscription: Subscription = this._customerService
                .update(this.parseCustomer(this.formGroup.value), this.customer.id)
                .subscribe((data: UpdateCustomer) => {
                    if (data) {
                        if (this.address) {
                            this.findState(false);
                        } else {
                            this.findState(true);
                        }
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

    private updateAddress(): void {
        if (this.address.id) {
            const subscription: Subscription = this._addressService
                .update(this.parseUpdateAddress(this.formGroup.value, this.neighborhood), this.address.id)
                .subscribe((data: Address) => {
                    if (data) {
                        this.address = data;
                        this._router.navigate([`${this.path}/list`]);
                        this._alertService.openSnackBar('Cliente atualizado com sucesso!');
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

    private updateNeighborhood(): void {
        if (this.neighborhood.id) {
            const subscription: Subscription = this._neighborhoodService
                .update(this.parseNeighborhood(this.formGroup.get('address')?.get('neighborhood')?.value, this.city), this.neighborhood.id)
                .subscribe((data: Neighborhood) => {
                    if (data) {
                        this.neighborhood = data;
                        this.updateAddress();
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

    private updateCity(): void {
        if (this.city.id) {
            const subscription: Subscription = this._cityService
                .update(this.parseCity(this.formGroup.get('address')?.get('city')?.value, this.state), this.city.id)
                .subscribe((data: City) => {
                    if (data) {
                        this.city = data;
                        this.updateNeighborhood();
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
                    this._alertService.openSnackBar('Cliente atualizado com sucesso!');
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

    private findState(createCity: boolean): void {
        const subscription: Subscription = this._stateService
            .index()
            .subscribe((data: State[]) => {
                if (data && data.length > 0) {
                    this.state = data.filter(
                        (state: State) => state.UF === this.formGroup.get('address')?.get('state')?.value
                    )[0];

                    if (createCity) {
                        this.createCity();
                    } else {
                        this.updateCity();
                    }
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

    public onSubmit(): void {
        if (this.formGroup.valid) {
            if (this.customer.id) {
                this.updateCustomer();
            }
        }
    }
	
}

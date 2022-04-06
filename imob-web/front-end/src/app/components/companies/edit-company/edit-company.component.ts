import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Company, UpdateCompany } from 'src/app/core/interfaces/company.interface';
import { State } from 'src/app/core/interfaces/state.interface';
import { City, CreateCity, UpdateCity } from 'src/app/core/interfaces/city.interface';
import { Neighborhood, CreateNeighborhood, UpdateNeighborhood } from 'src/app/core/interfaces/neighborhood.interface';
import { Address, CreateAddress, UpdateAddress, ResponseViaCEPModel } from 'src/app/core/interfaces/address.interface';
import { CompanyService } from 'src/app/core/services/company.service';
import { AddressService } from 'src/app/core/services/address.service';
import { NeighborhoodService } from 'src/app/core/services/neighborhood.service';
import { CityService } from 'src/app/core/services/city.service';
import { StateService } from 'src/app/core/services/state.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-company',
    templateUrl: './edit-company.component.html',
    styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public company: Company;
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
        private readonly _companyService: CompanyService,
        private readonly _addressService: AddressService,
        private readonly _neighborhoodService: NeighborhoodService,
        private readonly _cityService: CityService,
        private readonly _stateService: StateService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/companies';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.createFormGroup();
        this.loadCompanyData();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private loadCompanyData(): void {
        const subscription: Subscription = this._activatedRoute.data.subscribe((data: Data) => {
            if (data && data['company']) {
                this.company = data['company'];
                this.formGroup.get('company')?.patchValue(this.company);

                this.loadAdressesData();
            } else {
                this._router.navigate([`${this.path}/list`]);
                this._alertService.openSnackBar('Imobiliária não encontrada na base de dados!');
            }
        });

        this.subscriptions.push(subscription);
    }

    private loadAdressesData(): void {
        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['adresses'] && data['adresses'].length > 0) {
                    this.address = data['adresses'].filter((address: Address) => this.company.id === address.company.id && address.isCompany)[0];

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
            company: this._formBuilder.group({
                id: [null, [Validators.required]],
                CNPJ: [null, [Validators.required]],
                corporateName: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(256)]],
                stateRegistration: [null, [Validators.required]],
                percentageCommissionReceivable: [null, []],
                percentageCommissionPayableForClosedDeals: [null, []],
                percentageCommissionPayableForPropertyCaptured: [null, []]
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

    private parseCompany(form: any): UpdateCompany {
        return {
            CNPJ: form.company.CNPJ,
            corporateName: form.company.corporateName,
            stateRegistration: form.company.stateRegistration,
            percentageCommissionReceivable: Number(form.company.percentageCommissionReceivable),
            percentageCommissionPayableForClosedDeals: Number(form.company.percentageCommissionPayableForClosedDeals),
            percentageCommissionPayableForPropertyCaptured: Number(form.company.percentageCommissionPayableForPropertyCaptured)
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
            isCompany: true,
            isManager: false,
            isAdvisor: false,
            isBroker: false,
            isSecretary: false,
            isOwner: false,
            isCustomer: false,
            isProperty: false,
            company: form.company,
            neighborhood
        };
    }

    private parseUpdateAddress(form: any, neighborhood: Neighborhood): UpdateAddress {
        return {
            street: form.address.street,
            complement: form.address.complement,
            number: form.address.number,
            CEP: form.address.CEP,
            isCompany: true,
            isManager: false,
            isAdvisor: false,
            isBroker: false,
            isSecretary: false,
            isOwner: false,
            isCustomer: false,
            isProperty: false,
            neighborhood
        };
    }

    private updateCompany(): void {
        const subscription: Subscription = this._companyService
            .update(this.parseCompany(this.formGroup.value), this.formGroup.get('company')?.get('id')?.value)
            .subscribe((data: Company) => {
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

    private updateAddress(): void {
        if (this.address.id) {
            const subscription: Subscription = this._addressService
                .update(this.parseUpdateAddress(this.formGroup.value, this.neighborhood), this.address.id)
                .subscribe((data: Address) => {
                    if (data) {
                        this.address = data;
                        this._router.navigate([`${this.path}/list`]);
                        this._alertService.openSnackBar('Imobiliária atualizada com sucesso!');
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
                    this._alertService.openSnackBar('Imobiliária atualizada com sucesso!');
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
            this.updateCompany();
        }
    }

}

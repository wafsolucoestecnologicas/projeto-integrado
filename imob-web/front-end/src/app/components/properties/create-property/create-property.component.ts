import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { Property, CreateProperty, UpdateProperty } from 'src/app/core/interfaces/property.interface';
import { Owner } from 'src/app/core/interfaces/owner.interface';
import { State } from 'src/app/core/interfaces/state.interface';
import { City, CreateCity } from 'src/app/core/interfaces/city.interface';
import { Neighborhood, CreateNeighborhood } from 'src/app/core/interfaces/neighborhood.interface';
import { Address, CreateAddress, ResponseViaCEPModel } from 'src/app/core/interfaces/address.interface';
import { CommissionPayable, CreateCommissionPayable } from 'src/app/core/interfaces/commission-payable.interface';
import { Broker } from 'src/app/core/interfaces/broker.interface';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CommissionPayableService } from 'src/app/core/services/commission-payable.service';
import { PropertyService } from 'src/app/core/services/property.service';
import { AddressService } from 'src/app/core/services/address.service';
import { NeighborhoodService } from 'src/app/core/services/neighborhood.service';
import { CityService } from 'src/app/core/services/city.service';
import { StateService } from 'src/app/core/services/state.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-create-property',
    templateUrl: './create-property.component.html',
    styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    private files: Set<File>;
    public formGroup: FormGroup;
    public property: Property;
    public owner: Owner;
    public owners: Owner[];
    public state: State;
    public city: City;
    public neighborhood: Neighborhood;
    public address: Address;
    public preview: any[];
    public path: string;
    public isBroker: boolean;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
		private readonly _authenticationService: AuthenticationService,
        private readonly _commissionPayableService: CommissionPayableService,
        private readonly _activatedRoutes: ActivatedRoute,
        private readonly _propertyService: PropertyService,
        private readonly _addressService: AddressService,
        private readonly _neighborhoodService: NeighborhoodService,
        private readonly _cityService: CityService,
        private readonly _stateService: StateService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.preview = new Array<any>();
        this.path = 'content/properties';
        this.isBroker = (this._authenticationService?.broker) ? true : false;
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
		this.createFormGroup();
		this.loadOwners();
	}

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

	private loadOwners(): void {
		const subscription: Subscription = this._activatedRoutes
            .data
            .subscribe((data: Data) => {
                if (data && data['owners'] && data['owners'].length > 0) {
                    this.owners = data['owners'];
                } else {
                    this._alertService.openSnackBar('Não existem proprietários cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

    private createFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            property: this._formBuilder.group({
                id: [null, []],
				description: [null, []],
				photos: [[], []],
				checked: [false, []],
				elevator: [false, []],
				bedrooms: [0, []],
				bathrooms: [0, []],
				suites: [0, []],
				parkingLots: [0, []],
				terrainArea: [null, []],
				buildingArea: [null, []],
				totalUtilTerrainArea: [null, []],
				condominium: [null, []],
				IPTU: [null, []],
				value: [null, []],
				owner: [null, [Validators.required]],
				administrator: [this._authenticationService.administrator, []],
				manager: [this._authenticationService.manager, []],
				advisor: [this._authenticationService.advisor, []],
				broker: [this._authenticationService.broker, []],
				secretary: [this._authenticationService.secretary, []],
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

    private parseCreateProperty(form: any): CreateProperty {
        return {
			description: form.property.description,
			photos: form.property.photos,
			checked: form.property.checked,
			elevator: form.property.elevator,
			bedrooms: form.property.bedrooms,
			bathrooms: form.property.bathrooms,
			suites: form.property.suites,
			parkingLots: form.property.parkingLots,
			terrainArea: form.property.terrainArea,
			buildingArea: form.property.buildingArea,
			totalUtilTerrainArea: form.property.totalUtilTerrainArea,
			condominium: form.property.condominium,
			IPTU: form.property.IPTU,
			value: form.property.value,
			owner: form.property.owner,
			administrator: form.property.administrator,
			manager: form.property.manager,
			advisor: form.property.advisor,
			broker: form.property.broker,
			secretary: form.property.secretary
		};
    }

    private parseUpdateProperty(form: any): UpdateProperty {
        return {
            description: form.property.description,
			photos: form.property.photos,
			checked: form.property.checked,
			elevator: form.property.elevator,
			bedrooms: form.property.bedrooms,
			bathrooms: form.property.bathrooms,
			suites: form.property.suites,
			parkingLots: form.property.parkingLots,
			terrainArea: form.property.terrainArea,
			buildingArea: form.property.buildingArea,
			totalUtilTerrainArea: form.property.totalUtilTerrainArea,
			condominium: form.property.condominium,
			IPTU: form.property.IPTU,
			value: form.property.value,
			owner: form.property.owner
        };
    }

    private parseCommissionPayable(form: any): CreateCommissionPayable {
        const property: Property = form.property;
        const broker: Broker = this._authenticationService?.broker as Broker;
        const value = form.property.value || 0;
        const percentage = this._authenticationService.company?.percentageCommissionPayableForPropertyCaptured || 0;

        return {
            date: moment().format('YYYY-MM-DD'),
            valueClosedDeals: 0,
            valuePropertyCaptured: (value * percentage) / 100,
            broker: broker,
            property: property
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
            isCustomer: false,
            isProperty: true,
            company: form.company,
            property: form.property,
            neighborhood
        };
    }

    private createProperty(): void {
        const subscription: Subscription = this._propertyService
            .create(this.parseCreateProperty(this.formGroup.value))
            .subscribe((data: Property) => {
                if (data) {
                    this.property = data;
                    this.formGroup.get('property')?.patchValue(this.property);
					this.findState();
                    this.uploadFiles();

                    if (this.isBroker && data.value) {
                        this.createCommissionPayable();
                    }
                }
            });

        this.subscriptions.push(subscription);
    }

    private updateProperty(): void {
        if (this.property.id) {
            const subscription: Subscription = this._propertyService
                .update(this.parseUpdateProperty(this.formGroup.value), this.property.id)
                .subscribe((data: UpdateProperty) => {});

            this.subscriptions.push(subscription);
        }
    }

    private createCommissionPayable(): void {
        const subscription: Subscription = this._commissionPayableService
            .create(this.parseCommissionPayable(this.formGroup.value))
            .subscribe((data: CommissionPayable) => {});

        this.subscriptions.push(subscription);
    }

    private createAddress(): void {
        const subscription: Subscription = this._addressService
            .create(this.parseCreateAddress(this.formGroup.value, this.neighborhood))
            .subscribe((data: Address) => {
                if (data) {
                    this.address = data;
                    this._router.navigate([`${this.path}/list`]);
                    this._alertService.openSnackBar(`Imóvel de código ${this.property.id} criado com sucesso!`);
                }
            });

        this.subscriptions.push(subscription);
    }

    private createNeighborhood(): void {
        const subscription: Subscription = this._neighborhoodService
            .create(
                this.parseNeighborhood(
                    this.formGroup.get('address')?.get('neighborhood')?.value,
                    this.city
                )
            )
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
        const subscription: Subscription = this._stateService.index().subscribe((data: State[]) => {
            if (data && data.length > 0) {
                this.state = data.filter(
                    (state: State) => state.UF === this.formGroup.get('address')?.get('state')?.value
                )[0];

                this.createCity();
            }
        });

        this.subscriptions.push(subscription);
    }

    private uploadFiles(): void {
		if (this.property.id && this.files && this.files.size > 0) {
			const subscription: Subscription = this._propertyService
				.upload(this.files, this.property.id)
				.subscribe((data: any) => {
					if (data) {
                        if (this.property.photos) {
                            const photos: Array<string> = this.formGroup.get('property')?.get('photos')?.value
                                .map((photo: string) => {
                                    photo = `${data.path}/${photo}`;

                                    return photo;
                                });

                            this.formGroup.get('property')?.get('photos')?.setValue(JSON.stringify(photos));
                            this.updateProperty();
                        }

						this._alertService.openSnackBar('Arquivos carregados com sucesso!')
					}
				});

			this.subscriptions.push(subscription);
		}
	}

    public search(): void {
        if (this.formGroup.get('address')?.get('CEP')?.value &&
            this.formGroup.get('address')?.get('CEP')?.value.length === 8) {
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

    public onFileSelected(event: Event): void {
		if ((<HTMLInputElement>event.target).files) {
            const photos: Array<string> = new Array<string>();
			const files: FileList = (<HTMLInputElement>event.target).files as FileList;

			if (files.length > 0) {
                this.preview = [];
                this.files = new Set();

                for (let index = 0; index < files.length; index++) {
                    const element = files[index];

                    if (element.type !== 'image/jpeg') {
                        (<HTMLInputElement>event.target).value = '';
                        this._alertService.openSnackBar(`O arquivo ${element.name} não foi importado! É suportado apenas arquivos .jpeg.`);

                        continue;
                    } else {
                        photos.push(element.name);
                        this.files.add(element);
                        const fileReader = new FileReader();

                        fileReader.readAsDataURL(element);
                        fileReader.onloadend = () => {
                            if (fileReader.result) {
                                this.preview.push(fileReader.result);
                            }
                        };
                    }
                }

                this.formGroup.get('property')?.get('photos')?.setValue(photos);
			}
		}
	}

    public onSubmit(): void {
        if (this.formGroup.valid) {
            this.createProperty();
        }
    }

}

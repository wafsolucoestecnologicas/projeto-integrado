import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Property, UpdateProperty } from 'src/app/core/interfaces/property.interface';
import { Owner } from 'src/app/core/interfaces/owner.interface';
import { State } from 'src/app/core/interfaces/state.interface';
import { City, CreateCity, UpdateCity } from 'src/app/core/interfaces/city.interface';
import { Neighborhood, CreateNeighborhood, UpdateNeighborhood } from 'src/app/core/interfaces/neighborhood.interface';
import { Address, CreateAddress, UpdateAddress, ResponseViaCEPModel } from 'src/app/core/interfaces/address.interface';
import { PropertyService } from 'src/app/core/services/property.service';
import { AddressService } from 'src/app/core/services/address.service';
import { NeighborhoodService } from 'src/app/core/services/neighborhood.service';
import { CityService } from 'src/app/core/services/city.service';
import { StateService } from 'src/app/core/services/state.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-property',
    templateUrl: './edit-property.component.html',
    styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit, OnDestroy {

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
    public MASKS: typeof Masks;

    constructor(
		private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _propertyService: PropertyService,
        private readonly _addressService: AddressService,
        private readonly _neighborhoodService: NeighborhoodService,
        private readonly _cityService: CityService,
        private readonly _stateService: StateService,
        private readonly _alertService: AlertService
	) {
		this.subscriptions = new Array<Subscription>();
        this.preview = new Array<any>();
        this.path = '/content/properties';
        this.MASKS = Masks;
	}

    public ngOnInit(): void {
		this.createFormGroup();
		this.loadPropertyData();
	}

	public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

	private loadPropertyData(): void {
		const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['property']) {
					this.property = data['property'];
					this.owner = this.property.owner;
					this.formGroup.get('property')?.patchValue(this.property);

					this.loadOwners();

                    if (this.property.photos) {
                        const photos: Array<string> = JSON.parse(String(this.property.photos));

                        photos.forEach((path: string) => {
                            this.downloadFile(path);
                        });
                    }
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Im??vel n??o encontrado na base de dados!');
				}
			});

        this.subscriptions.push(subscription);
	}

	private loadOwners(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['owners'] && data['owners'].length > 0) {
                    this.owners = data['owners'];

					this.loadAdressesData();
                } else {
                    this._alertService.openSnackBar('N??o existem propriet??rios cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private loadAdressesData(): void {
        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['adresses'] && data['adresses'].length > 0) {
                    this.address = data['adresses'].filter((address: Address) => this.property.id === address.property?.id && address.isProperty)[0];

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
			property: this._formBuilder.group({
				id: [null, [Validators.required]],
				description: [null, []],
				photos: [null, []],
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
				owner: [null, [Validators.required]]
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

	private parseProperty(form: any): UpdateProperty {
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
            isCustomer: false,
            isProperty: true,
            company: form.company,
            property: form.property,
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
            isCustomer: false,
            isProperty: true,
            neighborhood
        };
    }

    private updatePhotos(): void {
        if (this.property.id) {
            const subscription: Subscription = this._propertyService
                .update(this.parseProperty(this.formGroup.value), this.property.id)
                .subscribe((data: UpdateProperty) => {});

            this.subscriptions.push(subscription);
        }
    }

    private updateProperty(): void {
        if (this.property.id) {
            const subscription: Subscription = this._propertyService
                .update(this.parseProperty(this.formGroup.value), this.property.id)
                .subscribe((data: UpdateProperty) => {
                    if (data) {
                        if (this.address) {
                            this.findState(false);
                        } else {
                            this.findState(true);
                        }

                        this.uploadFiles();
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
                        this._alertService.openSnackBar('Im??vel atualizado com sucesso!');
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
                    this._alertService.openSnackBar('Im??vel atualizado com sucesso!');
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
                            this.updatePhotos();
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
                            'API ViaCEP n??o encontrou nenhum endere??o ou o CEP ?? inv??lido!'
                        );
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

    public downloadFile(path: string): void {
		const subscription: Subscription = this._propertyService
			.download(path)
			.subscribe((data: ArrayBuffer) => {
				if (data) {
					const file: Blob = new Blob([data], { type: 'image/jpeg' });
					const fileReader = new FileReader();

                    fileReader.readAsDataURL(file);
                    fileReader.onloadend = () => {
                        if (fileReader.result) {
                            this.preview.push(fileReader.result);
                        }
                    }
				}
			});

		this.subscriptions.push(subscription);
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
                        this._alertService.openSnackBar(`O arquivo ${element.name} n??o foi importado! ?? suportado apenas arquivos .jpeg.`);

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
            if (this.property.id) {
                this.updateProperty();
            }
        }
    }

}

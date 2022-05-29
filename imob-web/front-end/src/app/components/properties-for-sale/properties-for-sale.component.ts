import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DialogComponent } from './dialog/dialog.component';
import { Property } from 'src/app/core/interfaces/property.interface';
import { CommissionReceivable } from 'src/app/core/interfaces/commission-receivable.interface';
import { City } from 'src/app/core/interfaces/city.interface';
import { Neighborhood } from 'src/app/core/interfaces/neighborhood.interface';
import { Address } from 'src/app/core/interfaces/address.interface';
import { PropertyService } from 'src/app/core/services/property.service';
import { CommissionReceivableService } from 'src/app/core/services/commission-receivable.service';
import { AddressService } from 'src/app/core/services/address.service';
import { NeighborhoodService } from 'src/app/core/services/neighborhood.service';
import { CityService } from 'src/app/core/services/city.service';

@Component({
    selector: 'imob-properties-for-sale',
    templateUrl: './properties-for-sale.component.html',
    styleUrls: ['./properties-for-sale.component.css']
})
export class PropertiesForSaleComponent implements OnInit, OnDestroy {

	private subscriptions: Subscription[];
	private properties: Property[];
	private commissionsReceivable: CommissionReceivable[];
    private cities: City[];
	private city: City;
    private neighborhoods: Neighborhood[];
	private neighborhood: Neighborhood;
    private adresses: Address[];
	private address: Address;
	private CNPJ: string;
	public propertiesForSale: Property[];
	public preview: any[];
	public loadedAdresses: boolean;
	public loadedNeighborhoods: boolean;
	public loadedCities: boolean;

    constructor(
		private readonly _router: Router,
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _propertyService: PropertyService,
		private readonly _commissionReceivableService: CommissionReceivableService,
		private readonly _addressService: AddressService,
		private readonly _neighborhoodService: NeighborhoodService,
		private readonly _cityService: CityService,
		public dialog: MatDialog
	) {
		this.subscriptions = new Array<Subscription>();
		this.properties = new Array<Property>();
		this.commissionsReceivable = new Array<CommissionReceivable>();
		this.propertiesForSale = new Array<Property>();
		this.preview = new Array<any>();
		this.loadedAdresses = false;
		this.loadedNeighborhoods = false;
		this.loadedCities = false;
	}

    public ngOnInit(): void {
		this.loadParams();
	}

	public ngOnDestroy(): void {
		this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
	}

	private loadParams(): void {
		const subscription: Subscription = this._activatedRoute
			.params
			.subscribe((data: Params) => {
				if (data) {
					this.CNPJ = data['cnpj'];
					this.loadProperties();
					this.loadCommissionsReceivable();
					this.loadAdressesData();
					this.loadNeighborhoodsData();
					this.loadCitiesData();
				}
			});

		this.subscriptions.push(subscription);
	}

	private loadProperties(): void {
		const subscription: Subscription = this._propertyService
			.sale(this.CNPJ)
			.subscribe((data: Property[]) => {
				if (data) {
					this.properties = data;
					this.filterProperties();
				}
			});

		this.subscriptions.push(subscription);
	}

	private loadCommissionsReceivable(): void {
		const subscription: Subscription = this._commissionReceivableService
			.sale(this.CNPJ)
			.subscribe((data: CommissionReceivable[]) => {
				if (data) {
					this.commissionsReceivable = data;
				}
			});

		this.subscriptions.push(subscription);
	}

	private loadAdressesData(): void {
        const subscription: Subscription = this._addressService
            .index()
            .subscribe((data: Address[]) => {
                if (data) {
                    this.adresses = data;
					this.loadedAdresses = true;
                }
            });

        this.subscriptions.push(subscription);
    }

    private loadNeighborhoodsData(): void {
        const subscription: Subscription = this._neighborhoodService
            .index()
            .subscribe((data: Neighborhood[]) => {
                if (data) {
                    this.neighborhoods = data;
					this.loadedNeighborhoods = true;
                }
            });

        this.subscriptions.push(subscription);
    }

    private loadCitiesData(): void {
        const subscription: Subscription = this._cityService
            .index()
            .subscribe((data: City[]) => {
                if (data) {
                    this.cities = data;
					this.loadedCities = true;
                }
            });

        this.subscriptions.push(subscription);
    }

	private filterProperties(): void {
		this.propertiesForSale = this.properties.filter((property: Property) => {
			let flag = false;

			this.commissionsReceivable.forEach((commissionReceivable: CommissionReceivable) => {
				if (commissionReceivable.property.id === property.id) flag = true;
			});

			if (flag) {
				return false;
			} else {
				return true;
			}
		});

		this.propertiesForSale.map((property: Property) => {
			if (property.photos) {
				if (JSON.parse(String(property.photos)).length > 0) {
					let photos: Array<string> = JSON.parse(String(property.photos));
	
					photos = photos.map((path: string) => {
						return `${environment.URL}/${path.slice(7)}`;
					});

					property.photos = JSON.parse(JSON.stringify(photos));
				}
			}
		});
	}

	private findAddress(id: number): Address | undefined {
		return this.adresses.find((address: Address) => address.property?.id === id && address.isProperty) as Address;;
	}

	private findNeighborhood(id: number): Neighborhood | undefined {
		return this.neighborhoods.find((neighborhood: Neighborhood) => neighborhood.id === id);
	}

	private findCity(id: number): City | undefined {
		return this.cities.find((city: City) => city.id === id);
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

	public countPhotos(photos: any): number {
		return photos.length
	}

	public parsePhotos(photos: any): any {
		return photos;
	}

	public searchAddress(id: number): string {
		this.address = this.findAddress(id) as Address;
		this.neighborhood = this.findNeighborhood(this.address.neighborhood.id as number) as Neighborhood;
		this.city = this.findCity(this.neighborhood.city.id as number) as City;

		return `${this.address.street}, ${this.address.number}, ${this.neighborhood.neighborhood} - ${this.city.city}, ${this.city.state.UF}`;
	}

	public openDialog(photo: any): void {
		const dialogRef: MatDialogRef<any> = this.dialog.open(DialogComponent, {
			width: '950px',
			data: {
				photo
			}
		});
	}

}

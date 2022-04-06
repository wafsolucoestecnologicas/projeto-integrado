import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Advisor } from 'src/app/core/interfaces/advisor.interface';
import { State } from 'src/app/core/interfaces/state.interface';
import { City } from 'src/app/core/interfaces/city.interface';
import { Neighborhood } from 'src/app/core/interfaces/neighborhood.interface';
import { Address } from 'src/app/core/interfaces/address.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-view-advisor',
    templateUrl: './view-advisor.component.html',
    styleUrls: ['./view-advisor.component.css']
})
export class ViewAdvisorComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public advisor: Advisor;
    public state: State;
    public city: City;
    public neighborhood: Neighborhood;
    public address: Address;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/advisors';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.loadAdvisorData();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private loadAdvisorData(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['advisor']) {
					this.advisor = data['advisor'];

                    this.loadAdressesData();
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Despachante não encontrado na base de dado!');
				}
			});

        this.subscriptions.push(subscription);
    }

    private loadAdressesData(): void {
        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['adresses'] && data['adresses'].length > 0) {
                    this.address = data['adresses'].filter((address: Address) => this.advisor.id === address.advisor?.id && address.isAdvisor)[0];

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
                    }
                }
            });

        this.subscriptions.push(subscription);
    }

}

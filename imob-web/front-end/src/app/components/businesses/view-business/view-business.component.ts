import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Business } from 'src/app/core/interfaces/business.interface';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-view-business',
    templateUrl: './view-business.component.html',
    styleUrls: ['./view-business.component.css']
})
export class ViewBusinessComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public business: Business;
    public path: string;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/businesses';
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute.data.subscribe((data: Data) => {
            if (data && data['business']) {
                this.business = data['business'];
            } else {
                this._router.navigate([`${this.path}/list`]);
                this._alertService.openSnackBar('Negócio não encontrado na base de dados!');
            }
        });

        this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}

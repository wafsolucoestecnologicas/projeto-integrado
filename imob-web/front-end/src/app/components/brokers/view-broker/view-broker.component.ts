import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Broker } from 'src/app/core/interfaces/broker.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-view-broker',
    templateUrl: './view-broker.component.html',
    styleUrls: ['./view-broker.component.css']
})
export class ViewBrokerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public broker: Broker;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/brokers';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['broker']) {
					this.broker = data['broker'];
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Corretor não encontrado na base de dados!');
				}
			});

		this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }
	
}

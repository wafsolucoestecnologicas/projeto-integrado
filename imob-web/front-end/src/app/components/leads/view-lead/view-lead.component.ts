import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Lead } from 'src/app/core/interfaces/lead.interface';
import { Masks } from 'src/app/shared/enums/masks.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-view-lead',
    templateUrl: './view-lead.component.html',
    styleUrls: ['./view-lead.component.css']
})
export class ViewLeadComponent implements OnInit, OnDestroy {

	private subscriptions: Subscription[];
    public lead: Lead;
    public path: string;
	public MASKS: typeof Masks;

    constructor(
		private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
	) {
		this.subscriptions = new Array<Subscription>();
		this.path = '/content/leads';
		this.MASKS = Masks;
	}

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['lead']) {
					this.lead = data['lead'];
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Lead não encontrada na base de dados!');
				}
			});

		this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}

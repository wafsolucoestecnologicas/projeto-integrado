import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Secretary } from 'src/app/core/interfaces/secretary.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-view-secretary',
    templateUrl: './view-secretary.component.html',
    styleUrls: ['./view-secretary.component.css']
})
export class ViewSecretaryComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public secretary: Secretary;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/secretaries';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['secretary']) {
					this.secretary = data['secretary'];
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Secretária não encontrada na base de dados!');
				}
			});

        this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }
	
}

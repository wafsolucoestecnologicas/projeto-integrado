import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Manager } from 'src/app/core/interfaces/manager.interface';
import { Masks } from 'src/app/shared/enums/masks.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-view-manager',
    templateUrl: './view-manager.component.html',
    styleUrls: ['./view-manager.component.css']
})
export class ViewManagerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public manager: Manager;
    public path: string;
	public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/managers';
		this.MASKS = Masks;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['manager']) {
					this.manager = data['manager'];
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Gestor não encontrado na base de dados!');
				}
			});

        this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}

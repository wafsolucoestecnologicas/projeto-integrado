import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Advisor } from 'src/app/core/interfaces/advisor.interface';
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
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['advisor']) {
					this.advisor = data['advisor'];
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Despachante não encontrado na base de dado!');
				}
			});

        this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from 'src/app/core/interfaces/user.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Profiles } from 'src/app/core/enums/profile.enum';

@Component({
    selector: 'imob-view-user',
    templateUrl: './view-user.component.html',
    styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public user: User;
    public path: string;
	public PROFILES: typeof Profiles;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
		this.path = '/content/users';
		this.PROFILES = Profiles;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['user']) {
					this.user = data['user'];
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Usuário não encontrado na base de dados!');
				}
			});

		this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}

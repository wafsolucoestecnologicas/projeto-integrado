import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Business, DeleteBusiness } from 'src/app/core/interfaces/business.interface';
import { BusinessService } from 'src/app/core/services/business.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-delete-business',
    templateUrl: './delete-business.component.html',
    styleUrls: ['./delete-business.component.css']
})
export class DeleteBusinessComponent implements OnInit, OnDestroy {

	private subscriptions: Subscription[];
    public business: Business;

    constructor(
		private readonly _businessService: BusinessService,
        private readonly _alertService: AlertService,
        public _matDialogRef: MatDialogRef<DeleteBusinessComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { [key: string]: Business }
	) {
		this.subscriptions = new Array<Subscription>();
	}

    public ngOnInit(): void {
        this.business = this.data.business;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public deleteBusiness(): void {
        if (this.business.id) {
            const subscription: Subscription = this._businessService
                .delete(this.business.id)
                .subscribe((data: DeleteBusiness) => {
                    if (data && data.business) {
                        this._alertService.openSnackBar('Negócio deletado com sucesso!');
                        this._matDialogRef.close(this.business.id);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

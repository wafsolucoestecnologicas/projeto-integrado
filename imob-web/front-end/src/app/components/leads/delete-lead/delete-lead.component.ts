import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Lead, DeleteLead } from 'src/app/core/interfaces/lead.interface';
import { LeadService } from 'src/app/core/services/lead.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-delete-lead',
    templateUrl: './delete-lead.component.html',
    styleUrls: ['./delete-lead.component.css']
})
export class DeleteLeadComponent implements OnInit, OnDestroy {

	private subscriptions: Subscription[];
    public lead: Lead;

    constructor(
		private readonly _leadService: LeadService,
        private readonly _alertService: AlertService,
        public _matDialogRef: MatDialogRef<DeleteLeadComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { [key: string]: Lead }
	) {
		this.subscriptions = new Array<Subscription>();
	}

    public ngOnInit(): void {
        this.lead = this.data.lead;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public deleteLead(): void {
        if (this.lead.id) {
            const subscription: Subscription = this._leadService
                .delete(this.lead.id)
                .subscribe((data: DeleteLead) => {
                    if (data && data.lead) {
                        this._alertService.openSnackBar('Lead deletada com sucesso!');
                        this._matDialogRef.close(this.lead.id);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Owner, DeleteOwner } from 'src/app/core/interfaces/owner.interface';
import { OwnerService } from 'src/app/core/services/owner.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-delete-owner',
    templateUrl: './delete-owner.component.html',
    styleUrls: ['./delete-owner.component.css']
})
export class DeleteOwnerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public owner: Owner;

    constructor(
		private readonly _ownerService: OwnerService,
        private readonly _alertService: AlertService,
        public _matDialogRef: MatDialogRef<DeleteOwnerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { [key: string]: Owner }
	) {
		this.subscriptions = new Array<Subscription>();
	}

    public ngOnInit(): void {
        this.owner = this.data.owner;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public deleteOwner(): void {
        if (this.owner.id) {
            const subscription: Subscription = this._ownerService
                .delete(this.owner.id)
                .subscribe((data: DeleteOwner) => {
                    if (data && data.owner) {
                        this._alertService.openSnackBar('owner deletada com sucesso!');
                        this._matDialogRef.close(this.owner.id);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Property, DeleteProperty } from 'src/app/core/interfaces/property.interface';
import { PropertyService } from 'src/app/core/services/property.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-delete-property',
    templateUrl: './delete-property.component.html',
    styleUrls: ['./delete-property.component.css']
})
export class DeletePropertyComponent implements OnInit {

	private subscriptions: Subscription[];
    public property: Property;

    constructor(
		private readonly _propertyService: PropertyService,
        private readonly _alertService: AlertService,
        public _matDialogRef: MatDialogRef<DeletePropertyComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { [key: string]: Property }
	) {
		this.subscriptions = new Array<Subscription>();
	}

    public ngOnInit(): void {
        this.property = this.data.property;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public deleteProperty(): void {
        if (this.property.id) {
            const subscription: Subscription = this._propertyService
                .delete(this.property.id)
                .subscribe((data: DeleteProperty) => {
                    if (data && data.property) {
                        this._alertService.openSnackBar('Imóvel deletado com sucesso!');
                        this._matDialogRef.close(this.property.id);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

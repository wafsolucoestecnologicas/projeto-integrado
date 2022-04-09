import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Customer, DeleteCustomer } from 'src/app/core/interfaces/customer.interface';
import { CustomerService } from 'src/app/core/services/customer.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-delete-customer',
    templateUrl: './delete-customer.component.html',
    styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public customer: Customer;

    constructor(
		private readonly _customerService: CustomerService,
        private readonly _alertService: AlertService,
        public _matDialogRef: MatDialogRef<DeleteCustomerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { [key: string]: Customer }
	) {
		this.subscriptions = new Array<Subscription>();
	}

    public ngOnInit(): void {
        this.customer = this.data.customer;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public deleteCustomer(): void {
        if (this.customer.id) {
            const subscription: Subscription = this._customerService
                .delete(this.customer.id)
                .subscribe((data: DeleteCustomer) => {
                    if (data && data.customer) {
                        this._alertService.openSnackBar('customer deletada com sucesso!');
                        this._matDialogRef.close(this.customer.id);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

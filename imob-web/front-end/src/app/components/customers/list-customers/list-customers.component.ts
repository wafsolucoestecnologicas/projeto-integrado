import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';
import { Customer } from 'src/app/core/interfaces/customer.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-customers',
    templateUrl: './list-customers.component.html',
    styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private customer: Customer | undefined;
    private customers: Customer[];
    public dataSource: MatTableDataSource<Customer>;
    public displayedColumns: string[];
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService,
        public _matDialog: MatDialog
    ) {
        this.subscriptions = new Array<Subscription>();
        this.customers = new Array<Customer>();
        this.displayedColumns = new Array<string>(
            'name',
            'surname',
            'CPF',
            'cellPhone',
            'email',
            'options'
        );
        this.path = '/content/customers';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['customers'] && data['customers'].length > 0) {
					this.customers = data['customers'];
					this.dataSource = new MatTableDataSource<Customer>(this.customers);
				} else {
					this._alertService.openSnackBar('Não existem clientes cadastrados na base de dados!');
				}
			});

        this.subscriptions.push(subscription);
    }

    public ngAfterViewInit(): void {
        if (this.dataSource) this.dataSource.paginator = this.paginator;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public redirectToView(id: number): void {
		this._router.navigate([`${this.path}/view`, id]);
	}

	public redirectToEdit(id: number): void {
		this._router.navigate([`${this.path}/edit`, id]);
	}

    public openDialog(id: number): void {
        const dialogRef: MatDialogRef<DeleteCustomerComponent> = this._matDialog
            .open(DeleteCustomerComponent, {
                width: '600px',
                data: {
                    customer: this.customers.find((customer: Customer) => customer.id === id)
                }
            });

        const subscription: Subscription = dialogRef
            .afterClosed()
            .subscribe((id: number) => {
                this.customer = this.customers.find((customer: Customer) => customer.id === id);

                if (this.customer) {
                    this.customers = this.customers.filter((customer: Customer) => customer.id !== id);
                    this.dataSource.data.splice(this.dataSource.data.indexOf(this.customer, 1));
                    this.dataSource._updateChangeSubscription();
                }
            });

        this.subscriptions.push(subscription);
    }
	
}

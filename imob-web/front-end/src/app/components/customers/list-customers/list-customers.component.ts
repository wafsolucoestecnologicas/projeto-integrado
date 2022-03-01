import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Customer } from 'src/app/core/interfaces/customer.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
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
    private customers: Customer[];
    public dataSource: MatTableDataSource<Customer>;
    public displayedColumns: string[];
    public MASKS: typeof Masks;

    constructor(
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.customers = new Array<Customer>();
        this.displayedColumns = new Array<string>(
            'name',
            'surname',
            'CPF',
            'email',
            'cellPhone',
            'options'
        );
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
	
}

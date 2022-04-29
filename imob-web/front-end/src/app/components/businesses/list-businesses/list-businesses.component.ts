import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { DeleteBusinessComponent } from '../delete-business/delete-business.component';
import { Business } from 'src/app/core/interfaces/business.interface';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-list-businesses',
    templateUrl: './list-businesses.component.html',
    styleUrls: ['./list-businesses.component.css']
})
export class ListBusinessesComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private business: Business | undefined;
    private businesses: Business[];
    public dataSource: MatTableDataSource<Business>;
    public displayedColumns: string[];
    public path: string;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoutes: ActivatedRoute,
        private readonly _alertService: AlertService,
        public _matDialog: MatDialog
    ) {
        this.subscriptions = new Array<Subscription>();
        this.businesses = new Array<Business>();
        this.displayedColumns = new Array<string>(
            'id',
            'status',
            'dateVisit',
            'dateSale',
            'createdAt',
            'updatedAt',
            'options'
        );
        this.path = '/content/businesses';
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoutes
			.data
			.subscribe((data: Data) => {
				if (data && data['businesses'] && data['businesses'].length > 0) {
					this.businesses = data['businesses'];
					this.dataSource = new MatTableDataSource<Business>(this.businesses);
				} else {
					this._alertService.openSnackBar('Não existem negócios cadastrados na base de dados!');
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
    
	public reject(): void {}

	public close(): void {}

    public redirectToView(id: number): void {
        this._router.navigate([`${this.path}/view`, id]);
    }

    public redirectToEdit(id: number): void {
        this._router.navigate([`${this.path}/edit`, id]);
    }

    public openDialog(id: number): void {
        const dialogRef: MatDialogRef<DeleteBusinessComponent> = this._matDialog
			.open(DeleteBusinessComponent, {
				width: '600px',
				data: {
					business: this.businesses.find((business: Business) => business.id === id)
				}
			});

        const subscription: Subscription = dialogRef
			.afterClosed()
			.subscribe((id: number) => {
				this.business = this.businesses.find((business: Business) => business.id === id);

				if (this.business) {
					this.businesses = this.businesses.filter((business: Business) => business.id !== id);
					this.dataSource.data.splice(this.dataSource.data.indexOf(this.business, 1));
					this.dataSource._updateChangeSubscription();
				}
			});

        this.subscriptions.push(subscription);
    }

}

import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { DeletePropertyComponent } from '../delete-property/delete-property.component';
import { Property } from 'src/app/core/interfaces/property.interface';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-list-properties',
    templateUrl: './list-properties.component.html',
    styleUrls: ['./list-properties.component.css']
})
export class ListPropertiesComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild(MatPaginator)
	public paginator: MatPaginator;

	private subscriptions: Subscription[];
	private property: Property | undefined;
	private properties: Property[];
	public dataSource: MatTableDataSource<Property>;
	public displayedColumns: string[];
	public path: string;

    constructor(
		private readonly _router: Router,
        private readonly _activatedRoutes: ActivatedRoute,
        private readonly _alertService: AlertService,
        public _matDialog: MatDialog
	) {
		this.subscriptions = new Array<Subscription>();
        this.properties = new Array<Property>();
        this.displayedColumns = new Array<string>(
			'id',
            'owner',
			'value',
            'checked',
            'createdAt',
            'updatedAt',
            'options'
        );
        this.path = '/content/properties';
	}

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoutes
            .data
            .subscribe((data: Data) => {
                if (data && data['properties'] && data['properties'].length > 0) {
                    this.properties = data['properties'];
                    this.dataSource = new MatTableDataSource<Property>(this.properties);
                } else {
                    this._alertService.openSnackBar('Não existem imóveis cadastradas na base de dados!');
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
        const dialogRef: MatDialogRef<DeletePropertyComponent> = this._matDialog
            .open(DeletePropertyComponent, {
                width: '600px',
                data: {
                    property: this.properties.find((property: Property) => property.id === id)
                }
            });

        const subscription: Subscription = dialogRef
            .afterClosed()
            .subscribe((id: number) => {
                this.property = this.properties.find((property: Property) => property.id === id);

                if (this.property) {
                    this.properties = this.properties.filter((property: Property) => property.id !== id);
                    this.dataSource.data.splice(this.dataSource.data.indexOf(this.property, 1));
                    this.dataSource._updateChangeSubscription();
                }
            });

        this.subscriptions.push(subscription);
    }

}

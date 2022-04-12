import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { DeleteLeadComponent } from '../delete-lead/delete-lead.component';
import { Lead } from 'src/app/core/interfaces/lead.interface';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-list-leads',
    templateUrl: './list-leads.component.html',
    styleUrls: ['./list-leads.component.css']
})
export class ListLeadsComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild(MatPaginator)
	public paginator: MatPaginator;

	private subscriptions: Subscription[];
	private lead: Lead | undefined;
	private leads: Lead[];
	public dataSource: MatTableDataSource<Lead>;
	public displayedColumns: string[];
	public path: string;

    constructor(
		private readonly _router: Router,
        private readonly _activatedRoutes: ActivatedRoute,
        private readonly _alertService: AlertService,
        public _matDialog: MatDialog
	) {
		this.subscriptions = new Array<Subscription>();
        this.leads = new Array<Lead>();
        this.displayedColumns = new Array<string>(
            'source',
            'name',
            'surname',
            'cellPhone',
            'email',
            'options'
        );
        this.path = '/content/leads';
	}

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoutes
            .data
            .subscribe((data: Data) => {
                if (data && data['leads'] && data['leads'].length > 0) {
                    this.leads = data['leads'];
                    this.dataSource = new MatTableDataSource<Lead>(this.leads);
                } else {
                    this._alertService.openSnackBar('Não existem leads cadastradas na base de dados!');
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
        const dialogRef: MatDialogRef<DeleteLeadComponent> = this._matDialog
            .open(DeleteLeadComponent, {
                width: '600px',
                data: {
                    lead: this.leads.find((lead: Lead) => lead.id === id)
                }
            });

        const subscription: Subscription = dialogRef
            .afterClosed()
            .subscribe((id: number) => {
                this.lead = this.leads.find((lead: Lead) => lead.id === id);

                if (this.lead) {
                    this.leads = this.leads.filter((lead: Lead) => lead.id !== id);
                    this.dataSource.data.splice(this.dataSource.data.indexOf(this.lead, 1));
                    this.dataSource._updateChangeSubscription();
                }
            });

        this.subscriptions.push(subscription);
    }

}

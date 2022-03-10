import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Company } from 'src/app/core/interfaces/company.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild(MatPaginator)
	public paginator: MatPaginator;

	private subscriptions: Subscription[];
	private companie: Company;
	private companies: Company[];
	public dataSource: MatTableDataSource<Company>;
	public displayedColumns: string[];
	public path: string;
	public MASKS: typeof Masks;

    constructor(
		private readonly _router: Router,
        private readonly _activatedRoutes: ActivatedRoute,
        private readonly _alertService: AlertService,
        public _matDialog: MatDialog
	) {
		this.subscriptions = new Array<Subscription>();
		this.companies = new Array<Company>();
		this.displayedColumns = new Array<string>(
			'CNPJ',
			'corporateName',
			'stateRegistration',
			'options'
		);
		this.path = '/content/companies';
		this.MASKS = Masks;
	}

    public ngOnInit(): void {
		const subscription: Subscription = this._activatedRoutes
			.data
			.subscribe((data: Data) => {
				if (data && data['companies']) {
					this.companies = data['companies'];
					this.dataSource = new MatTableDataSource<Company>(this.companies);
				} else {
					this._alertService.openSnackBar('Não existem imobiliárias cadastradas na base de dados!');
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

}

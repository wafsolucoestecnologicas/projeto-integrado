import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { CommissionPayable } from 'src/app/core/interfaces/commission-payable.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-commissions-payable',
    templateUrl: './list-commissions-payable.component.html',
    styleUrls: ['./list-commissions-payable.component.css']
})
export class ListCommissionsPayableComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private commissionPayable: CommissionPayable | undefined;
    private commissionsPayable: CommissionPayable[];
    public dataSource: MatTableDataSource<CommissionPayable>;
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
        this.commissionsPayable = new Array<CommissionPayable>();
        this.displayedColumns = new Array<string>(
            'date',
            'valueClosedDeals',
			'valuePropertyCaptured',
			'broker',
            'property',
            'createdAt',
            'updatedAt'
        );
        this.path = '/content/commissions-payable';
        this.MASKS = Masks;
	}

    public ngOnInit(): void {
		const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['commissionsPayable'] && data['commissionsPayable'].length > 0) {
					this.commissionsPayable = data['commissionsPayable'];
					this.dataSource = new MatTableDataSource<CommissionPayable>(this.commissionsPayable);
				} else {
					this._alertService.openSnackBar('Não existem comissões a pagar cadastrados na base de dados!');
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

import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { CommissionReceivable } from 'src/app/core/interfaces/commission-receivable.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-commissions-receivable',
    templateUrl: './list-commissions-receivable.component.html',
    styleUrls: ['./list-commissions-receivable.component.css']
})
export class ListCommissionsReceivableComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private commissionReceivable: CommissionReceivable | undefined;
    private commissionsReceivable: CommissionReceivable[];
    public dataSource: MatTableDataSource<CommissionReceivable>;
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
        this.commissionsReceivable = new Array<CommissionReceivable>();
        this.displayedColumns = new Array<string>(
            'date',
            'value',
            'property',
            'createdAt',
            'updatedAt'
        );
        this.path = '/content/commissions-receivable';
        this.MASKS = Masks;
	}

    public ngOnInit(): void {
		const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['commissionsReceivable'] && data['commissionsReceivable'].length > 0) {
					this.commissionsReceivable = data['commissionsReceivable'];
					this.dataSource = new MatTableDataSource<CommissionReceivable>(this.commissionsReceivable);
				} else {
					this._alertService.openSnackBar('Não existem comissões a receber cadastrados na base de dados!');
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

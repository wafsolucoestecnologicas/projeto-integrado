import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Broker } from 'src/app/core/interfaces/broker.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-brokers',
    templateUrl: './list-brokers.component.html',
    styleUrls: ['./list-brokers.component.css']
})
export class ListBrokersComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private brokers: Broker[];
    public dataSource: MatTableDataSource<Broker>;
    public displayedColumns: string[];
    public MASKS: typeof Masks;

    constructor(
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.brokers = new Array<Broker>();
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
				if (data && data['brokers'] && data['brokers'].length > 0) {
					this.brokers = data['brokers'];
					this.dataSource = new MatTableDataSource<Broker>(this.brokers);
				} else {
					this._alertService.openSnackBar('Não existem corretores cadastrados na base de dados!');
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

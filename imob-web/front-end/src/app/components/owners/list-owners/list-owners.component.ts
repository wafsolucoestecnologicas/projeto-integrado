import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Owner } from 'src/app/core/interfaces/owner.interface';
import { Masks } from 'src/app/shared/enums/masks.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-list-owners',
    templateUrl: './list-owners.component.html',
    styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private owners: Owner[];
    public dataSource: MatTableDataSource<Owner>;
    public displayedColumns: string[];
    public MASKS: typeof Masks;

    constructor(
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.owners = new Array<Owner>();
        this.displayedColumns = new Array<string>(
            'name',
            'surname',
            'CPF',
            'email',
            'cellPhone',
            'checked',
            'options'
        );
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute.data.subscribe((data: Data) => {
            if (data && data['owners'] && data['owners'].length > 0) {
                this.owners = data['owners'];
                this.dataSource = new MatTableDataSource<Owner>(this.owners);
            } else {
                this._alertService.openSnackBar(
                    'Não existem proprietários cadastrados na base de dados!'
                );
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

import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { AlertService } from 'src/app/shared/services/alert.service';
import { Manager } from 'src/app/core/interfaces/manager.interface';
import { ManagerService } from 'src/app/core/services/manager.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-managers',
    templateUrl: './list-managers.component.html',
    styleUrls: ['./list-managers.component.css']
})
export class ListManagersComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private managers: Manager[];
    public dataSource: MatTableDataSource<Manager>;
    public displayedColumns: string[];
    public show: boolean;
    public MASKS: typeof Masks;

    constructor(
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService,
        private readonly _managerService: ManagerService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.managers = new Array<Manager>();
        this.displayedColumns = new Array<string>(
            'name',
            'surname',
            'CPF',
            'email',
            'cellPhone',
            'options'
        );
        this.show = false;
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data.managers && data.managers.length > 0) {
                    this.managers = data['managers'];
                    this.show = true;
                    this.dataSource = new MatTableDataSource<Manager>(this.managers);
                } else {
                    this._alertService.openSnackBar('Não existem gestores cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
    }

    public ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}

import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Advisor } from 'src/app/core/interfaces/advisor.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-advisors',
    templateUrl: './list-advisors.component.html',
    styleUrls: ['./list-advisors.component.css']
})
export class ListAdvisorsComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private advisors: Advisor[];
    public dataSource: MatTableDataSource<Advisor>;
    public displayedColumns: string[];
    public MASKS: typeof Masks;

    constructor(
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.advisors = new Array<Advisor>();
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
				if (data && data['advisors'] && data['advisors'].length > 0) {
					this.advisors = data['advisors'];
					this.dataSource = new MatTableDataSource<Advisor>(this.advisors);
				} else {
					this._alertService.openSnackBar(
						'Não existem despachantes cadastrados na base de dados!'
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

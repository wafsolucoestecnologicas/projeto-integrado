import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { Secretary } from 'src/app/core/interfaces/secretary.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-secretaries',
    templateUrl: './list-secretaries.component.html',
    styleUrls: ['./list-secretaries.component.css']
})
export class ListSecretariesComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private secretaries: Secretary[];
    public dataSource: MatTableDataSource<Secretary>;
    public displayedColumns: string[];
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.secretaries = new Array<Secretary>();
        this.displayedColumns = new Array<string>(
            'name',
            'surname',
            'CPF',
            'cellPhone',
            'email',
            'options'
        );
        this.path = '/content/secretaries';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['secretaries'] && data['secretaries'].length > 0) {
					this.secretaries = data['secretaries'];
					this.dataSource = new MatTableDataSource<Secretary>(this.secretaries);
				} else {
					this._alertService.openSnackBar('Não existem secretárias cadastradas na base de dados!');
				}
			});

        this.subscriptions.push(subscription);
    }

    public ngAfterViewInit(): void {
        if (this.dataSource) this.dataSource.paginator = this.paginator;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subcription: Subscription) => subcription.unsubscribe);
    }

    public redirectToView(id: number): void {
		this._router.navigate([`${this.path}/view`, id]);
	}

	public redirectToEdit(id: number): void {
		this._router.navigate([`${this.path}/edit`, id]);
	}

}

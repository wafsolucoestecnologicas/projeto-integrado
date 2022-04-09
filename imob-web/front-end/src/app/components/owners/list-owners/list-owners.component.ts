import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { DeleteOwnerComponent } from '../delete-owner/delete-owner.component';
import { Owner } from 'src/app/core/interfaces/owner.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-list-owners',
    templateUrl: './list-owners.component.html',
    styleUrls: ['./list-owners.component.css']
})
export class ListOwnersComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private owner: Owner | undefined;
    private owners: Owner[];
    public dataSource: MatTableDataSource<Owner>;
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
        this.owners = new Array<Owner>();
        this.displayedColumns = new Array<string>(
            'name',
            'surname',
            'CPF',
            'cellPhone',
            'checked',
            'email',
            'options'
        );
        this.path = '/content/owners';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
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

    public redirectToView(id: number): void {
		this._router.navigate([`${this.path}/view`, id]);
	}

	public redirectToEdit(id: number): void {
		this._router.navigate([`${this.path}/edit`, id]);
	}

    public openDialog(id: number): void {
        const dialogRef: MatDialogRef<DeleteOwnerComponent> = this._matDialog
            .open(DeleteOwnerComponent, {
                width: '600px',
                data: {
                    owner: this.owners.find((owner: Owner) => owner.id === id)
                }
            });

        const subscription: Subscription = dialogRef
            .afterClosed()
            .subscribe((id: number) => {
                this.owner = this.owners.find((owner: Owner) => owner.id === id);

                if (this.owner) {
                    this.owners = this.owners.filter((owner: Owner) => owner.id !== id);
                    this.dataSource.data.splice(this.dataSource.data.indexOf(this.owner, 1));
                    this.dataSource._updateChangeSubscription();
                }
            });

        this.subscriptions.push(subscription);
    }

}

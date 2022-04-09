import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { User } from 'src/app/core/interfaces/user.interface';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-list-users',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator)
    public paginator: MatPaginator;

    private subscriptions: Subscription[];
    private user: User | undefined;
    private users: User[];
    public dataSource: MatTableDataSource<User>;
    public displayedColumns: string[];
    public path: string;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoutes: ActivatedRoute,
        private readonly _alertService: AlertService,
        public _matDialog: MatDialog
    ) {
        this.subscriptions = new Array<Subscription>();
        this.users = new Array<User>();
        this.displayedColumns = new Array<string>(
            'name',
            'surname',
            'isManager',
            'isAdvisor',
            'isBroker',
            'isSecretary',
            'email',
            'options'
        );
        this.path = '/content/users';
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoutes
            .data
            .subscribe((data: Data) => {
                if (data && data['users'] && data['users'].length > 0) {
                    this.users = data['users'];
                    this.dataSource = new MatTableDataSource<User>(this.users);
                } else {
                    this._alertService.openSnackBar('Não existem usuários cadastrados na base de dados!');
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
        const dialogRef: MatDialogRef<DeleteUserComponent> = this._matDialog
            .open(DeleteUserComponent, {
                width: '600px',
                data: {
                    user: this.users.find((user: User) => user.id === id)
                }
            });

        const subscription: Subscription = dialogRef
            .afterClosed()
            .subscribe((id: number) => {
                this.user = this.users.find((user: User) => user.id === id);

                if (this.user) {
                    this.users = this.users.filter((user: User) => user.id !== id);
                    this.dataSource.data.splice(this.dataSource.data.indexOf(this.user, 1));
                    this.dataSource._updateChangeSubscription();
                }
            });

        this.subscriptions.push(subscription);
    }

}

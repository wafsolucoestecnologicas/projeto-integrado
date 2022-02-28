import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

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
    private users: User[];
    public dataSource: MatTableDataSource<User>;
    public displayedColumns: string[];
    public show: boolean;

    constructor(
        private readonly _activatedRoutes: ActivatedRoute,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.users = new Array<User>();
        this.displayedColumns = new Array<string>(
            'name',
            'surname',
            'email',
            'isManager',
            'isAdvisor',
            'isBroker',
            'isSecretary',
			'options'
        );
        this.show = false;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._activatedRoutes
			.data
			.subscribe((data: Data) => {
				if (data && data['users'] && data['users'].length > 0) {
					this.users = data['users'];
					this.show = true;
					this.dataSource = new MatTableDataSource<User>(this.users);
				} else {
					this._alertService.openSnackBar('Não existem usuários cadastrados na base de dados!');
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

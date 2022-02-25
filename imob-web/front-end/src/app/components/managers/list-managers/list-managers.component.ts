import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { Manager } from 'src/app/core/interfaces/manager.interface';
import { ManagerService } from 'src/app/core/services/manager.service';

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

    constructor(private readonly _managerService: ManagerService) {
        this.subscriptions = new Array<Subscription>();
        this.managers = new Array<Manager>();
		this.displayedColumns = new Array<string>();
        this.show = false;
    }

    public ngOnInit(): void {
		this.displayedColumns = ['id', 'name', 'surname', 'CPF', 'email'];
		this.indexManagers();
	}

    public ngAfterViewInit(): void {debugger
        this.dataSource = new MatTableDataSource<Manager>(this.managers);
        this.dataSource.paginator = this.paginator;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private indexManagers(): void {
        const subscription: Subscription = this._managerService
			.index()
			.subscribe((data: Manager[]) => {
				if (data) {
					this.managers = data;
					this.show = true;
				}
        });

		this.subscriptions.push(subscription);
    }

}

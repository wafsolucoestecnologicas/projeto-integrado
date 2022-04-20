import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { User, DeleteUser } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-delete-user',
    templateUrl: './delete-user.component.html',
    styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public user: User;

    constructor(
        private readonly _userService: UserService,
        private readonly _alertService: AlertService,
        public _matDialogRef: MatDialogRef<DeleteUserComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { [key: string]: User }
    ) {
        this.subscriptions = new Array<Subscription>();
    }

    public ngOnInit(): void {
        this.user = this.data.user;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public deleteUser(): void {
        if (this.user.id) {
            const subscription: Subscription = this._userService
                .delete(this.user.id)
                .subscribe((data: DeleteUser) => {
                    if (data && data.user && data.person) {
                        this._alertService.openSnackBar('Usuário deletado com sucesso!');
                        this._matDialogRef.close(this.user.id);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }
    
}

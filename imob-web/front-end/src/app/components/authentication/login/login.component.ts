import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AlertService } from 'src/app/shared/services/alert.service';
import { Authentication } from 'src/app/core/interfaces/authentication.interface';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
    selector: 'imob-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;

    constructor(
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
        private readonly _alertService: AlertService,
        private readonly _authenticationService: AuthenticationService
    ) {
        this.subscriptions = new Array<Subscription>();
    }

    public ngOnInit(): void {
        this.createFormGroup();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private createFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]]
        });
    }

    public onSubmit(): void {
        if (this.formGroup.valid) {
            const subscription: Subscription = this._authenticationService
                .login(this.formGroup.value)
                .subscribe((data: Authentication) => {
                    if (data) {
                        this._alertService.openSnackBar(
                            `Usuário ${data.user.name} ${data.user.surname} logado com sucesso!`
                        );

                        if (data?.manager) {
                            this._router.navigate(['content/dashboard']);
                        } else {
                            this._router.navigate(['content']);
                        }
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

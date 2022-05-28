import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from "angularx-social-login";
import { Subscription } from 'rxjs';

import { User, CreateUser } from 'src/app/core/interfaces/user.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Authentication } from 'src/app/core/interfaces/authentication.interface';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'imob-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    private user: CreateUser;
    private socialUser: SocialUser;
    public formGroup: FormGroup;

    constructor(
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
        private readonly _alertService: AlertService,
        private readonly _userService: UserService,
        private readonly _authenticationService: AuthenticationService,
        private _socialAuthService: SocialAuthService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.user = {
            name: '',
            surname: '',
            email: '',
            password: '',
            company: { id: 0 },
            profile: { id: 2 }
        };
    }

    public ngOnInit(): void {
        this.createFormGroup();

        this._socialAuthService.authState.subscribe((user: SocialUser) => {
            this.socialUser = user;

            if (this.socialUser) {
                this.user.name = this.socialUser.firstName;
                this.user.surname = this.socialUser.lastName;
                this.user.email = this.socialUser.email;
                this.user.password = '12345678';

                this.createUser();
            }
        })
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

    private createUser(): void {
        const subscription: Subscription = this._userService
            .create(this.user)
            .subscribe((data: User) => {
                if (data) {
                    this.formGroup.get('email')?.setValue(data.email);
                    this.formGroup.get('password')?.setValue(this.user.password);

                    this.onSubmit();
                }
            });

        this.subscriptions.push(subscription);
    }

    public loginWithFacebook() {
        this._socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
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

                        if (this.socialUser) {
                            setTimeout(() => {
                                this._alertService.openSnackBar(
                                    `Favor alterar sua senha de acesso!`
                                );
                            }, 10000);
                        }

                        this._router.navigate(['content/dashboard']);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

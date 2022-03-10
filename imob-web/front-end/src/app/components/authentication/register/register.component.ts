import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CustomValidations } from 'src/app/shared/validations/custom-validations';
import { User, CreateUser } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;

    constructor(
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
        private readonly _alertService: AlertService,
        private readonly _userService: UserService
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
            name: [null, [Validators.required]],
            surname: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
            confirm: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(25), CustomValidations.checkPassword()]],
            company: this._formBuilder.array([this.createCompany()]),
            profile: this._formBuilder.array([this.createProfile()])
        });
    }

    private createCompany(): FormGroup {
        return this._formBuilder.group({
            id: [0, [Validators.required]]
        });
    }

    private createProfile(): FormGroup {
        return this._formBuilder.group({
            id: [2, [Validators.required]]
        });
    }

    private parseFormGroup(form: any): CreateUser {
        return {
            name: form.name,
            surname: form.surname,
            email: form.email,
            password: form.password,
            company: form.company[0],
            profile: form.profile[0]
        };
    }

    public onSubmit(): void {
        this.formGroup.get('confirm')?.disable();

        if (this.formGroup.valid) {
            const subscription: Subscription = this._userService
                .create(this.parseFormGroup(this.formGroup.value))
                .subscribe((data: User) => {
                    if (data) {
                        this._alertService.openSnackBar(
                            `Usuário ${data.name} ${data.surname} criado com sucesso!`
                        );
                        this._router.navigate(['login']);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

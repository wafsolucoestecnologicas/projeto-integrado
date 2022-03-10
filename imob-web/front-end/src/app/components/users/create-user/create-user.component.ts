import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CustomValidations } from 'src/app/shared/validations/custom-validations';
import { UserType } from 'src/app/core/interfaces/profile.interface';
import { CreateUser, User } from 'src/app/core/interfaces/user.interface';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { UserService } from 'src/app/core/services/user.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public usersTypes: UserType[];

    constructor(
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
        private readonly _authenticationService: AuthenticationService,
        private readonly _profileService: ProfileService,
        private readonly _userService: UserService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.usersTypes = new Array<UserType>();
    }

    public ngOnInit(): void {
        this.usersTypes = this._profileService.usersTypes;
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
            userType: [null, [Validators.required]],
            company: this._formBuilder.array([this.createCompany()]),
            profile: this._formBuilder.array([this.createProfile()])
        });
    }

    private createCompany(): FormGroup {
        return this._formBuilder.group({
            id: [this._authenticationService.company?.id, [Validators.required]]
        });
    }

    private createProfile(): FormGroup {
        return this._formBuilder.group({
            id: [null, Validators.required]
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

    public setProfile(): void {
        this.formGroup.get('profile')?.setValue([{ id: this.formGroup.get('userType')?.value }]);
    }

    public onSubmit(): void {
        this.formGroup.get('confirm')?.disable();
        this.formGroup.get('userType')?.disable();

        if (this.formGroup.valid) {
            const subscription: Subscription = this._userService
                .create(this.parseFormGroup(this.formGroup.value))
                .subscribe((data: User) => {
                    if (data) {
                        this._alertService.openSnackBar(
                            `Usuário ${data.name} ${data.surname} criado com sucesso!`
                        );
                        this._router.navigate(['content/users/list']);
                    }
                });

            this.subscriptions.push(subscription);
        }
    }
    
}

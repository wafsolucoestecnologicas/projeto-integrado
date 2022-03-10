import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CustomValidations } from 'src/app/shared/validations/custom-validations';
import { User, UpdateUser } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public user: User;
    public path: string;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _userService: UserService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/users';
    }

    public ngOnInit(): void {
        this.createFormGroup();

        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['user']) {
                    this.user = data['user'];
                    this.formGroup.patchValue(this.user);
                } else {
                    this._router.navigate([`${this.path}/list`]);
                    this._alertService.openSnackBar('Usuário não encontrado na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private createFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            name: [null, [Validators.required]],
            surname: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, []],
            confirm: [null, []]
        });
    }

    private parseFormGroup(form: any): UpdateUser {
        return {
            name: form.name,
            surname: form.surname,
            email: form.email,
            password: form.password
        };
    }

    public setValidations(): void {
        this.formGroup.get('password')?.setValidators([
            Validators.required, Validators.minLength(8), Validators.maxLength(25)
        ]);
        this.formGroup.get('confirm')?.setValidators([
            Validators.required, Validators.minLength(8), Validators.maxLength(25), CustomValidations.checkPassword()
        ]);
    }

    public changePassword(): void {
        if ((this.formGroup.get('password')?.value !== '' && this.formGroup.get('password')?.value !== null) ||
            (this.formGroup.get('confirm')?.value !== '' && this.formGroup.get('confirm')?.value !== null)) {
                this.setValidations();
        } else if ((this.formGroup.get('password')?.value === '' || this.formGroup.get('password')?.value === null) &&
            (this.formGroup.get('confirm')?.value === '' || this.formGroup.get('confirm')?.value === null)) {
                this.formGroup.get('password')?.clearValidators();
                this.formGroup.get('confirm')?.clearValidators();
        }

        this.formGroup.get('password')?.updateValueAndValidity();
        this.formGroup.get('confirm')?.updateValueAndValidity();
    }

    public onSubmit(): void {
        if (this.formGroup.valid) {
            if (this.user.id) {
                const subscription: Subscription = this._userService
                    .update(this.parseFormGroup(this.formGroup.value), this.user.id)
                    .subscribe((data: UpdateUser) => {
                        if (data) {
                            this._router.navigate([`${this.path}/list`]);
                            this._alertService.openSnackBar('Usuário atualizado com sucesso!');
                        }
                    });

                this.subscriptions.push(subscription);
            }
        }
    }
    
}

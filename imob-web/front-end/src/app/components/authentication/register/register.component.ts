import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'imob-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public showError: boolean;

    constructor(
		private readonly _formBuilder: FormBuilder
	) {
        this.subscriptions = new Array<Subscription>();
        this.showError = false;
    }

    public ngOnInit(): void {
        this.formGroup = this._formBuilder.group({
            name: [null, [Validators.required]],
            surname: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
            confirm: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
            company: this._formBuilder.array([this.createCompany()]),
            profile: this._formBuilder.array([this.createProfile()])
        });
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
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

    public checkPasswords(): void {
        if (this.formGroup.get('password')?.value !== this.formGroup.get('confirm')?.value) {
            this.showError = true;
        } else {
            this.showError = false;
        }
    }

	public onSubmit(): void {
		if (this.formGroup.valid) {
            this.formGroup.get('confirm')?.disable();

            /**@TODO - Criar um método para retornar company.id e profile.id antes do envio para API */
            
			console.log(this.formGroup.value);
		}
	}

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'imob-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;

    constructor(
        private readonly _formBuilder: FormBuilder
    ) {
        this.subscriptions = new Array<Subscription>();
    }

    public ngOnInit(): void {
        this.formGroup = this._formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]]
        });
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    public onSubmit(): void {
        if (this.formGroup.valid) {
            console.log(this.formGroup.value);
        }
    }
    
}

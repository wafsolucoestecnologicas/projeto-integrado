import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'imob-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;

    constructor(
		private readonly _formBuilder: FormBuilder
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
            email: [null, [Validators.required, Validators.email]]
        });
    }

    public onSubmit(): void {
        if (this.formGroup.valid) {
            console.log(this.formGroup.value);
        }
    }

}

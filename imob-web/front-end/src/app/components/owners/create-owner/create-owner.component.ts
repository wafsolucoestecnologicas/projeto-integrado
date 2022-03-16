import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Owner, CreateOwner } from 'src/app/core/interfaces/owner.interface';
import { OwnerService } from 'src/app/core/services/owner.service';
import { Masks } from 'src/app/shared/enums/masks.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-create-owner',
    templateUrl: './create-owner.component.html',
    styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
        private readonly _ownerService: OwnerService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = 'content/owners';
        this.MASKS = Masks;
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
            birthDate: [null, [Validators.required]],
            checked: [false, [Validators.required]],
            RG: [null, [Validators.required]],
            CPF: [null, [Validators.required]],
            landline: [null, []],
            cellPhone: [null, [Validators.required]],
            profession: [null, []]
        });
    }

    private parseFormGroup(form: any): CreateOwner {
        return {
            name: form.name,
            surname: form.surname,
            email: form.email,
            birthDate: form.birthDate,
            checked: form.checked,
            RG: form.RG,
            CPF: form.CPF,
            landline: form.landline,
            cellPhone: form.cellPhone,
            profession: form.profession
        };
    }

    public onSubmit(): void {
        if (this.formGroup.valid) {
            const subscription: Subscription = this._ownerService
                .create(this.parseFormGroup(this.formGroup.value))
                .subscribe((data: Owner) => {
                    if (data) {
                        this._router.navigate([`${this.path}/list`]);
                        this._alertService.openSnackBar(
                            `Proprietário ${data.name} ${data.surname} criado com sucesso!`
                        );
                    }
                });

            this.subscriptions.push(subscription);
        }
    }

}

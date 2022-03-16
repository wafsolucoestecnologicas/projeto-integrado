import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Owner, UpdateOwner } from 'src/app/core/interfaces/owner.interface';
import { OwnerService } from 'src/app/core/services/owner.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-owner',
    templateUrl: './edit-owner.component.html',
    styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public owner: Owner;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _ownerService: OwnerService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/owners';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.createFormGroup();

        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['owner']) {
					this.owner = data['owner'];
                    this.owner.landline = this.owner.landline?.trim();
                    
					this.formGroup.patchValue(this.owner);
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Proprietário não encontrado na base de dados!');
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
            birthDate: [null, [Validators.required]],
			checked: [null, [Validators.required]],
            RG: [null, [Validators.required]],
            CPF: [null, [Validators.required]],
            landline: [null, []],
            cellPhone: [null, [Validators.required]],
            profession: [null, []]
        });
    }

    private parseFormGroup(form: any): UpdateOwner {
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
            if (this.owner.id) {
                const subscription: Subscription = this._ownerService
                    .update(this.parseFormGroup(this.formGroup.value), this.owner.id)
                    .subscribe((data: UpdateOwner) => {
                        if (data) {
                            this._router.navigate([`${this.path}/list`]);
                            this._alertService.openSnackBar('Proprietário atualizado com sucesso!');
                        }
                    });

                this.subscriptions.push(subscription);
            }
        }
    }

}

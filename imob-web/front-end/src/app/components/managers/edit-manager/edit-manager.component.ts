import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Manager, UpdateManager } from 'src/app/core/interfaces/manager.interface';
import { ManagerService } from 'src/app/core/services/manager.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-manager',
    templateUrl: './edit-manager.component.html',
    styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public manager: Manager;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _managerService: ManagerService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/managers';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.createFormGroup();

        const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['manager']) {
                    this.manager = data['manager'];
                    this.formGroup.patchValue(this.manager);
                } else {
                    this._router.navigate([`${this.path}/list`]);
                    this._alertService.openSnackBar('Gestor não encontrado na base de dados!');
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
            RG: [null, [Validators.required]],
            CPF: [null, [Validators.required]],
            landline: [null, []],
            cellPhone: [null, [Validators.required]],
            profession: [null, []]
        });
    }

    private parseFormGroup(form: any): UpdateManager {
        return {
            name: form.name,
            surname: form.surname,
            email: form.email,
            birthDate: form.birthDate,
            RG: form.RG,
            CPF: form.CPF,
            landline: form.landline,
            cellPhone: form.cellPhone,
            profession: form.profession
        };
    }

    public onSubmit(): void {
        if (this.formGroup.valid) {
            if (this.manager.id) {
                const subscription: Subscription = this._managerService
                    .update(this.parseFormGroup(this.formGroup.value), this.manager.id)
                    .subscribe((data: UpdateManager) => {
                        if (data) {
                            this._router.navigate([`${this.path}/list`]);
                            this._alertService.openSnackBar('Gestor atualizado com sucesso!');
                        }
                    });

                this.subscriptions.push(subscription);
            }
        }
    }

}

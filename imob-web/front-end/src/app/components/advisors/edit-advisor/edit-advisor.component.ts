import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Advisor, UpdateAdvisor } from 'src/app/core/interfaces/advisor.interface';
import { AdvisorService } from 'src/app/core/services/advisor.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-advisor',
    templateUrl: './edit-advisor.component.html',
    styleUrls: ['./edit-advisor.component.css']
})
export class EditAdvisorComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public advisor: Advisor;
    public path: string;
    public MASKS: typeof Masks;

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _advisorService: AdvisorService,
        private readonly _alertService: AlertService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.path = '/content/advisors';
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.createFormGroup();

        const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['advisor']) {
					this.advisor = data['advisor'];
					this.formGroup.patchValue(this.advisor);
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Despachante não encontrado na base de dados!');
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

    private parseFormGroup(form: any): UpdateAdvisor {
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
            if (this.advisor.id) {
                const subscription: Subscription = this._advisorService
                    .update(this.parseFormGroup(this.formGroup.value), this.advisor.id)
                    .subscribe((data: UpdateAdvisor) => {
                        if (data) {
                            this._router.navigate([`${this.path}/list`]);
                            this._alertService.openSnackBar('Despachante atualizado com sucesso!');
                        }
                    });

                this.subscriptions.push(subscription);
            }
        }
    }

}

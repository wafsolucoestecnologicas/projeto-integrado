import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Company, UpdateCompany } from 'src/app/core/interfaces/company.interface';
import { CompanyService } from 'src/app/core/services/company.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-company',
    templateUrl: './edit-company.component.html',
    styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit, OnDestroy {

	private subscriptions: Subscription[];
	public formGroup: FormGroup;
	public company: Company;
	public path: string;
	public MASKS: typeof Masks;

    constructor(
		private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _companyService: CompanyService,
        private readonly _alertService: AlertService
	) {
		this.subscriptions = new Array<Subscription>();
		this.path = '/content/companies';
		this.MASKS = Masks;
	}

    public ngOnInit(): void {
		this.createFormGroup();

		const subscription: Subscription = this._activatedRoute.data.subscribe((data: Data) => {
			if (data && data['company']) {
				this.company = data['company'];
				this.formGroup.patchValue(this.company);
			} else {
				this._router.navigate([`${this.path}/list`]);
				this._alertService.openSnackBar('Imobiliária não encontrada na base de dados!');
			}
		});

		this.subscriptions.push(subscription);
	}

	public ngOnDestroy(): void {
		this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
	}

	private createFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            id: [null, [Validators.required]],
            CNPJ: [null, [Validators.required]],
            corporateName: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(256)]],
            stateRegistration: [null, [Validators.required]],
            percentageCommissionReceivable: [null, []],
            percentageCommissionPayableForClosedDeals: [null, []],
            percentageCommissionPayableForPropertyCaptured: [null, []]
        });
    }

    private parseFormGroup(form: any): UpdateCompany {
        return {
            CNPJ: form.CNPJ,
            corporateName: form.corporateName,
            stateRegistration: form.stateRegistration,
            percentageCommissionReceivable: Number(form.percentageCommissionReceivable),
            percentageCommissionPayableForClosedDeals: Number(form.percentageCommissionPayableForClosedDeals),
            percentageCommissionPayableForPropertyCaptured: Number(form.percentageCommissionPayableForPropertyCaptured)
        };
    }

	public onSubmit(): void {
        if (this.formGroup.valid) {
            const subscription: Subscription = this._companyService
                .update(this.parseFormGroup(this.formGroup.value), this.formGroup.get('id')?.value)
                .subscribe((data: Company) => {
                    if (data) {
						this._router.navigate([`${this.path}/list`]);
                        this._alertService.openSnackBar('Imobiliária atualizada com sucesso!');
                    }
                });

			this.subscriptions.push(subscription);
        }
    }

}

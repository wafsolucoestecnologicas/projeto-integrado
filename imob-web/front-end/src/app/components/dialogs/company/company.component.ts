import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Company, UpdateCompany } from 'src/app/core/interfaces/company.interface';
import { CompanyService } from 'src/app/core/services/company.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public show: boolean;
    public MASKS: typeof Masks;

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _alertService: AlertService,
        private readonly _authenticationService: AuthenticationService,
        private readonly _companyService: CompanyService,
        public _matDialogRef: MatDialogRef<CompanyComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.subscriptions = new Array<Subscription>();
        this.show = false;
        this.MASKS = Masks;
    }

    public ngOnInit(): void {
        this.createFormGroup();
        this.patchFormValues();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private createFormGroup(): void {
        this.formGroup = this._formBuilder.group({
            id: [null, [Validators.required]],
            CNPJ: [null, [Validators.required]],
            corporateName: [
                null,
                [Validators.required, Validators.minLength(10), Validators.maxLength(256)]
            ],
            stateRegistration: [null, [Validators.required]],
            percentageCommissionReceivable: [null, []],
            percentageCommissionPayableForClosedDeals: [null, []],
            percentageCommissionPayableForPropertyCaptured: [null, []]
        });
    }

    private patchFormValues(): void {
        const company: Company | null = this._authenticationService.company;

        if (company) {
            this.formGroup.patchValue(company);
        }
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
            this._companyService
                .update(this.parseFormGroup(this.formGroup.value), this.formGroup.get('id')?.value)
                .subscribe((data: Company) => {
                    if (data) {
                        this._alertService.openSnackBar('Dados atualizados com sucesso!');
                        this._authenticationService.company = data;
                        this.formGroup.patchValue(data);
                    }
                });
        }
    }

}

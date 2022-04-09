import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Lead, CreateLead } from 'src/app/core/interfaces/lead.interface';
import { LeadService } from 'src/app/core/services/lead.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-create-lead',
    templateUrl: './create-lead.component.html',
    styleUrls: ['./create-lead.component.css']
})
export class CreateLeadComponent implements OnInit, OnDestroy {

	private subscriptions: Subscription[];
    public formGroup: FormGroup;
	public sources: string[];
	public MASKS: typeof Masks;

    constructor(
		private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
        private readonly _leadService: LeadService,
		private readonly _authenticationService: AuthenticationService,
        private readonly _alertService: AlertService
	) {
		this.subscriptions = new Array<Subscription>();
		this.sources = this._leadService.sources;
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
			lead: this._formBuilder.group({
				name: [null, [Validators.required]],
				surname: [null, [Validators.required]],
				email: [null, [Validators.required, Validators.email]],
				source: [null, [Validators.required]],
				landline: [null, []],
				cellPhone: [null, [Validators.required]],
				comments: [null, []],
				createdByAdministrator: [this._authenticationService.administrator ? true : false, [Validators.required]],
				createdByManager: [this._authenticationService.manager ? true : false, [Validators.required]],
				createdBySecretary: [this._authenticationService.secretary ? true : false, [Validators.required]],
				administrator: [this._authenticationService.administrator, []],
				manager: [this._authenticationService.manager, []],
				secretary: [this._authenticationService.secretary, []],
			})
		});
	}

	private parseLead(form: any): CreateLead {
		return {
			name: form.lead.name,
			surname: form.lead.surname,
			email: form.lead.email,
			source: form.lead.source,
			landline: form.lead.landline,
			cellPhone: form.lead.cellPhone,
			comments: form.lead.comments,
			createdByAdministrator: form.lead.createdByAdministrator,
			createdByManager: form.lead.createdByManager,
			createdBySecretary: form.lead.createdBySecretary,
			administrator: form.lead.administrator,
			manager: form.lead.manager,
			secretary: form.lead.secretary,
		};
	}

	public onSubmit(): void {
		if (this.formGroup.valid) {
			const subscription: Subscription = this._leadService
                .create(this.parseLead(this.formGroup.value))
                .subscribe((data: Lead) => {
                    if (data) {
                        this._router.navigate(['content/leads/list']);
                        this._alertService.openSnackBar(`Lead ${data.name} ${data.surname} criada com sucesso!`);
                    }
                });

            this.subscriptions.push(subscription);
		}
	}

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Lead, UpdateLead } from 'src/app/core/interfaces/lead.interface';
import { LeadService } from 'src/app/core/services/lead.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Masks } from 'src/app/shared/enums/masks.enum';

@Component({
    selector: 'imob-edit-lead',
    templateUrl: './edit-lead.component.html',
    styleUrls: ['./edit-lead.component.css']
})
export class EditLeadComponent implements OnInit, OnDestroy {

	private subscriptions: Subscription[];
    public formGroup: FormGroup;
    public lead: Lead;
	public sources: string[];
    public path: string;
    public MASKS: typeof Masks;

    constructor(
		private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _leadService: LeadService,
        private readonly _alertService: AlertService
	) {
		this.subscriptions = new Array<Subscription>();
		this.sources = new Array<string>();
        this.path = '/content/leads';
        this.MASKS = Masks;
	}

    public ngOnInit(): void {
		this.sources = this._leadService.sources;

		this.createFormGroup();
		this.loadLeadData();
	}

	public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

	private loadLeadData(): void {
		const subscription: Subscription = this._activatedRoute
			.data
			.subscribe((data: Data) => {
				if (data && data['lead']) {
					this.lead = data['lead'];
                    this.lead.landline = this.lead.landline?.trim();

					this.formGroup.get('lead')?.patchValue(this.lead);
				} else {
					this._router.navigate([`${this.path}/list`]);
					this._alertService.openSnackBar('Lead não encontrada na base de dados!');
				}
			});

        this.subscriptions.push(subscription);
	}

	private createFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			lead: this._formBuilder.group({
				id: [null, [Validators.required]],
				name: [null, [Validators.required]],
				surname: [null, [Validators.required]],
				email: [null, [Validators.required, Validators.email]],
				source: [null, [Validators.required]],
				landline: [null, []],
				cellPhone: [null, [Validators.required]],
				comments: [null, []],
				createdByAdministrator: [null, [Validators.required]],
				createdByManager: [null, [Validators.required]],
				createdBySecretary: [null, [Validators.required]]
			})
		});
	}

	private parseLead(form: any): UpdateLead {
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
			createdBySecretary: form.lead.createdBySecretary
		};
	}

	public onSubmit(): void {
		if (this.formGroup.valid) {
			if (this.lead.id) {
				const subscription: Subscription = this._leadService
					.update(this.parseLead(this.formGroup.value), this.lead.id)
					.subscribe((data: UpdateLead) => {
						if (data) {
							this._router.navigate([`${this.path}/list`]);
							this._alertService.openSnackBar('Lead atualizada com sucesso!');
						}
					});

				this.subscriptions.push(subscription);
			}
		}
	}
	
}

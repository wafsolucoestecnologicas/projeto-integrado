import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { Business, UpdateBusiness } from 'src/app/core/interfaces/business.interface';
import { Manager } from 'src/app/core/interfaces/manager.interface';
import { Advisor } from 'src/app/core/interfaces/advisor.interface';
import { Broker } from 'src/app/core/interfaces/broker.interface';
import { Owner } from 'src/app/core/interfaces/owner.interface';
import { Customer } from 'src/app/core/interfaces/customer.interface';
import { Lead } from 'src/app/core/interfaces/lead.interface';
import { Property } from 'src/app/core/interfaces/property.interface';
import { CommissionReceivable, CreateCommissionReceivable } from 'src/app/core/interfaces/commission-receivable.interface';
import { CommissionPayable, CreateCommissionPayable } from 'src/app/core/interfaces/commission-payable.interface';
import { BusinessService } from 'src/app/core/services/business.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CommissionReceivableService } from 'src/app/core/services/commission-receivable.service';
import { CommissionPayableService } from 'src/app/core/services/commission-payable.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-edit-business',
    templateUrl: './edit-business.component.html',
    styleUrls: ['./edit-business.component.css']
})
export class EditBusinessComponent implements OnInit, OnDestroy {

	private subscriptions: Subscription[];
	private control: string;
    public formGroup: FormGroup;
    public business: Business;
	public managers: Manager[];
	public advisors: Advisor[];
	public brokers: Broker[];
	public owners: Owner[];
	public customers: Customer[];
	public leads: Lead[];
	public properties: Property[];
	public status: string[];
    public path: string;
	public isManager: boolean;
	public isAdvisor: boolean;
	public isBroker: boolean;

    constructor(
		private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _formBuilder: FormBuilder,
        private readonly _businessService: BusinessService,
		private readonly _authenticationService: AuthenticationService,
		private readonly _commissionReceivableService: CommissionReceivableService,
		private readonly _commissionPayableService: CommissionPayableService,
        private readonly _alertService: AlertService,
		@Inject(DOCUMENT) private document: Document
	) {
		this.subscriptions = new Array<Subscription>();
		this.managers = new Array<Manager>();
		this.advisors = new Array<Advisor>();
		this.brokers = new Array<Broker>();
		this.owners = new Array<Owner>();
		this.customers = new Array<Customer>();
		this.leads = new Array<Lead>();
		this.properties = new Array<Property>();
		this.status = this._businessService.status;
        this.path = 'content/businesses';
		this.isManager = this._authenticationService.manager ? true : false;
		this.isAdvisor = this._authenticationService.advisor ? true : false;
		this.isBroker = this._authenticationService.broker ? true : false;
	}

    public ngOnInit(): void {
		this.createFormGroup();
		this.loadBusiness();
		this.loadManagers();
		this.loadAdvisors();
		this.loadBrokers();
		this.loadOwners();
		this.loadCustomers();
		this.loadLeads();
		this.loadProperties();
	}

	public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

	private loadBusiness(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['business']) {
                    this.business = data['business'];

					if (this.business.dateVisit) this.business.dateVisit = moment(this.business.dateVisit).format('YYYY-MM-DD');
					if (this.business.dateSale) this.business.dateSale = moment(this.business.dateSale).format('YYYY-MM-DD');
					this.formGroup.get('business')?.patchValue(this.business);

					if (this.business.manager) this.formGroup.get('business')?.get('manager')?.setValue(this.business.manager.id);
					if (this.business.advisor) this.formGroup.get('business')?.get('advisor')?.setValue(this.business.advisor.id);
					if (this.business.broker) this.formGroup.get('business')?.get('broker')?.setValue(this.business.broker.id);
					if (this.business.owner) this.formGroup.get('business')?.get('owner')?.setValue(this.business.owner.id);
					if (this.business.customer) this.formGroup.get('business')?.get('customer')?.setValue(this.business.customer.id);
					if (this.business.lead) this.formGroup.get('business')?.get('lead')?.setValue(this.business.lead.id);
					if (this.business.property) this.formGroup.get('business')?.get('property')?.setValue(this.business.property.id);

					if (this.isManager && this.business.redirectedManagerId) {
						this.setValidatorsManager();
					}

					if (this.isAdvisor && this.business.redirectedAdvisorId) {
						this.setValidatorsAdvisor();
					}

					if (this.isBroker && this.business.redirectedBrokerId) {
						this.setValidatorsBroker();
					}
                } else {
                    this._alertService.openSnackBar('Negócio não encontrado na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private loadManagers(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['managers'] && data['managers'].length > 0) {
                    this.managers = data['managers'];
                } else {
                    this._alertService.openSnackBar('Não existem gestores cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private loadAdvisors(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['advisors'] && data['advisors'].length > 0) {
                    this.advisors = data['advisors'];
                } else {
                    this._alertService.openSnackBar('Não existem despachantes cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private loadBrokers(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['brokers'] && data['brokers'].length > 0) {
                    this.brokers = data['brokers'];
                } else {
                    this._alertService.openSnackBar('Não existem corretores cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private loadOwners(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['owners'] && data['owners'].length > 0) {
                    this.owners = data['owners'];
                } else {
                    this._alertService.openSnackBar('Não existem proprietários cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private loadCustomers(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['customers'] && data['customers'].length > 0) {
                    this.customers = data['customers'];
                } else {
                    this._alertService.openSnackBar('Não existem clientes cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private loadLeads(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['leads'] && data['leads'].length > 0) {
                    this.leads = data['leads'];
                } else {
                    this._alertService.openSnackBar('Não existem leads cadastradas na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private loadProperties(): void {
		const subscription: Subscription = this._activatedRoute
            .data
            .subscribe((data: Data) => {
                if (data && data['properties'] && data['properties'].length > 0) {
                    this.properties = data['properties'];
                } else {
                    this._alertService.openSnackBar('Não existem imóveis cadastrados na base de dados!');
                }
            });

        this.subscriptions.push(subscription);
	}

	private setValidatorsManager(): void {
		this.formGroup.get('business')?.get('dateVisit')?.setValidators(Validators.required);
		/*this.formGroup.get('business')?.get('propertyRegistration')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customerRG')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customerCPF')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customerAddressProof')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customerPayslip')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ownerRG')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ownerCPF')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ownerAddressProof')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ownerPayslip')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('formVisit')?.setValidators(Validators.required);*/
		this.formGroup.get('business')?.get('manager')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('advisor')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('broker')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customer')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('lead')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('property')?.setValidators(Validators.required);

		this.formGroup.updateValueAndValidity();
	}

	private setValidatorsAdvisor(): void {
		this.formGroup.get('business')?.get('dateVisit')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('dateSale')?.setValidators(Validators.required);
		/*this.formGroup.get('business')?.get('propertyRegistration')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('propertySaleContract')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ITBI')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customerRG')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customerCPF')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customerAddressProof')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customerPayslip')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ownerRG')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ownerCPF')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ownerAddressProof')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('ownerPayslip')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('formVisit')?.setValidators(Validators.required);*/
		this.formGroup.get('business')?.get('manager')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('advisor')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('broker')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customer')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('lead')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('property')?.setValidators(Validators.required);
	}

	private setValidatorsBroker(): void {
		this.formGroup.get('business')?.get('dateVisit')?.setValidators(Validators.required);
		/*this.formGroup.get('business')?.get('formVisit')?.setValidators(Validators.required);*/
		this.formGroup.get('business')?.get('manager')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('broker')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('customer')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('lead')?.setValidators(Validators.required);
		this.formGroup.get('business')?.get('property')?.setValidators(Validators.required);

		this.formGroup.updateValueAndValidity();
	}

	private uploadFile(file: File): void {
		if (this.business.id) {
			const subscription: Subscription = this._businessService
				.upload(file, this.business.id)
				.subscribe((data: any) => {
					if (data) {
						this.formGroup.get('business')?.get(this.control)?.setValue(`${data.path}`);
						this._alertService.openSnackBar('Arquivo carregado com sucesso!')
					}
				});

			this.subscriptions.push(subscription);
		}
	}

	private createFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			business: this._formBuilder.group({
				id: [null, [Validators.required]],
				status: [0, [Validators.required]],
				dateVisit: [null, []],
				dateSale: [null, []],
				visitForm: [null, []],
				propertyRegistration: [null, []],
				propertySaleContract: [null, []],
				ITBI: [null, []],
				customerRG: [null, []],
				customerCPF: [null, []],
				customerAddressProof: [null, []],
				customerPayslip: [null, []],
				ownerRG: [null, []],
				ownerCPF: [null, []],
				ownerAddressProof: [null, []],
				ownerPayslip: [null, []],
				createdByAdministrator: [null, [Validators.required]],
				createdByManager: [null, [Validators.required]],
				createdBySecretary: [null, [Validators.required]],
				redirectedManagerId: [null, []],
				redirectedAdvisorId: [null, []],
				redirectedBrokerId: [null, []],
				administrator: [null, []],
				manager: [null, []],
				advisor: [null, []],
				broker: [null, []],
				secretary: [null, []],
				owner: [null, []],
				customer: [null, []],
				lead: [null, []],
				property: [null, []]
			})
		});
	}

	private parseBusiness(form: any): UpdateBusiness {
		return {
			status: form.business.status,
			dateVisit: form.business.dateVisit,
			dateSale: form.business.dateSale,
			visitForm: form.business.visitForm,
			propertyRegistration: form.business.propertyRegistration,
			propertySaleContract: form.business.propertySaleContract,
			ITBI: form.business.ITBI,
			customerRG: form.business.customerRG,
			customerCPF: form.business.customerCPF,
			customerAddressProof: form.business.customerAddressProof,
			customerPayslip: form.business.customerPayslip,
			ownerRG: form.business.ownerRG,
			ownerCPF: form.business.ownerCPF,
			ownerAddressProof: form.business.ownerAddressProof,
			ownerPayslip: form.business.ownerPayslip,
			createdByAdministrator: form.business.createdByAdministrator,
			createdByManager: form.business.createdByManager,
			createdBySecretary: form.business.createdBySecretary,
			redirectedManagerId: form.business.redirectedManagerId,
			redirectedAdvisorId: form.business.redirectedAdvisorId,
			redirectedBrokerId: form.business.redirectedBrokerId,
			administrator: form.business.administrator,
			manager: form.business.manager,
			advisor: form.business.advisor,
			broker: this.brokers.find((broker: Broker) => broker.id === form.business.broker) as Broker,
			owner: form.business.owner,
			customer: this.customers.find((customer: Customer) => customer.id === form.business.customer) as Customer,
			lead: this.leads.find((lead: Lead) => lead.id === form.business.lead) as Lead,
			property: form.business.property,
		};
	}

	private parseCommissionReceivable(form: any): CreateCommissionReceivable {
		const property: Property = this.properties.filter((property: Property) => property.id === form.business.property)[0];
		const value = property.value || 0;
		const percentage = this._authenticationService.company?.percentageCommissionReceivable || 0;

		return {
			date: form.business.dateSale,
			value: (value * percentage) / 100,
			property: property
		};
	}

	private parseCommissionPayable(form: any): CreateCommissionPayable {
		const broker: Broker = this.brokers.filter((broker: Broker) => broker.id === form.business.broker)[0];
		const property: Property = this.properties.filter((property: Property) => property.id === form.business.property)[0];
		const value = property.value || 0;
		const percentage = this._authenticationService.company?.percentageCommissionPayableForClosedDeals || 0;

		return {
			date: form.business.dateSale,
			valueClosedDeals: (value * percentage) / 100,
			valuePropertyCaptured: 0,
			broker: broker,
			property: property
		};
	}

	private updateBusiness(): void {
		if (this.business.id) {
			const subscription: Subscription = this._businessService
                .update(this.parseBusiness(this.formGroup.value), this.business.id)
                .subscribe((data: UpdateBusiness) => {
                    if (data) {
                        this._router.navigate([`${this.path}/list`]);
                        this._alertService.openSnackBar('Negócio atualizado com sucesso!');
                    }
                });

            this.subscriptions.push(subscription);
		}
	}

	private createCommissionReceivable(): void {
		const subscription: Subscription = this._commissionReceivableService
			.create(this.parseCommissionReceivable(this.formGroup.value))
			.subscribe((data: CommissionReceivable) => {});

		this.subscriptions.push(subscription);
	}

	private createCommissionPayable(): void {
		const subscription: Subscription = this._commissionPayableService
			.create(this.parseCommissionPayable(this.formGroup.value))
			.subscribe((data: CommissionPayable) => {});

		this.subscriptions.push(subscription);
	}

	public redirectManager(): void {
		const id: number =
			this.formGroup.get('business')?.get('manager')?.value;

		this.formGroup.get('business')?.get('redirectedManagerId')?.setValue(id);
	}

	public redirectAdvisor(): void {
		const id: number =
			this.formGroup.get('business')?.get('advisor')?.value;

		this.formGroup.get('business')?.get('redirectedAdvisorId')?.setValue(id);
	}

	public setOwner(): void {
		const property: Property =
			this.properties.find((property: Property) => property.id === this.formGroup.get('business')?.get('property')?.value) as Property;

		const owner: Owner =
			this.owners.find((owner: Owner) => owner.id === property.owner.id) as Owner;

		this.formGroup.get('business')?.get('owner')?.setValue(owner.id);
	}

	public setLead(): void {
		const customer: Customer =
			this.customers.find((customer: Customer) => customer.id === this.formGroup.get('business')?.get('customer')?.value) as Customer;

		if (customer.lead.id !== this.formGroup.get('business')?.get('lead')?.value) {
			this.formGroup.get('business')?.get('customer')?.setValue(null);
			this._alertService.openSnackBar('O cliente selecionando não corresponde a lead cadastrada!');
		} else {
			this.formGroup.get('business')?.get('lead')?.setValue(customer.lead.id);
		}
	}

	public setValidatorForDateSale(): void {
		if (this.isAdvisor && this.formGroup.get('business')?.get('status')?.value === 3) {
			this.formGroup.get('business')?.get('dateSale')?.clearValidators();
			this.formGroup.get('business')?.get('dateSale')?.updateValueAndValidity();
		} else if (this.isAdvisor && this.formGroup.get('business')?.get('status')?.value !== 3) {
			this.formGroup.get('business')?.get('dateSale')?.addValidators(Validators.required);
			this.formGroup.get('business')?.get('dateSale')?.updateValueAndValidity();
		}
	}

	public onFileSelected(control: string, event: Event): void {
		if ((<HTMLInputElement>event.target).files) {
			const files: FileList = (<HTMLInputElement>event.target).files as FileList;

			if (files.length > 0) {
				if (files[0].type !== 'application/pdf') {
					(<HTMLInputElement>event.target).value = '';
					this._alertService.openSnackBar('São permitidos apenas arquivos do tipo .pdf!');

					return;
				}

				this.control = control;
				this.uploadFile(files[0]);
			}
		}
	}

	public downloadFile(path: string): void {
		const subscription: Subscription = this._businessService
			.download(path)
			.subscribe((data: ArrayBuffer) => {
				if (data) {
					const file: Blob = new Blob([data], { type: 'application/pdf' });
					const fileURL = URL.createObjectURL(file);
					const anchor: HTMLAnchorElement = this.document.createElement('a');

					anchor.href = fileURL;
					anchor.download = 'documento.pdf';
					anchor.click();

					URL.revokeObjectURL(fileURL);
				}
			});

		this.subscriptions.push(subscription);
	}

	public onSubmit(): void {
		if (this.formGroup.valid) {
			if (Number(this.formGroup.get('business')?.get('status')?.value) === 4) {
				this.createCommissionReceivable();
				this.createCommissionPayable();
			}

			this.updateBusiness();
		}
	}

}

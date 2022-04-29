import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { Manager } from 'src/app/core/interfaces/manager.interface';
import { Advisor } from 'src/app/core/interfaces/advisor.interface';
import { Broker } from 'src/app/core/interfaces/broker.interface';
import { Owner } from 'src/app/core/interfaces/owner.interface';
import { Customer } from 'src/app/core/interfaces/customer.interface';
import { Lead } from 'src/app/core/interfaces/lead.interface';
import { Property } from 'src/app/core/interfaces/property.interface';
import { Business, CreateBusiness } from 'src/app/core/interfaces/business.interface';
import { BusinessService } from 'src/app/core/services/business.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'imob-create-business',
    templateUrl: './create-business.component.html',
    styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent implements OnInit {

	private subscriptions: Subscription[];
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

    constructor(
		private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _businessService: BusinessService,
		private readonly _authenticationService: AuthenticationService,
        private readonly _alertService: AlertService
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
	}

    public ngOnInit(): void {
		this.createFormGroup();
		this.loadBrokers();
		this.loadCustomers();
		this.loadLeads();
	}

	public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
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

	private createFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			business: this._formBuilder.group({
				id: [null, []],
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
				createdByAdministrator: [this._authenticationService.administrator ? true : false, [Validators.required]],
				createdByManager: [this._authenticationService.manager ? true : false, [Validators.required]],
				createdBySecretary: [this._authenticationService.secretary ? true : false, [Validators.required]],
				redirectedManagerId: [null, []],
				redirectedAdvisorId: [null, []],
				redirectedBrokerId: [null, []],
				administrator: [null, []],
				manager: [null, []],
				advisor: [null, []],
				broker: [null, [Validators.required]],
				secretary: [null, []],
				owner: [null, []],
				customer: [null, []],
				lead: [null, [Validators.required]],
				property: [null, []]
			})
		});
	}

	private parseBusiness(form: any): CreateBusiness {
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
			company: form.business.company,
			administrator: form.business.administrator,
			manager: form.business.manager,
			advisor: form.business.advisor,
			broker: this.brokers.find((broker: Broker) => broker.id === form.business.broker) as Broker,
			secretary: form.business.secretary,
			owner: form.business.owner,
			customer: this.customers.find((customer: Customer) => customer.id === form.business.customer) as Customer,
			lead: this.leads.find((lead: Lead) => lead.id === form.business.lead) as Lead,
			property: form.business.property,
		};
	}

	private createBusiness(): void {
		const subscription: Subscription = this._businessService
            .create(this.parseBusiness(this.formGroup.value))
            .subscribe((data: Business) => {
                if (data) {
                    this._router.navigate([`${this.path}/list`]);
                    this._alertService.openSnackBar(`Negócio de código ${data.id} criado com sucesso!`);
                }
            });

        this.subscriptions.push(subscription);
	}

	public redirectBroker(): void {
		const broker: Broker =
			this.formGroup.get('business')?.get('broker')?.value;

		this.formGroup.get('business')?.get('redirectedBrokerId')?.setValue(broker);
	}

	public setLead(): void {
		const customer: Customer =
			this.customers.find((customer: Customer) => customer.id === this.formGroup.get('business')?.get('customer')?.value) as Customer;

		this.formGroup.get('business')?.get('lead')?.setValue(customer.lead.id);
	}

	public setCustomer(): void {
		const customer: Customer | undefined =
			this.customers.find((customer: Customer) => customer.lead.id === this.formGroup.get('business')?.get('lead')?.value);

		if (customer) {
			this.formGroup.get('business')?.get('customer')?.setValue(customer.id);
		} else {
			this.formGroup.get('business')?.get('customer')?.setValue(null);
		}
	}

	public onSubmit(): void {
		if (this.formGroup.valid) {
			this.createBusiness();
		}
	}

}

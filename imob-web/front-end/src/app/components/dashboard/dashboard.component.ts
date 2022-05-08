import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { Business, AmountBusiness } from 'src/app/core/interfaces/business.interface';
import { Lead, AmountLeads } from 'src/app/core/interfaces/lead.interface';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { BusinessService } from 'src/app/core/services/business.service';
import { LeadService } from 'src/app/core/services/lead.service';

@Component({
    selector: 'imob-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    private subscriptions: Subscription[];
    private actualMonth: string;
    public formGroupBusiness: FormGroup;
    public formGroupLead: FormGroup;
    public businesses: Business[];
    public leads: Lead[];
    public businessesData: any[];
    public leadsData: any[];
    public amountBusiness: AmountBusiness;
    public commissionReceivableByProspecting: number;
    public commissionReceivableByVisit: number;
    public commissionReceivableByProposal: number;
    public commissionReceivableByRejected: number;
    public commissionReceivableByClosed: number;
    public amountLead: AmountLeads;
    public amontLeadsRegistered: number;
    public amountLeadsByCompany: number;
    public amountLeadsByPhone: number;
    public amountLeadsByAnnouncement: number;
    public amountLeadsByWeb: number;
    public amountLeadsByWhatsapp: number;
    public colorScheme: any;
    public showBusinessGraphic: boolean;
    public showLeadGraphic: boolean;

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _authenticationService: AuthenticationService,
        private readonly _businessService: BusinessService,
        private readonly _leadService: LeadService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.businesses = new Array<Business>();
        this.leads = new Array<Lead>();
        this.businessesData = new Array<any>();
        this.leadsData = new Array<any>();
        this.actualMonth = moment().startOf('month').format('YYYY-MM');
        this.commissionReceivableByProspecting = 0;
        this.commissionReceivableByVisit = 0;
        this.commissionReceivableByProposal = 0;
        this.commissionReceivableByRejected = 0;
        this.commissionReceivableByClosed = 0;
        this.amontLeadsRegistered = 0;
        this.amountLeadsByCompany = 0;
        this.amountLeadsByPhone = 0;
        this.amountLeadsByAnnouncement = 0;
        this.amountLeadsByWeb = 0;
        this.amountLeadsByWhatsapp = 0;
        this.colorScheme = {
            domain: ['#848484', '#0040ff', '#ffff00', '#ff0000', '#40ff00']
        };
        this.showBusinessGraphic = false;
        this.showLeadGraphic = false;
    }

    public ngOnInit(): void {
        this.createFormGroupBusiness();
        this.createFormGroupLead();

        this.formGroupBusiness.get('month')?.setValue(this.actualMonth);
        this.formGroupLead.get('month')?.setValue(this.actualMonth);

        this.loadAmountBusiness();
        this.loadBusinesses();
        this.loadAmountLead();
        this.loadAmountLeadsBySource();
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    private createFormGroupBusiness(): void {
        this.formGroupBusiness = this._formBuilder.group({
            month: [null, [Validators.required]]
        });
    }

    private createFormGroupLead(): void {
        this.formGroupLead = this._formBuilder.group({
            month: [null, [Validators.required]]
        });
    }

    private parseFormGroup(form: any): string {
        return form.month;
    }

    private loadAmountBusiness(): void {
        const subscription: Subscription = this._businessService
            .amount(this.parseFormGroup(this.formGroupBusiness.value))
            .subscribe((data: AmountBusiness) => {
                if (data) {
                    this.amountBusiness = data;
                }
            });

        this.subscriptions.push(subscription);
    }

    private loadBusinesses(): void {
        const subscription: Subscription = this._businessService
            .index()
            .subscribe((data: Business[]) => {
                if (data && data.length > 0) {
                    this.businesses = data;

                    this.commissionReceivableByProspecting = this.businessesFilteredByProspecting();
                    this.commissionReceivableByVisit = this.businessesFilteredByVisit();
                    this.commissionReceivableByProposal = this.businessesFilteredByProposal();
                    this.commissionReceivableByRejected = this.businessesFilteredByRejected();
                    this.commissionReceivableByClosed = this.businessesFilteredByClosed();

                    this.setBusinessGraphicData();
                }
            });

        this.subscriptions.push(subscription);
    }

    private loadAmountLead(): void {
        const subscription: Subscription = this._leadService
            .amount(this.parseFormGroup(this.formGroupLead.value))
            .subscribe((data: AmountLeads) => {
                if (data) {
                    this.amountLead = data;
                }
            });

        this.subscriptions.push(subscription);
    }

    private loadAmountLeadsBySource(): void {
        const subscription: Subscription = this._leadService
            .index()
            .subscribe((data: Lead[]) => {
                if (data && data.length > 0) {
                    this.leads = data;

                    this.amontLeadsRegistered = this.leadsRegistered();
                    this.amountLeadsByCompany = this.leadsFilteredByCompany();
                    this.amountLeadsByPhone = this.leadsFilteredByPhone();
                    this.amountLeadsByAnnouncement = this.leadsFilteredByAnnouncement();
                    this.amountLeadsByWeb = this.leadsFilteredByWeb();
                    this.amountLeadsByWhatsapp = this.leadsFilteredByWhatsapp();

                    this.setLeadGraphicData();
                }
            });

        this.subscriptions.push(subscription);
    }

    private businessesFilteredByProspecting(): number {
        let value = 0;
        const percentage = this._authenticationService.company?.percentageCommissionReceivable || 0;
        const businesses: Business[] = this.businesses.filter((business: Business) => {
            const month = moment(this.parseFormGroup(this.formGroupBusiness.value)).format('YYYY-MM');
            const createdAt = moment(business.createdAt).format('YYYY-MM');

            if (business.status === 0 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        businesses.forEach((business: Business) => {
            value += business.property.value || 0;
        });

        return (value * percentage) / 100;
    }

    private businessesFilteredByVisit(): number {
        let value = 0;
        const percentage = this._authenticationService.company?.percentageCommissionReceivable || 0;
        const businesses: Business[] = this.businesses.filter((business: Business) => {
            const month = moment(this.parseFormGroup(this.formGroupBusiness.value)).format('YYYY-MM');
            const createdAt = moment(business.createdAt).format('YYYY-MM');

            if (business.status === 1 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        businesses.forEach((business: Business) => {
            value += business.property.value || 0;
        });

        return (value * percentage) / 100;
    }

    private businessesFilteredByProposal(): number {
        let value = 0;
        const percentage = this._authenticationService.company?.percentageCommissionReceivable || 0;
        const businesses: Business[] = this.businesses.filter((business: Business) => {
            const month = moment(this.parseFormGroup(this.formGroupBusiness.value)).format('YYYY-MM');
            const createdAt = moment(business.createdAt).format('YYYY-MM');

            if (business.status === 2 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        businesses.forEach((business: Business) => {
            value += business.property.value || 0;
        });

        return (value * percentage) / 100;
    }

    private businessesFilteredByRejected(): number {
        let value = 0;
        const percentage = this._authenticationService.company?.percentageCommissionReceivable || 0;
        const businesses: Business[] = this.businesses.filter((business: Business) => {
            const month = moment(this.parseFormGroup(this.formGroupBusiness.value)).format('YYYY-MM');
            const createdAt = moment(business.createdAt).format('YYYY-MM');

            if (business.status === 3 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        businesses.forEach((business: Business) => {
            value += business.property.value || 0;
        });

        return (value * percentage) / 100;
    }

    private businessesFilteredByClosed(): number {
        let value = 0;
        const percentage = this._authenticationService.company?.percentageCommissionReceivable || 0;
        const businesses: Business[] = this.businesses.filter((business: Business) => {
            const month = moment(this.parseFormGroup(this.formGroupBusiness.value)).format('YYYY-MM');
            const createdAt = moment(business.createdAt).format('YYYY-MM');

            if (business.status === 4 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        businesses.forEach((business: Business) => {
            value += business.property.value || 0;
        });

        return (value * percentage) / 100;
    }

    private leadsRegistered(): number {
        const leads: Lead[] = this.leads.filter((lead: Lead) => {
            const month = moment(this.parseFormGroup(this.formGroupLead.value)).format('YYYY-MM');
            const createdAt = moment(lead.createdAt).format('YYYY-MM');

            if (lead.registered && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        return leads.length;
    }

    private leadsFilteredByCompany(): number {
        const leads: Lead[] = this.leads.filter((lead: Lead) => {
            const month = moment(this.parseFormGroup(this.formGroupLead.value)).format('YYYY-MM');
            const createdAt = moment(lead.createdAt).format('YYYY-MM');

            if (lead.source === 0 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        return leads.length;
    }

    private leadsFilteredByPhone(): number {
        const leads: Lead[] = this.leads.filter((lead: Lead) => {
            const month = moment(this.parseFormGroup(this.formGroupLead.value)).format('YYYY-MM');
            const createdAt = moment(lead.createdAt).format('YYYY-MM');

            if (lead.source === 1 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        return leads.length;
    }

    private leadsFilteredByAnnouncement(): number {
        const leads: Lead[] = this.leads.filter((lead: Lead) => {
            const month = moment(this.parseFormGroup(this.formGroupLead.value)).format('YYYY-MM');
            const createdAt = moment(lead.createdAt).format('YYYY-MM');

            if (lead.source === 2 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        return leads.length;
    }

    private leadsFilteredByWeb(): number {
        const leads: Lead[] = this.leads.filter((lead: Lead) => {
            const month = moment(this.parseFormGroup(this.formGroupLead.value)).format('YYYY-MM');
            const createdAt = moment(lead.createdAt).format('YYYY-MM');

            if (lead.source === 3 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        return leads.length;
    }

    private leadsFilteredByWhatsapp(): number {
        const leads: Lead[] = this.leads.filter((lead: Lead) => {
            const month = moment(this.parseFormGroup(this.formGroupLead.value)).format('YYYY-MM');
            const createdAt = moment(lead.createdAt).format('YYYY-MM');

            if (lead.source === 4 && month === createdAt) {
                return true;
            } else {
                return false;
            }
        });

        return leads.length;
    }

    private setBusinessGraphicData(): void {
        this.businessesData = [];

        this.businessesData.push({ name: 'Prospecções', value: this.commissionReceivableByProspecting });
        this.businessesData.push({ name: 'Visitas', value: this.commissionReceivableByVisit });
        this.businessesData.push({ name: 'Propostas', value: this.commissionReceivableByProposal });
        this.businessesData.push({ name: 'Rejeitados', value: this.commissionReceivableByRejected });
        this.businessesData.push({ name: 'Fechados', value: this.commissionReceivableByClosed });

        if (this.businessesData.length > 0) this.showBusinessGraphic = true;
    }

    private setLeadGraphicData(): void {
        this.leadsData = [];
        
        this.leadsData.push({ name: 'Imobiliária', value: this.amountLeadsByCompany });
        this.leadsData.push({ name: 'Telefone', value: this.amountLeadsByPhone });
        this.leadsData.push({ name: 'Anúncio', value: this.amountLeadsByAnnouncement });
        this.leadsData.push({ name: 'Web', value: this.amountLeadsByWeb });
        this.leadsData.push({ name: 'Whatsapp', value: this.amountLeadsByWhatsapp });

        if (this.leadsData.length > 0) this.showLeadGraphic = true;
    }

    public onChangeMonthBusiness(): void {
        if (this.formGroupBusiness.valid) {
            this.loadAmountBusiness();
            this.loadBusinesses();
        }
    }

    public onChangeMonthLead(): void {
        if (this.formGroupLead.valid) {
            this.loadAmountLead();
            this.loadAmountLeadsBySource();
        }
    }

}

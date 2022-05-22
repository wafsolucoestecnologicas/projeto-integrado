import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { HeaderInterceptor } from './shared/interceptors/header.interceptor';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

import { AuthenticationService } from './core/services/authentication.service';
import { ProfileService } from './core/services/profile.service';
import { UserService } from './core/services/user.service';
import { CompanyService } from './core/services/company.service';
import { ManagerService } from './core/services/manager.service';
import { AdvisorService } from './core/services/advisor.service';
import { BrokerService } from './core/services/broker.service';
import { SecretaryService } from './core/services/secretary.service';
import { OwnerService } from './core/services/owner.service';
import { CustomerService } from './core/services/customer.service';
import { PropertyService } from './core/services/property.service';
import { BusinessService } from './core/services/business.service';
import { LeadService } from './core/services/lead.service';
import { CommissionReceivableService } from './core/services/commission-receivable.service';
import { CommissionPayableService } from './core/services/commission-payable.service';
import { AddressService } from './core/services/address.service';
import { NeighborhoodService } from './core/services/neighborhood.service';
import { CityService } from './core/services/city.service';
import { StateService } from './core/services/state.service';
import { AlertService } from './shared/services/alert.service';
import { LoaderService } from './core/services/loader.service';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SocialLoginModule,
        AppRoutingModule,
        CoreModule,
        SharedModule
    ],
    providers: [
		{
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider(
							'528234648840969'
						)
                    }
                ]
            } as SocialAuthServiceConfig
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        },
        AuthenticationGuard,
        AuthenticationService,
        ProfileService,
        UserService,
        CompanyService,
        ManagerService,
        AdvisorService,
        BrokerService,
        SecretaryService,
        OwnerService,
        CustomerService,
        PropertyService,
        BusinessService,
        LeadService,
        CommissionReceivableService,
        CommissionPayableService,
        AddressService,
        NeighborhoodService,
        CityService,
        StateService,
        AlertService,
        LoaderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

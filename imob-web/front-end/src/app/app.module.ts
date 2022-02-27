import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DialogsModule } from './components/dialogs/dialogs.module';

import { AppComponent } from './app.component';

import { HeaderInterceptor } from './shared/interceptors/header.interceptor';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { ProfileGuard } from './shared/guards/profile.guard';

import { AuthenticationService } from './core/services/authentication.service';
import { UserService } from './core/services/user.service';
import { CompanyService } from './core/services/company.service';
import { AlertService } from './shared/services/alert.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
		DialogsModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HeaderInterceptor,
			multi: true
		},
		AuthenticationGuard,
		ProfileGuard,
		AuthenticationService,
		UserService,
		CompanyService,
		AlertService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

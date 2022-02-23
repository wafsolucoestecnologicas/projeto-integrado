import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DialogsModule } from './components/dialogs/dialogs.module';

import { AppComponent } from './app.component';

import { AuthenticationService } from './core/services/authentication.service';
import { UserService } from './core/services/user.service';
import { CompanyService } from './core/services/company.service';
import { AlertService } from './shared/services/alert.service';

import { HeaderInterceptor } from './shared/interceptors/header.interceptor';

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
		AuthenticationService,
		UserService,
		CompanyService,
		AlertService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HeaderInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

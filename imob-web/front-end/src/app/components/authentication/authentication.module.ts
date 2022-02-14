import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
    declarations: [
		LoginComponent,
		RegisterComponent,
		ResetComponent
	],
    imports: [
		CommonModule,
		SharedModule,
		AuthenticationRoutingModule
	],
    exports: [
		LoginComponent,
		RegisterComponent,
		ResetComponent
	]
})
export class AuthenticationModule {}

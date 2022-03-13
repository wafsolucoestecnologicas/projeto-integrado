import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariesRoutingModule } from './secretaries-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListSecretariesComponent } from './list-secretaries/list-secretaries.component';
import { ViewSecretaryComponent } from './view-secretary/view-secretary.component';
import { EditSecretaryComponent } from './edit-secretary/edit-secretary.component';

import { SecretariesResolver } from './shared/resolvers/secretaries.resolver';
import { SecretaryResolver } from './shared/resolvers/secretary.resolver';

@NgModule({
    declarations: [
		ListSecretariesComponent,
		ViewSecretaryComponent,
		EditSecretaryComponent
	],
    imports: [
		CommonModule,
		SecretariesRoutingModule,
		SharedModule
	],
    providers: [
		SecretariesResolver,
		SecretaryResolver
	]
})
export class SecretariesModule {}

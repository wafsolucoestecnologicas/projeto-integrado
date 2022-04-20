import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessesRoutingModule } from './businesses-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateBusinessComponent } from './create-business/create-business.component';
import { ListBusinessesComponent } from './list-businesses/list-businesses.component';
import { ViewBusinessComponent } from './view-business/view-business.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { DeleteBusinessComponent } from './delete-business/delete-business.component';

import { BusinessesResolver } from './shared/resolvers/businesses.resolver';
import { BusinessResolver } from './shared/resolvers/business.resolver';
import { ManagersResolver } from '../managers/shared/resolvers/managers.resolver';
import { AdvisorsResolver } from '../advisors/shared/resolvers/advisors.resolver';
import { BrokersResolver } from '../brokers/shared/resolvers/brokers.resolver';
import { SecretariesResolver } from '../secretaries/shared/resolvers/secretaries.resolver';
import { OwnersResolver } from '../owners/shared/resolvers/owners.resolver';
import { CustomersResolver } from '../customers/shared/resolvers/customers.resolver';
import { LeadsResolver } from '../leads/shared/resolvers/leads.resolver';
import { PropertiesResolver } from '../properties/shared/resolvers/properties.resolver';

@NgModule({
    declarations: [
		CreateBusinessComponent,
		ListBusinessesComponent,
		ViewBusinessComponent,
		EditBusinessComponent,
		DeleteBusinessComponent
  ],
    imports: [
		CommonModule,
		BusinessesRoutingModule,
		SharedModule
	],
	providers: [
		BusinessesResolver,
		BusinessResolver,
		ManagersResolver,
		AdvisorsResolver,
		BrokersResolver,
		SecretariesResolver,
		OwnersResolver,
		CustomersResolver,
		LeadsResolver,
		PropertiesResolver
	]
})
export class BusinessesModule {}

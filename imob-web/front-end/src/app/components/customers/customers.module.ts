import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CustomersResolver } from './shared/resolvers/customers.resolver';

@NgModule({
    declarations: [
		ListCustomersComponent
	],
    imports: [
		CommonModule,
		CustomersRoutingModule,
		SharedModule
	],
	providers: [
		CustomersResolver
	]
})
export class CustomersModule {}

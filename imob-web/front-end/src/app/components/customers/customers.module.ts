import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

import { CustomersResolver } from './shared/resolvers/customers.resolver';
import { CustomerResolver } from './shared/resolvers/customer.resolver';

@NgModule({
    declarations: [
        CreateCustomerComponent,
        ListCustomersComponent,
        ViewCustomerComponent,
        EditCustomerComponent
    ],
    imports: [
		CommonModule,
		CustomersRoutingModule,
		SharedModule
	],
    providers: [
		CustomersResolver,
		CustomerResolver
	]
})
export class CustomersModule {}

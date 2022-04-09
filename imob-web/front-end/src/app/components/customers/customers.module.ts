import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

import { CustomersResolver } from './shared/resolvers/customers.resolver';
import { CustomerResolver } from './shared/resolvers/customer.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

@NgModule({
    declarations: [
        CreateCustomerComponent,
        ListCustomersComponent,
        ViewCustomerComponent,
        EditCustomerComponent,
        DeleteCustomerComponent
    ],
    imports: [
		CommonModule,
		CustomersRoutingModule,
		SharedModule
	],
    providers: [
        CustomersResolver,
        CustomerResolver,
        AdressesResolver,
        NeighborhoodsResolver,
        CitiesResolver
    ]
})
export class CustomersModule {}

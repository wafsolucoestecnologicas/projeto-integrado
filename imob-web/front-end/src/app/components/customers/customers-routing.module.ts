import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

import { CustomersResolver } from './shared/resolvers/customers.resolver';
import { CustomerResolver } from './shared/resolvers/customer.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

const routes: Routes = [
    {
        path: 'create',
        component: CreateCustomerComponent
    },
    {
        path: 'list',
        component: ListCustomersComponent,
        resolve: {
            customers: CustomersResolver
        }
    },
    {
        path: 'view/:id',
        component: ViewCustomerComponent,
        resolve: {
            customer: CustomerResolver,
            adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditCustomerComponent,
        resolve: {
            customer: CustomerResolver,
            adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule {}

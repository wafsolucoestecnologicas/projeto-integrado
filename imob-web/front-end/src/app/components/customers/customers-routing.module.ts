import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CustomersResolver } from './shared/resolvers/customers.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListCustomersComponent,
        resolve: {
            customers: CustomersResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule {}

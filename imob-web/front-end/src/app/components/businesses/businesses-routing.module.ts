import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBusinessComponent } from './create-business/create-business.component';
import { ListBusinessesComponent } from './list-businesses/list-businesses.component';
import { ViewBusinessComponent } from './view-business/view-business.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';

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

const routes: Routes = [
    {
        path: 'create',
        component: CreateBusinessComponent,
        resolve: {
            brokers: BrokersResolver,
            customers: CustomersResolver,
            leads: LeadsResolver
        }
    },
    {
        path: 'list',
        component: ListBusinessesComponent,
        resolve: {
            businesses: BusinessesResolver,
            managers: ManagersResolver,
            advisors: AdvisorsResolver,
            brokers: BrokersResolver,
            secretaries: SecretariesResolver,
            owners: OwnersResolver,
            customers: CustomersResolver,
            properties: PropertiesResolver,
        }
    },
    {
        path: 'view/:id',
        component: ViewBusinessComponent,
        resolve: {
            business: BusinessResolver,
            managers: ManagersResolver,
            advisors: AdvisorsResolver,
            brokers: BrokersResolver,
            secretaries: SecretariesResolver,
            owners: OwnersResolver,
            customers: CustomersResolver,
            leads: LeadsResolver,
            properties: PropertiesResolver,
        }
    },
    {
        path: 'edit/:id',
        component: EditBusinessComponent,
        resolve: {
            business: BusinessResolver,
            managers: ManagersResolver,
            advisors: AdvisorsResolver,
            brokers: BrokersResolver,
            secretaries: SecretariesResolver,
            owners: OwnersResolver,
            customers: CustomersResolver,
            leads: LeadsResolver,
            properties: PropertiesResolver,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BusinessesRoutingModule {}

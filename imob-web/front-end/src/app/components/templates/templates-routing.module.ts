import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('../dashboard/dashboard.module').then(
                        (module) => module.DashboardModule
                    )
            },
            {
                path: 'users',
                loadChildren: () =>
                    import('../users/users.module').then(
                        (module) => module.UsersModule
                    )
            },
            {
                path: 'managers',
                loadChildren: () =>
                    import('../managers/managers.module').then(
                        (module) => module.ManagersModule
                    )
            },
            {
                path: 'advisors',
                loadChildren: () =>
                    import('../advisors/advisors.module').then(
                        (module) => module.AdvisorsModule
                    )
            },
            {
                path: 'brokers',
                loadChildren: () =>
                    import('../brokers/brokers.module').then(
                        (module) => module.BrokersModule
                    )
            },
            {
                path: 'secretaries',
                loadChildren: () =>
                    import('../secretaries/secretaries.module').then(
                        (module) => module.SecretariesModule
                    )
            },
            {
                path: 'companies',
                loadChildren: () =>
                    import('../companies/companies.module').then(
                        (module) => module.CompaniesModule
                    )
            },
            {
                path: 'properties',
                loadChildren: () =>
                    import('../properties/properties.module').then(
                        (module) => module.PropertiesModule
                    )
            },
            {
                path: 'owners',
                loadChildren: () =>
                    import('../owners/owners.module').then(
                        (module) => module.OwnersModule
                    )
            },
            {
                path: 'customers',
                loadChildren: () =>
                    import('../customers/customers.module').then(
                        (module) => module.CustomersModule
                    )
            },
            {
                path: 'leads',
                loadChildren: () =>
                    import('../leads/leads.module').then(
                        (module) => module.LeadsModule
                    )
            },
            {
                path: 'businesses',
                loadChildren: () =>
                    import('../businesses/businesses.module').then(
                        (module) => module.BusinessesModule
                    )
            },
            {
                path: 'commissions-receivable',
                loadChildren: () =>
                    import('../commissions-receivable/commissions-receivable.module').then(
                        (module) => module.CommissionsReceivableModule
                    )
            },
            {
                path: 'commissions-payable',
                loadChildren: () =>
                    import('../commissions-payable/commissions-payable.module').then(
                        (module) => module.CommissionsPayableModule
                    )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplatesRoutingModule {}

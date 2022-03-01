import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component';

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
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
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplatesRoutingModule {}

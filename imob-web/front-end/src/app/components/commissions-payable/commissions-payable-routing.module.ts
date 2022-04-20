import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCommissionsPayableComponent } from './list-commissions-payable/list-commissions-payable.component';

import { CommissionsPayableResolver } from './shared/resolvers/commissions-payable.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListCommissionsPayableComponent,
        resolve: {
            commissionsPayable: CommissionsPayableResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommissionsPayableRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCommissionsReceivableComponent } from './list-commissions-receivable/list-commissions-receivable.component';

import { CommissionsReceivableResolver } from './shared/resolvers/commissions-receivable.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListCommissionsReceivableComponent,
        resolve: {
            commissionsReceivable: CommissionsReceivableResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommissionsReceivableRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOwnersComponent } from './list-owners/list-owners.component';
import { OwnersResolver } from './shared/resolvers/owners.resolver';

const routes: Routes = [
    {
        path: '',
        component: ListOwnersComponent,
        resolve: {
            owners: OwnersResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OwnersRoutingModule {}

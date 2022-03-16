import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { ViewOwnerComponent } from './view-owner/view-owner.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';

import { OwnerResolver } from './shared/resolvers/owner.resolver';
import { OwnersResolver } from './shared/resolvers/owners.resolver';

const routes: Routes = [
    {
        path: 'create',
        component: CreateOwnerComponent
    },
    {
        path: 'list',
        component: ListOwnersComponent,
        resolve: {
            owners: OwnersResolver
        }
    },
    {
        path: 'view/:id',
        component: ViewOwnerComponent,
        resolve: {
            owner: OwnerResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditOwnerComponent,
        resolve: {
            owner: OwnerResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OwnersRoutingModule {}

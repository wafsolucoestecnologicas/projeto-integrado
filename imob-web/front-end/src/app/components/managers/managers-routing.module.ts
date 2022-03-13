import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListManagersComponent } from './list-managers/list-managers.component';
import { ViewManagerComponent } from './view-manager/view-manager.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';

import { ManagerResolver } from './shared/resolvers/manager.resolver';
import { ManagersResolver } from './shared/resolvers/managers.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListManagersComponent,
        resolve: {
            managers: ManagersResolver
        }
    },
    {
        path: 'view/:id',
        component: ViewManagerComponent,
        resolve: {
            manager: ManagerResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditManagerComponent,
        resolve: {
            manager: ManagerResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagersRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListManagersComponent } from './list-managers/list-managers.component';
import { ManagersResolver } from './shared/resolvers/managers.resolver';

const routes: Routes = [
	{
		path: 'list',
		component: ListManagersComponent,
		resolve: {
			managers: ManagersResolver
		}
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagersRoutingModule {}

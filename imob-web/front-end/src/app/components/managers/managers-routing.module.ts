import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListManagersComponent } from './list-managers/list-managers.component';

const routes: Routes = [
	{
		path: '',
		component: ListManagersComponent
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagersRoutingModule {}

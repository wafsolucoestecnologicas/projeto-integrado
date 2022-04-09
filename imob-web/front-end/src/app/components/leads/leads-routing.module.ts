import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateLeadComponent } from './create-lead/create-lead.component';
import { ListLeadComponent } from './list-lead/list-lead.component';
import { ViewLeadComponent } from './view-lead/view-lead.component';
import { EditLeadComponent } from './edit-lead/edit-lead.component';

import { LeadsResolver } from './shared/resolvers/leads.resolver';
import { LeadResolver } from './shared/resolvers/lead.resolver';

const routes: Routes = [
	{
		path: 'create',
		component: CreateLeadComponent
	},
	{
		path: 'list',
		component: ListLeadComponent,
		resolve: {
			leads: LeadsResolver
		}
	},
	{
		path: 'view/:id',
		component: ViewLeadComponent,
		resolve: {
			lead: LeadResolver
		}
	},
	{
		path: 'edit/:id',
		component: EditLeadComponent,
		resolve: {
			lead: LeadResolver
		}
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeadsRoutingModule {}

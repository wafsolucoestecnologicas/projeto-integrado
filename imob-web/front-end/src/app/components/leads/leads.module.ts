import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateLeadComponent } from './create-lead/create-lead.component';
import { ListLeadsComponent } from './list-leads/list-leads.component';
import { ViewLeadComponent } from './view-lead/view-lead.component';
import { EditLeadComponent } from './edit-lead/edit-lead.component';
import { DeleteLeadComponent } from './delete-lead/delete-lead.component';
import { FormatSourcePipe } from './shared/pipes/format-source.pipe';

import { LeadsResolver } from './shared/resolvers/leads.resolver';
import { LeadResolver } from './shared/resolvers/lead.resolver';

@NgModule({
    declarations: [
		CreateLeadComponent,
		ListLeadsComponent,
		ViewLeadComponent,
		EditLeadComponent,
		DeleteLeadComponent,
		FormatSourcePipe
	],
    imports: [
		CommonModule,
		LeadsRoutingModule,
		SharedModule
	],
	providers: [
		LeadsResolver,
		LeadResolver
	]
})
export class LeadsModule {}

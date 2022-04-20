import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCommissionsReceivableComponent } from './list-commissions-receivable/list-commissions-receivable.component';

import { CommissionsReceivableRoutingModule } from './commissions-receivable-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CommissionsReceivableResolver } from './shared/resolvers/commissions-receivable.resolver';


@NgModule({
    declarations: [
		ListCommissionsReceivableComponent
	],
    imports: [
		CommonModule,
		CommissionsReceivableRoutingModule,
		SharedModule
	],
	providers: [
		CommissionsReceivableResolver
	]
})
export class CommissionsReceivableModule {}

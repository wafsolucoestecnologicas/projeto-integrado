import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { ViewOwnerComponent } from './view-owner/view-owner.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { FormatCheckedPipe } from './shared/pipes/format-checked.pipe';

import { OwnersResolver } from './shared/resolvers/owners.resolver';
import { OwnerResolver } from './shared/resolvers/owner.resolver';

@NgModule({
    declarations: [
    	CreateOwnerComponent,
		ListOwnersComponent,
		ViewOwnerComponent,
    	EditOwnerComponent,
  		FormatCheckedPipe
	],
    imports: [
		CommonModule,
		OwnersRoutingModule,
		SharedModule
	],
	providers: [
		OwnersResolver,
		OwnerResolver
	]
})
export class OwnersModule {}

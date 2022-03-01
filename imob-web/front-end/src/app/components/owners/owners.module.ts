import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersRoutingModule } from './owners-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListOwnersComponent } from './list-owners/list-owners.component';
import { FormatCheckedPipe } from './shared/pipes/format-checked.pipe';
import { OwnersResolver } from './shared/resolvers/owners.resolver';

@NgModule({
    declarations: [
		ListOwnersComponent,
  		FormatCheckedPipe
	],
    imports: [
		CommonModule,
		OwnersRoutingModule,
		SharedModule
	],
	providers: [
		OwnersResolver
	]
})
export class OwnersModule {}

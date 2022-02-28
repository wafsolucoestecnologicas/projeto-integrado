import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListUsersComponent } from './list-users/list-users.component';
import { ConvertBooleanPipe } from './shared/pipes/convert-boolean.pipe';
import { UsersResolver } from './shared/resolvers/users.resolver';

@NgModule({
    declarations: [
		ListUsersComponent,
		ConvertBooleanPipe
	],
    imports: [
		CommonModule,
		UsersRoutingModule,
		SharedModule
	],
    providers: [
		UsersResolver
	]
})
export class UsersModule {}

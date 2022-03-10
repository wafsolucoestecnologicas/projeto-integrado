import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FormatUserTypePipe } from './shared/pipes/format-user-type.pipe';

import { UsersResolver } from './shared/resolvers/users.resolver';
import { UserResolver } from './shared/resolvers/user.resolver';

@NgModule({
    declarations: [
		CreateUserComponent,
		ListUsersComponent,
		ViewUserComponent,
		EditUserComponent,
		DeleteUserComponent,
		FormatUserTypePipe
	],
    imports: [
		CommonModule,
		UsersRoutingModule,
		SharedModule
	],
    providers: [
		UsersResolver,
		UserResolver
	]
})
export class UsersModule {}

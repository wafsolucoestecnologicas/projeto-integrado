import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { UsersResolver } from './shared/resolvers/users.resolver';
import { UserResolver } from './shared/resolvers/user.resolver';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
    {
        path: 'create',
        component: CreateUserComponent
    },
    {
        path: 'list',
        component: ListUsersComponent,
        resolve: {
            users: UsersResolver
        }
    },
    {
        path: 'view/:id',
        component: ViewUserComponent,
        resolve: {
            user: UserResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditUserComponent,
        resolve: {
            user: UserResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListSecretariesComponent } from './list-secretaries/list-secretaries.component';
import { ViewSecretaryComponent } from './view-secretary/view-secretary.component';
import { EditSecretaryComponent } from './edit-secretary/edit-secretary.component';

import { SecretariesResolver } from './shared/resolvers/secretaries.resolver';
import { SecretaryResolver } from './shared/resolvers/secretary.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListSecretariesComponent,
        resolve: {
            secretaries: SecretariesResolver
        }
    },
    {
        path: 'view/:id',
        component: ViewSecretaryComponent,
        resolve: {
            secretary: SecretaryResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditSecretaryComponent,
        resolve: {
            secretary: SecretaryResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretariesRoutingModule {}

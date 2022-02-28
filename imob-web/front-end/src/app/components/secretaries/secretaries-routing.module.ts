import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListSecretariesComponent } from './list-secretaries/list-secretaries.component';
import { SecretariesResolver } from './shared/resolvers/secretaries.resolver';

const routes: Routes = [
    {
        path: '',
        component: ListSecretariesComponent,
        resolve: {
            secretaries: SecretariesResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretariesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListSecretariesComponent } from './list-secretaries/list-secretaries.component';
import { ViewSecretaryComponent } from './view-secretary/view-secretary.component';
import { EditSecretaryComponent } from './edit-secretary/edit-secretary.component';

import { SecretariesResolver } from './shared/resolvers/secretaries.resolver';
import { SecretaryResolver } from './shared/resolvers/secretary.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

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
            secretary: SecretaryResolver,
            adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditSecretaryComponent,
        resolve: {
            secretary: SecretaryResolver,
            adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretariesRoutingModule {}

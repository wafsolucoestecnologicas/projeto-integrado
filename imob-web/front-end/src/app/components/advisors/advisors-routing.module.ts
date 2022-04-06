import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAdvisorsComponent } from './list-advisors/list-advisors.component';
import { ViewAdvisorComponent } from './view-advisor/view-advisor.component';
import { EditAdvisorComponent } from './edit-advisor/edit-advisor.component';

import { AdvisorResolver } from './shared/resolvers/advisor.resolver';
import { AdvisorsResolver } from './shared/resolvers/advisors.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListAdvisorsComponent,
        resolve: {
            advisors: AdvisorsResolver
        }
    },
    {
        path: 'view/:id',
        component: ViewAdvisorComponent,
        resolve: {
            advisor: AdvisorResolver,
            adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditAdvisorComponent,
        resolve: {
            advisor: AdvisorResolver,
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
export class AdvisorsRoutingModule {}

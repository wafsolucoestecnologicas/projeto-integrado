import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';

import { CompaniesResolver } from './shared/resolvers/companies.resolver';
import { CompanyResolver } from './shared/resolvers/company.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListCompaniesComponent,
        resolve: {
            companies: CompaniesResolver
        }
    },
    {
        path: 'view/:id',
        component: ViewCompanyComponent,
        resolve: {
            company: CompanyResolver,
            adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditCompanyComponent,
        resolve: {
            company: CompanyResolver,
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
export class CompaniesRoutingModule {}

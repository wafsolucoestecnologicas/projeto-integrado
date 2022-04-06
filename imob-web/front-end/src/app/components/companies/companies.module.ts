import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListCompaniesComponent } from './list-companies/list-companies.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';

import { CompaniesResolver } from './shared/resolvers/companies.resolver';
import { CompanyResolver } from './shared/resolvers/company.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

@NgModule({
    declarations: [
		ListCompaniesComponent,
		ViewCompanyComponent,
		EditCompanyComponent
	],
    imports: [
		CommonModule,
		CompaniesRoutingModule,
		SharedModule
	],
	providers: [
		CompaniesResolver,
		CompanyResolver,
		AdressesResolver,
		NeighborhoodsResolver,
		CitiesResolver
	]
})
export class CompaniesModule {}

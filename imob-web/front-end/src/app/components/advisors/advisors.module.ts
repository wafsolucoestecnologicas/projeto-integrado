import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvisorsRoutingModule } from './advisors-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListAdvisorsComponent } from './list-advisors/list-advisors.component';
import { ViewAdvisorComponent } from './view-advisor/view-advisor.component';
import { EditAdvisorComponent } from './edit-advisor/edit-advisor.component';

import { AdvisorsResolver } from './shared/resolvers/advisors.resolver';
import { AdvisorResolver } from './shared/resolvers/advisor.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

@NgModule({
    declarations: [
        ListAdvisorsComponent,
        ViewAdvisorComponent,
        EditAdvisorComponent
    ],
    imports: [
        CommonModule,
        AdvisorsRoutingModule,
        SharedModule
    ],
    providers: [
        AdvisorsResolver,
        AdvisorResolver,
        AdressesResolver,
		NeighborhoodsResolver,
		CitiesResolver
    ]
})
export class AdvisorsModule {}

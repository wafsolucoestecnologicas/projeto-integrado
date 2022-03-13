import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAdvisorsComponent } from './list-advisors/list-advisors.component';
import { ViewAdvisorComponent } from './view-advisor/view-advisor.component';
import { EditAdvisorComponent } from './edit-advisor/edit-advisor.component';

import { AdvisorResolver } from './shared/resolvers/advisor.resolver';
import { AdvisorsResolver } from './shared/resolvers/advisors.resolver';

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
            advisor: AdvisorResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditAdvisorComponent,
        resolve: {
            advisor: AdvisorResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvisorsRoutingModule {}

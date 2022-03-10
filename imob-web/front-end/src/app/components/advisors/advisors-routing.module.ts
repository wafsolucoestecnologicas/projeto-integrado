import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAdvisorsComponent } from './list-advisors/list-advisors.component';
import { AdvisorsResolver } from './shared/resolvers/advisors.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListAdvisorsComponent,
        resolve: {
            advisors: AdvisorsResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdvisorsRoutingModule {}

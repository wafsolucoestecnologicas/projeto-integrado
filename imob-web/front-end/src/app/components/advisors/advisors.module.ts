import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvisorsRoutingModule } from './advisors-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListAdvisorsComponent } from './list-advisors/list-advisors.component';
import { AdvisorsResolver } from './shared/resolvers/advisors.resolver';

@NgModule({
    declarations: [
        ListAdvisorsComponent
    ],
    imports: [
        CommonModule,
        AdvisorsRoutingModule,
        SharedModule
    ],
    providers: [
        AdvisorsResolver
    ]
})
export class AdvisorsModule {}

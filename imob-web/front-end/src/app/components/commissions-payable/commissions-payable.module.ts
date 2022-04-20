import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCommissionsPayableComponent } from './list-commissions-payable/list-commissions-payable.component';

import { CommissionsPayableRoutingModule } from './commissions-payable-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CommissionsPayableResolver } from './shared/resolvers/commissions-payable.resolver';

@NgModule({
    declarations: [
        ListCommissionsPayableComponent
    ],
    imports: [
        CommonModule,
        CommissionsPayableRoutingModule,
        SharedModule
    ],
    providers: [
        CommissionsPayableResolver
    ]
})
export class CommissionsPayableModule {}

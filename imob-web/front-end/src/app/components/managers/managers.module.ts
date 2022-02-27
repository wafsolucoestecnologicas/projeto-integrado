import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListManagersComponent } from './list-managers/list-managers.component';
import { ManagersResolver } from './shared/resolvers/managers.resolver';

@NgModule({
    declarations: [
        ListManagersComponent
    ],
    imports: [
        CommonModule,
        ManagersRoutingModule,
        SharedModule
    ],
    providers: [
        ManagersResolver
    ]
})
export class ManagersModule {}

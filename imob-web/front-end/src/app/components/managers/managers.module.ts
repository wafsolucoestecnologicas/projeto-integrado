import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListManagersComponent } from './list-managers/list-managers.component';


@NgModule({
    declarations: [
        ListManagersComponent
    ],
    imports: [
        CommonModule,
        ManagersRoutingModule,
        SharedModule
    ]
})
export class ManagersModule {}

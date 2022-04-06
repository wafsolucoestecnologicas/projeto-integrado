import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListManagersComponent } from './list-managers/list-managers.component';
import { ViewManagerComponent } from './view-manager/view-manager.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';

import { ManagersResolver } from './shared/resolvers/managers.resolver';
import { ManagerResolver } from './shared/resolvers/manager.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

@NgModule({
    declarations: [
        ListManagersComponent,
        ViewManagerComponent,
        EditManagerComponent
    ],
    imports: [
        CommonModule,
        ManagersRoutingModule,
        SharedModule
    ],
    providers: [
        ManagersResolver,
        ManagerResolver,
        AdressesResolver,
		NeighborhoodsResolver,
		CitiesResolver
    ]
})
export class ManagersModule {}

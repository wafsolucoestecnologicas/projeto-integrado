import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokersRoutingModule } from './brokers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListBrokersComponent } from './list-brokers/list-brokers.component';
import { ViewBrokerComponent } from './view-broker/view-broker.component';
import { EditBrokerComponent } from './edit-broker/edit-broker.component';

import { BrokersResolver } from './shared/resolvers/brokers.resolver';
import { BrokerResolver } from './shared/resolvers/broker.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

@NgModule({
    declarations: [
        ListBrokersComponent,
        ViewBrokerComponent,
        EditBrokerComponent
    ],
    imports: [
        CommonModule,
        BrokersRoutingModule,
        SharedModule
    ],
    providers: [
        BrokersResolver,
        BrokerResolver,
        AdressesResolver,
		NeighborhoodsResolver,
		CitiesResolver
    ]
})
export class BrokersModule {}

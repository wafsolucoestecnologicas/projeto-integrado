import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokersRoutingModule } from './brokers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListBrokersComponent } from './list-brokers/list-brokers.component';
import { BrokerResolver } from './shared/resolvers/broker.resolver';

@NgModule({
    declarations: [
        ListBrokersComponent
    ],
    imports: [
        CommonModule,
        BrokersRoutingModule,
        SharedModule
    ],
    providers: [
        BrokerResolver
    ]
})
export class BrokersModule {}

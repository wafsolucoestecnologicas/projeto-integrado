import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBrokersComponent } from './list-brokers/list-brokers.component';
import { ViewBrokerComponent } from './view-broker/view-broker.component';
import { EditBrokerComponent } from './edit-broker/edit-broker.component';

import { BrokerResolver } from './shared/resolvers/broker.resolver';
import { BrokersResolver } from './shared/resolvers/brokers.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListBrokersComponent,
        resolve: {
            brokers: BrokersResolver
        }
    },
    {
        path: 'view/:id',
        component: ViewBrokerComponent,
        resolve: {
            broker: BrokerResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditBrokerComponent,
        resolve: {
            broker: BrokerResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrokersRoutingModule {}

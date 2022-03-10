import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBrokersComponent } from './list-brokers/list-brokers.component';
import { BrokerResolver } from './shared/resolvers/broker.resolver';

const routes: Routes = [
    {
        path: 'list',
        component: ListBrokersComponent,
        resolve: {
            brokers: BrokerResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrokersRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBrokersComponent } from './list-brokers/list-brokers.component';
import { ViewBrokerComponent } from './view-broker/view-broker.component';
import { EditBrokerComponent } from './edit-broker/edit-broker.component';

import { BrokerResolver } from './shared/resolvers/broker.resolver';
import { BrokersResolver } from './shared/resolvers/brokers.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

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
            broker: BrokerResolver,
            adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
        }
    },
    {
        path: 'edit/:id',
        component: EditBrokerComponent,
        resolve: {
            broker: BrokerResolver,
            adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrokersRoutingModule {}

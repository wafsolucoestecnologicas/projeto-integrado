import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePropertyComponent } from './create-property/create-property.component';
import { ListPropertiesComponent } from './list-properties/list-properties.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';

import { PropertiesResolver } from './shared/resolvers/properties.resolver';
import { PropertyResolver } from './shared/resolvers/property.resolver';
import { OwnersResolver } from '../owners/shared/resolvers/owners.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

const routes: Routes = [
	{
		path: 'create',
		component: CreatePropertyComponent,
		resolve: {
			owners: OwnersResolver
		}
	},
	{
		path: 'list',
		component: ListPropertiesComponent,
		resolve: {
			properties: PropertiesResolver
		}
	},
	{
		path: 'view/:id',
		component: ViewPropertyComponent,
		resolve: {
			property: PropertyResolver,
			adresses: AdressesResolver,
            neighborhoods: NeighborhoodsResolver,
            cities: CitiesResolver
		}
	},
	{
		path: 'edit/:id',
		component: EditPropertyComponent,
		resolve: {
			property: PropertyResolver,
			owners: OwnersResolver,
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
export class PropertiesRoutingModule {}

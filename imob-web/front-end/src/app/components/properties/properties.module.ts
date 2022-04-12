import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreatePropertyComponent } from './create-property/create-property.component';
import { ListPropertiesComponent } from './list-properties/list-properties.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { DeletePropertyComponent } from './delete-property/delete-property.component';

import { PropertiesResolver } from './shared/resolvers/properties.resolver';
import { PropertyResolver } from './shared/resolvers/property.resolver';
import { OwnersResolver } from '../owners/shared/resolvers/owners.resolver';
import { AdressesResolver } from 'src/app/shared/resolvers/adresses.resolver';
import { NeighborhoodsResolver } from 'src/app/shared/resolvers/neighborhoods.resolver';
import { CitiesResolver } from 'src/app/shared/resolvers/cities.resolver';

@NgModule({
    declarations: [
        CreatePropertyComponent,
        ListPropertiesComponent,
        ViewPropertyComponent,
        EditPropertyComponent,
        DeletePropertyComponent
    ],
    imports: [
		CommonModule,
		PropertiesRoutingModule,
		SharedModule
	],
	providers: [
		PropertiesResolver,
		PropertyResolver,
        OwnersResolver,
        AdressesResolver,
		NeighborhoodsResolver,
		CitiesResolver
	]
})
export class PropertiesModule {}

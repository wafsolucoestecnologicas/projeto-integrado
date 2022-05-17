import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesForSaleComponent } from './properties-for-sale.component';
import { DialogComponent } from './dialog/dialog.component';

import { PropertiesForSaleRoutingModule } from './properties-for-sale-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        PropertiesForSaleComponent,
        DialogComponent
    ],
    imports: [
        CommonModule,
        PropertiesForSaleRoutingModule,
        SharedModule
    ]
})
export class PropertiesForSaleModule {}

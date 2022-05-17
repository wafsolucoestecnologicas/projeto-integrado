import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertiesForSaleComponent } from './properties-for-sale.component';

const routes: Routes = [
    {
        path: '',
        component: PropertiesForSaleComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PropertiesForSaleRoutingModule {}

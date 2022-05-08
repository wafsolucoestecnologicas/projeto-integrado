import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
      DashboardComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      NgxChartsModule,
      SharedModule
    ]
})
export class DashboardModule {}

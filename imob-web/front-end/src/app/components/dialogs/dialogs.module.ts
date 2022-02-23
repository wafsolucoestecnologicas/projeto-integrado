import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { CompanyComponent } from './company/company.component';

@NgModule({
    declarations: [
		CompanyComponent
	],
    imports: [
		CommonModule,
		SharedModule
	],
	exports: [
		CompanyComponent
	]
})
export class DialogsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { TemplatesRoutingModule } from './templates-routing.module';

import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';


@NgModule({
	declarations: [
		HeaderComponent,
		AsideComponent,
		ContentComponent
	],
	imports: [
		CommonModule,
		TemplatesRoutingModule,
		SharedModule
	],
	exports: [
		HeaderComponent,
		AsideComponent,
		ContentComponent
	],
})
export class TemplatesModule {}

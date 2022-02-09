import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [
		HeaderComponent,
		AsideComponent,
		ContentComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [
		HeaderComponent,
		AsideComponent,
		ContentComponent
	],
})
export class TemplatesModule {}

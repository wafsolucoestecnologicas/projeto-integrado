import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatCardModule,
		MatMenuModule,
		MatListModule,
		MatIconModule,
		MatButtonModule
	],
	exports: [
		RouterModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatCardModule,
		MatMenuModule,
		MatListModule,
		MatIconModule,
		MatButtonModule
	]
})
export class SharedModule { }

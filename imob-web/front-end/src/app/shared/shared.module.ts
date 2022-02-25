import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgxMaskModule } from 'ngx-mask';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
		MatMenuModule,
		MatSnackBarModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatTableModule,
		MatPaginatorModule,
		NgxMaskModule.forChild()
	],
	exports: [
		RouterModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
		MatMenuModule,
		MatSnackBarModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatTableModule,
		MatPaginatorModule,
		NgxMaskModule
	]
})
export class SharedModule { }

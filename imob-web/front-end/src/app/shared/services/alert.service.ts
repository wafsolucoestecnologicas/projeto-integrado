import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError, EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(
		private readonly _matSnackBar: MatSnackBar
	) {}

    public openSnackBar(message: string): Observable<any> {
        this._matSnackBar.open(message, 'X', {
            duration: 5000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom'
        });

        return throwError(EMPTY);
    }
	
}

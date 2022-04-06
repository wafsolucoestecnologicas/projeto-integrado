import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { State } from '../interfaces/state.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { StateRoutes } from '../enums/state.enum';

@Injectable({
    providedIn: 'root'
})
export class StateService {
	private ROUTES: typeof StateRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
		this.ROUTES = StateRoutes;
	}

    public index(): Observable<State[]> {
        return this.http.get<State[]>(`${environment.URL}/${this.ROUTES.STATES}`).pipe(
            take(1),
            map((response: State[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os estados! - ${error.message}`
                )
            )
        );
    }

	public read(id: number): Observable<State | undefined> {
        return this.http.get<State>(`${environment.URL}/${this.ROUTES.STATES}/${id}`).pipe(
            take(1),
            map((response: State) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o estado! - ${error.message}`
                )
            )
        );
    }

}

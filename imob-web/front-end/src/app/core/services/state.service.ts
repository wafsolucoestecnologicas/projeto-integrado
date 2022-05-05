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
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os estados!`
                );
            })
        );
    }

	public read(id: number): Observable<State | undefined> {
        return this.http.get<State>(`${environment.URL}/${this.ROUTES.STATES}/${id}`).pipe(
            take(1),
            map((response: State) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o estado!`
                );
            })
        );
    }

}

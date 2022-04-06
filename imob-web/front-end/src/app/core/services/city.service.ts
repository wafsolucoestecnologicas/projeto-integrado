import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { City, CreateCity, UpdateCity, DeleteCity } from '../interfaces/city.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CityRoutes } from '../enums/city.enum';

@Injectable({
    providedIn: 'root'
})
export class CityService {

	private ROUTES: typeof CityRoutes;

    constructor(
		private readonly http: HttpClient,
        private readonly _alertService: AlertService
	) {
		this.ROUTES = CityRoutes;
	}

	public index(): Observable<City[]> {
        return this.http.get<City[]>(`${environment.URL}/${this.ROUTES.CITIES}`).pipe(
            take(1),
            map((response: City[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar as cidades! - ${error.message}`
                )
            )
        );
    }

	public create(body: CreateCity): Observable<City> {
        return this.http.post<City>(`${environment.URL}/${this.ROUTES.CITIES}`, body).pipe(
            take(1),
            map((response: City) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar uma cidade! - ${error.message}`
                )
            )
        );
    }

	public read(id: number): Observable<City | undefined> {
        return this.http.get<City>(`${environment.URL}/${this.ROUTES.CITIES}/${id}`).pipe(
            take(1),
            map((response: City) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar a cidade! - ${error.message}`
                )
            )
        );
    }

	public update(body: UpdateCity, id: number): Observable<City> {
        return this.http.put<City>(`${environment.URL}/${this.ROUTES.CITIES}/${id}`, body).pipe(
            take(1),
            map((response: City) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar a cidade! - ${error.message}`
                )
            )
        );
    }

	public delete(id: number): Observable<DeleteCity> {
        return this.http.delete<DeleteCity>(`${environment.URL}/${this.ROUTES.CITIES}/${id}`).pipe(
            take(1),
            map((response: DeleteCity) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar a cidade! - ${error.message}`
                )
            )
        );
    }

}

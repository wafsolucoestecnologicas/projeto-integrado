import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Property, CreateProperty, UpdateProperty, DeleteProperty } from '../interfaces/property.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PropertyRoutes } from '../enums/property.enum';

@Injectable({
    providedIn: 'root'
})
export class PropertyService {

	private ROUTES: typeof PropertyRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
		this.ROUTES = PropertyRoutes;
	}

	public index(): Observable<Property[]> {
        return this.http.get<Property[]>(`${environment.URL}/${this.ROUTES.PROPERTIES}`).pipe(
            take(1),
            map((response: Property[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os imóveis!`
                )
            )
        );
    }

	public create(body: CreateProperty): Observable<Property> {
        return this.http.post<Property>(`${environment.URL}/${this.ROUTES.PROPERTIES}`, body).pipe(
            take(1),
            map((response: Property) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar o imóvel!`
                )
            )
        );
    }

    public read(id: number): Observable<Property | undefined> {
        return this.http.get<Property>(`${environment.URL}/${this.ROUTES.PROPERTIES}/${id}`).pipe(
            take(1),
            map((response: Property) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o imóvel!`
                )
            )
        );
    }

    public update(body: UpdateProperty, id: number): Observable<Property> {
        return this.http.put<Property>(`${environment.URL}/${this.ROUTES.PROPERTIES}/${id}`, body).pipe(
            take(1),
            map((response: Property) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o imóvel!`
                )
            )
        );
    }

    public delete(id: number): Observable<DeleteProperty> {
        return this.http.delete<DeleteProperty>(`${environment.URL}/${this.ROUTES.PROPERTIES}/${id}`).pipe(
            take(1),
            map((response: DeleteProperty) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar o imóvel!`
                )
            )
        );
    }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Neighborhood, CreateNeighborhood, UpdateNeighborhood, DeleteNeighborhood } from '../interfaces/neighborhood.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NeighborhoodRoutes } from '../enums/neighborhood.enum';

@Injectable({
    providedIn: 'root'
})
export class NeighborhoodService {

    private ROUTES: typeof NeighborhoodRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
        this.ROUTES = NeighborhoodRoutes;
    }

    public index(): Observable<Neighborhood[]> {
        return this.http.get<Neighborhood[]>(`${environment.URL}/${this.ROUTES.NEIGHBORHOODS}`).pipe(
            take(1),
            map((response: Neighborhood[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os bairros! - ${error.message}`
                )
            )
        );
    }

    public create(body: CreateNeighborhood): Observable<Neighborhood> {
        return this.http.post<Neighborhood>(`${environment.URL}/${this.ROUTES.NEIGHBORHOODS}`, body).pipe(
            take(1),
            map((response: Neighborhood) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar um bairro! - ${error.message}`
                )
            )
        );
    }

    public read(id: number): Observable<Neighborhood | undefined> {
        return this.http.get<Neighborhood>(`${environment.URL}/${this.ROUTES.NEIGHBORHOODS}/${id}`).pipe(
            take(1),
            map((response: Neighborhood) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(`Ocorreu um erro ao listar o bairro! - ${error.message}`)
            )
        );
    }

    public update(body: UpdateNeighborhood, id: number): Observable<Neighborhood> {
        return this.http.put<Neighborhood>(`${environment.URL}/${this.ROUTES.NEIGHBORHOODS}/${id}`, body).pipe(
            take(1),
            map((response: Neighborhood) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o bairro! - ${error.message}`
                )
            )
        );
    }

    public delete(id: number): Observable<DeleteNeighborhood> {
        return this.http.delete<DeleteNeighborhood>(`${environment.URL}/${this.ROUTES.NEIGHBORHOODS}/${id}`).pipe(
            take(1),
            map((response: DeleteNeighborhood) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar o bairro! - ${error.message}`
                )
            )
        );
    }
    
}

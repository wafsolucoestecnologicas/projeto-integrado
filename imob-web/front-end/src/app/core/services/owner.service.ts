import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Owner, CreateOwner, UpdateOwner, DeleteOwner } from '../interfaces/owner.interface';
import { OwnerRoutes } from '../enums/owner.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class OwnerService {

    private ROUTES: typeof OwnerRoutes;

    constructor(
        private readonly http: HttpClient,
        private readonly _alertService: AlertService
    ) {
        this.ROUTES = OwnerRoutes;
    }

    public index(): Observable<Owner[]> {
        return this.http.get<Owner[]>(`${environment.URL}/${this.ROUTES.OWNERS}`).pipe(
            take(1),
            map((response: Owner[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os proprietários!`
                );
            })
        );
    }

    public create(body: CreateOwner): Observable<Owner> {
        return this.http.post<Owner>(`${environment.URL}/${this.ROUTES.OWNERS}`, body).pipe(
            take(1),
            map((response: Owner) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar o proprietário!`
                );
            })
        );
    }

    public read(id: number): Observable<Owner> {
        return this.http.get<Owner>(`${environment.URL}/${this.ROUTES.OWNERS}/${id}`).pipe(
            take(1),
            map((response: Owner) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o proprietário!`
                );
            })
        );
    }

    public update(body: UpdateOwner, id: number): Observable<Owner> {
        return this.http.put<Owner[]>(`${environment.URL}/${this.ROUTES.OWNERS}/${id}`, body).pipe(
            take(1),
            map((response: Owner[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o proprietário!`
                );
            })
        );
    }

    public delete(id: number): Observable<DeleteOwner> {
        return this.http.delete<DeleteOwner>(`${environment.URL}/${this.ROUTES.OWNERS}/${id}`).pipe(
            take(1),
            map((response: DeleteOwner) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar o proprietário!`
                );
            })
        );
    }
    
}

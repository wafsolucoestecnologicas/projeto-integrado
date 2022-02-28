import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Secretary, UpdateSecretary } from '../interfaces/secretary.interface';
import { SecretaryRoutes } from '../enums/secretary.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class SecretaryService {

    private ROUTES: typeof SecretaryRoutes;

    constructor(
        private readonly http: HttpClient,
        private readonly _alertService: AlertService
    ) {
        this.ROUTES = SecretaryRoutes;
    }

    public index(): Observable<Secretary[]> {
        return this.http.get<Secretary[]>(`${environment.URL}/${this.ROUTES.SECRETARIES}`).pipe(
            take(1),
            map((response: Secretary[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar as secretárias! - ${error.message}`
                )
            )
        );
    }

    public read(id: number): Observable<Secretary> {
        return this.http.get<Secretary>(`${environment.URL}/${this.ROUTES.SECRETARIES}/${id}`).pipe(
            take(1),
            map((response: Secretary) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar a secretária! - ${error.message}`
                )
            )
        );
    }

    public update(body: UpdateSecretary, id: number): Observable<Secretary[]> {
        return this.http
            .put<Secretary>(`${environment.URL}/${this.ROUTES.SECRETARIES}/${id}`, body)
            .pipe(
                take(1),
                map((response: Secretary) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao atualizar a secretária! - ${error.message}`
                    )
                )
            );
    }

}

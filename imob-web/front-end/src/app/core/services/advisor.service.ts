import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Advisor, UpdateAdvisor } from '../interfaces/advisor.interface';
import { AdvisorRoutes } from '../enums/advisor.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class AdvisorService {

    private ROUTES: typeof AdvisorRoutes;

    constructor(
        private readonly http: HttpClient,
        private readonly _alertService: AlertService
    ) {
        this.ROUTES = AdvisorRoutes;
    }

    public index(): Observable<Advisor[]> {
        return this.http.get<Advisor[]>(`${environment.URL}/${this.ROUTES.ADVISORS}`).pipe(
            take(1),
            map((response: Advisor[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os despachantes!`
                )
            )
        );
    }

    public read(id: number): Observable<Advisor> {
        return this.http.get<Advisor>(`${environment.URL}/${this.ROUTES.ADVISORS}/${id}`).pipe(
            take(1),
            map((response: Advisor) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao lista o despachante!`
                )
            )
        );
    }

    public update(body: UpdateAdvisor, id: number): Observable<Advisor> {
        return this.http.put<Advisor>(`${environment.URL}/${this.ROUTES.ADVISORS}/${id}`, body).pipe(
            take(1),
            map((response: Advisor) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o despachante!`
                )
            )
        );
    }
    
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Manager, UpdateManager } from '../interfaces/manager.interface';
import { ManagerRoutes } from '../enums/manager.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class ManagerService {

    private ROUTES: typeof ManagerRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
        this.ROUTES = ManagerRoutes;
    }

    public index(): Observable<Manager[]> {
        return this.http.get<Manager[]>(`${environment.URL}/${this.ROUTES.MANAGERS}`).pipe(
            take(1),
            map((response: Manager[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os gestores!`
                )
            )
        );
    }

    public read(id: number): Observable<Manager> {
        return this.http.get<Manager>(`${environment.URL}/${this.ROUTES.MANAGERS}/${id}`).pipe(
			take(1),
            map((response: Manager) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o gestor!`
                )
            )
		);
    }

    public update(body: UpdateManager, id: number): Observable<Manager> {
        return this.http.put<Manager>(`${environment.URL}/${this.ROUTES.MANAGERS}/${id}`, body).pipe(
			take(1),
            map((response: Manager) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o gestor!`
                )
            )
		);
    }
	
}

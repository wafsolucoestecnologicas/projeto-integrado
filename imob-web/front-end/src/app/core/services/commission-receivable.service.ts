import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CommissionReceivable, CreateCommissionReceivable, UpdateCommissionReceivable, DeleteCommissionReceivable, Receivable } from '../interfaces/commission-receivable.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CommissionReceivableRoutes } from '../enums/commission-receivable.enum';

@Injectable({
    providedIn: 'root'
})
export class CommissionReceivableService {

	private ROUTES: typeof CommissionReceivableRoutes;

    constructor(
		private readonly http: HttpClient,
        private readonly _alertService: AlertService
	) {
		this.ROUTES = CommissionReceivableRoutes;
	}

	public receivable(month: string): Observable<Receivable> {
        return this.http.get<Receivable>(`${environment.URL}/${this.ROUTES.RECEIVABLE}`, {
			params: {
				month
			}
		}).pipe(
            take(1),
            map((response: Receivable) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao buscar os totais de comissões a receber!`
                );
            })
        );
    }

    public sale(CNPJ: string): Observable<CommissionReceivable[]> {
        return this.http.get<CommissionReceivable[]>(`${environment.URL}/${this.ROUTES.COMMISSIONS_RECEIVABLE}/${CNPJ}/sale`).pipe(
            take(1),
            map((response: CommissionReceivable[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar as comissões a receber!`
                );
            })
        );
    }

	public index(): Observable<CommissionReceivable[]> {
        return this.http.get<CommissionReceivable[]>(`${environment.URL}/${this.ROUTES.COMMISSIONS_RECEIVABLE}`).pipe(
            take(1),
            map((response: CommissionReceivable[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar as comissões a receber!`
                );
            })
        );
    }

    public create(body: CreateCommissionReceivable): Observable<CommissionReceivable> {
        return this.http.post<CommissionReceivable>(`${environment.URL}/${this.ROUTES.COMMISSIONS_RECEIVABLE}`, body).pipe(
            take(1),
            map((response: CommissionReceivable) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar a comissão a receber!`
                );
            })
        );
    }

    public read(id: number): Observable<CommissionReceivable | undefined> {
        return this.http.get<CommissionReceivable>(`${environment.URL}/${this.ROUTES.COMMISSIONS_RECEIVABLE}/${id}`).pipe(
            take(1),
            map((response: CommissionReceivable) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar a comissão a receber!`
                );
            })
        );
    }

    public update(body: UpdateCommissionReceivable, id: number): Observable<CommissionReceivable> {
        return this.http.put<CommissionReceivable>(`${environment.URL}/${this.ROUTES.COMMISSIONS_RECEIVABLE}/${id}`, body).pipe(
            take(1),
            map((response: CommissionReceivable) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar a comissão a receber!`
                );
            })
        );
    }

    public delete(id: number): Observable<DeleteCommissionReceivable> {
        return this.http.delete<DeleteCommissionReceivable>(`${environment.URL}/${this.ROUTES.COMMISSIONS_RECEIVABLE}/${id}`).pipe(
            take(1),
            map((response: DeleteCommissionReceivable) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar a comissão a receber!`
                );
            })
        );
    }

}

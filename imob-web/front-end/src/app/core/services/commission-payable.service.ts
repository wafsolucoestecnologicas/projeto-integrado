import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CommissionPayable, CreateCommissionPayable, UpdateCommissionPayable, DeleteCommissionPayable, Payable } from '../interfaces/commission-payable.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CommissionPayableRoutes } from '../enums/commission-payable.enum';

@Injectable({
    providedIn: 'root'
})
export class CommissionPayableService {

	private ROUTES: typeof CommissionPayableRoutes;

    constructor(
		private readonly http: HttpClient,
        private readonly _alertService: AlertService
	) {
		this.ROUTES = CommissionPayableRoutes;
	}

	public payable(month: string): Observable<Payable> {
        return this.http.get<Payable>(`${environment.URL}/${this.ROUTES.PAYABLE}`, {
			params: {
				month
			}
		}).pipe(
            take(1),
            map((response: Payable) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao buscar os totais de comissões a pagar! - ${error.message}`
                )
            )
        );
    }

	public index(): Observable<CommissionPayable[]> {
        return this.http.get<CommissionPayable[]>(`${environment.URL}/${this.ROUTES.COMMISSIONS_PAYABLE}`).pipe(
            take(1),
            map((response: CommissionPayable[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar as comissões a pagar! - ${error.message}`
                )
            )
        );
    }

    public create(body: CreateCommissionPayable): Observable<CommissionPayable> {
        return this.http.post<CommissionPayable>(`${environment.URL}/${this.ROUTES.COMMISSIONS_PAYABLE}`, body).pipe(
            take(1),
            map((response: CommissionPayable) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar a comissão a pagar! - ${error.message}`
                )
            )
        );
    }

    public read(id: number): Observable<CommissionPayable | undefined> {
        return this.http.get<CommissionPayable>(`${environment.URL}/${this.ROUTES.COMMISSIONS_PAYABLE}/${id}`).pipe(
            take(1),
            map((response: CommissionPayable) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar a comissão a pagar! - ${error.message}`
                )
            )
        );
    }

    public update(body: UpdateCommissionPayable, id: number): Observable<CommissionPayable> {
        return this.http.put<CommissionPayable>(`${environment.URL}/${this.ROUTES.COMMISSIONS_PAYABLE}/${id}`, body).pipe(
            take(1),
            map((response: CommissionPayable) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar a comissão a pagar! - ${error.message}`
                )
            )
        );
    }

    public delete(id: number): Observable<DeleteCommissionPayable> {
        return this.http.delete<DeleteCommissionPayable>(`${environment.URL}/${this.ROUTES.COMMISSIONS_PAYABLE}/${id}`).pipe(
            take(1),
            map((response: DeleteCommissionPayable) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar a comissão a pagar! - ${error.message}`
                )
            )
        );
    }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Lead, CreateLead, UpdateLead, DeleteLead, AmountLeads } from '../interfaces/lead.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LeadRoutes } from '../enums/lead.enum';

@Injectable({
    providedIn: 'root'
})
export class LeadService {

    private _sources: string[];
	private ROUTES: typeof LeadRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
        this._sources = new Array<string>(
            'imobiliária',
            'telefone',
            'anúncio',
            'internet',
            'whatsapp'
        );
		this.ROUTES = LeadRoutes;
	}

	public amount(month: string): Observable<AmountLeads> {
        return this.http.get<AmountLeads>(`${environment.URL}/${this.ROUTES.AMOUNT}`, {
			params: {
				month
			}
		}).pipe(
            take(1),
            map((response: AmountLeads) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao buscar o total de leads! - ${error.message}`
                )
            )
        );
    }

	public index(): Observable<Lead[]> {
        return this.http.get<Lead[]>(`${environment.URL}/${this.ROUTES.LEADS}`).pipe(
            take(1),
            map((response: Lead[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar as leads! - ${error.message}`
                )
            )
        );
    }

	public create(body: CreateLead): Observable<Lead> {
        return this.http.post<Lead>(`${environment.URL}/${this.ROUTES.LEADS}`, body).pipe(
            take(1),
            map((response: Lead) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar a lead! - ${error.message}`
                )
            )
        );
    }

    public read(id: number): Observable<Lead | undefined> {
        return this.http.get<Lead>(`${environment.URL}/${this.ROUTES.LEADS}/${id}`).pipe(
            take(1),
            map((response: Lead) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar a lead! - ${error.message}`
                )
            )
        );
    }

    public update(body: UpdateLead, id: number): Observable<Lead> {
        return this.http.put<Lead>(`${environment.URL}/${this.ROUTES.LEADS}/${id}`, body).pipe(
            take(1),
            map((response: Lead) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar a lead! - ${error.message}`
                )
            )
        );
    }

    public delete(id: number): Observable<DeleteLead> {
        return this.http.delete<DeleteLead>(`${environment.URL}/${this.ROUTES.LEADS}/${id}`).pipe(
            take(1),
            map((response: DeleteLead) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar a lead! - ${error.message}`
                )
            )
        );
    }

    public get sources(): string[] {
        return this._sources;
    }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
    Business,
    CreateBusiness,
    UpdateBusiness,
    DeleteBusiness,
    AmountBusiness,
    TransferManager,
    TransferAdvisor,
    TransferBroker,
    RejectBusiness,
    CloseBusiness
} from '../interfaces/business.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { BusinessRoutes } from '../enums/business.enum';

@Injectable({
    providedIn: 'root'
})
export class BusinessService {
	
    private _status: string[];
    private ROUTES: typeof BusinessRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
        this._status = new Array<string>(
            'prospecção',
            'visita',
            'proposta',
            'rejeitado',
            'fechado'
        );
        this.ROUTES = BusinessRoutes;
    }

    public amount(): Observable<AmountBusiness> {
        return this.http.get<AmountBusiness>(`${environment.URL}/${this.ROUTES.AMOUNT}`).pipe(
            take(1),
            map((response: AmountBusiness) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao buscar a quantidade total de negócios! - ${error.message}`
                )
            )
        );
    }

    public transferManager(id: number, body: any): Observable<TransferManager> {
        return this.http
            .put<TransferManager>(`${environment.URL}/${this.ROUTES.TRANSFER_MANAGER}/${id}`, body)
            .pipe(
                take(1),
                map((response: TransferManager) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao transferir um negócio para um gestor! - ${error.message}`
                    )
                )
            );
    }

    public transferAdvisor(id: number, body: any): Observable<TransferAdvisor> {
        return this.http
            .put<TransferAdvisor>(`${environment.URL}/${this.ROUTES.TRANSFER_ADVISOR}/${id}`, body)
            .pipe(
                take(1),
                map((response: TransferAdvisor) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao transferir um negócio para um despachante! - ${error.message}`
                    )
                )
            );
    }

    public transferBroker(id: number, body: any): Observable<TransferBroker> {
        return this.http
            .put<TransferBroker>(`${environment.URL}/${this.ROUTES.TRANSFER_BROKER}/${id}`, body)
            .pipe(
                take(1),
                map((response: TransferBroker) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao transferir um negócio para um corretor! - ${error.message}`
                    )
                )
            );
    }

    public reject(id: number, body: any): Observable<RejectBusiness> {
        return this.http
            .put<RejectBusiness>(`${environment.URL}/${this.ROUTES.REJECT_BUSINESS}/${id}`, body)
            .pipe(
                take(1),
                map((response: RejectBusiness) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao rejetiar um negócio! - ${error.message}`
                    )
                )
            );
    }

    public close(id: number, body: any): Observable<CloseBusiness> {
        return this.http
            .put<CloseBusiness>(`${environment.URL}/${this.ROUTES.CLOSE_BUSINESS}/${id}`, body)
            .pipe(
                take(1),
                map((response: CloseBusiness) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao fechar um negócio! - ${error.message}`
                    )
                )
            );
    }

    public upload(files: Set<File>): Observable<any> {
        const formData = new FormData();

        files.forEach((file: File) => {
            formData.append('file', file, file.name);
        })

        const request = new HttpRequest('POST', `${environment.URL}/${this.ROUTES.UPLOAD}`, formData);

        return this.http.request(request);
    }

    public index(): Observable<Business[]> {
        return this.http.get<Business[]>(`${environment.URL}/${this.ROUTES.BUSINESSES}`).pipe(
            take(1),
            map((response: Business[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os negócios! - ${error.message}`
                )
            )
        );
    }

    public create(body: CreateBusiness): Observable<Business> {
        return this.http.post<Business>(`${environment.URL}/${this.ROUTES.BUSINESSES}`, body).pipe(
            take(1),
            map((response: Business) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(`Ocorreu um erro ao criar o negócio! - ${error.message}`)
            )
        );
    }

    public read(id: number): Observable<Business | undefined> {
        return this.http.get<Business>(`${environment.URL}/${this.ROUTES.BUSINESSES}/${id}`).pipe(
            take(1),
            map((response: Business) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o negócio! - ${error.message}`
                )
            )
        );
    }

    public update(body: UpdateBusiness, id: number): Observable<Business> {
        return this.http.put<Business>(`${environment.URL}/${this.ROUTES.BUSINESSES}/${id}`, body).pipe(
            take(1),
            map((response: Business) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o negócio! - ${error.message}`
                )
            )
        );
    }

    public delete(id: number): Observable<DeleteBusiness> {
        return this.http
            .delete<DeleteBusiness>(`${environment.URL}/${this.ROUTES.BUSINESSES}/${id}`)
            .pipe(
                take(1),
                map((response: DeleteBusiness) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao deletar o negócio! - ${error.message}`
                    )
                )
            );
    }

    public get status(): string[] {
        return this._status;
    }

}

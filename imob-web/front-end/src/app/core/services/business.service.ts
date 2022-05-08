import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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

    public amount(month: string): Observable<AmountBusiness> {
        return this.http.get<AmountBusiness>(`${environment.URL}/${this.ROUTES.AMOUNT}`, {
            params: {
                month
            }
        }).pipe(
            take(1),
            map((response: AmountBusiness) => {
                response.totalAmountBusinesses = (response.totalAmountBusinesses) > 0 ? response.totalAmountBusinesses : 0;
                response.totalAmountClosed = (response.totalAmountClosed) > 0 ? response.totalAmountClosed : 0;
                response.totalAmountProposal = (response.totalAmountProposal) > 0 ? response.totalAmountProposal : 0;
                response.totalAmountProspecting = (response.totalAmountProspecting) > 0 ? response.totalAmountProspecting : 0;
                response.totalAmountRejected = (response.totalAmountRejected) > 0 ? response.totalAmountRejected : 0;
                response.totalAmountVisit = (response.totalAmountVisit) > 0 ? response.totalAmountVisit : 0;

                return response;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao buscar a quantidade total de negócios!`
                );
            })
        );
    }

    public transferManager(id: number, body: any): Observable<TransferManager> {
        return this.http
            .put<TransferManager>(`${environment.URL}/${this.ROUTES.TRANSFER_MANAGER}/${id}`, body)
            .pipe(
                take(1),
                map((response: TransferManager) => response),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && error.statusText === 'Unauthorized') {
                        return this._alertService.openSnackBar(
                            `${error.error.message}`
                        );
                    }

                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao transferir um negócio para um gestor!`
                    );
                })
            );
    }

    public transferAdvisor(id: number, body: any): Observable<TransferAdvisor> {
        return this.http
            .put<TransferAdvisor>(`${environment.URL}/${this.ROUTES.TRANSFER_ADVISOR}/${id}`, body)
            .pipe(
                take(1),
                map((response: TransferAdvisor) => response),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && error.statusText === 'Unauthorized') {
                        return this._alertService.openSnackBar(
                            `${error.error.message}`
                        );
                    }

                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao transferir um negócio para um despachante!`
                    );
                })
            );
    }

    public transferBroker(id: number, body: any): Observable<TransferBroker> {
        return this.http
            .put<TransferBroker>(`${environment.URL}/${this.ROUTES.TRANSFER_BROKER}/${id}`, body)
            .pipe(
                take(1),
                map((response: TransferBroker) => response),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && error.statusText === 'Unauthorized') {
                        return this._alertService.openSnackBar(
                            `${error.error.message}`
                        );
                    }

                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao transferir um negócio para um corretor!`
                    );
                })
            );
    }

    public reject(id: number, body: any): Observable<RejectBusiness> {
        return this.http
            .put<RejectBusiness>(`${environment.URL}/${this.ROUTES.REJECT_BUSINESS}/${id}`, body)
            .pipe(
                take(1),
                map((response: RejectBusiness) => response),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && error.statusText === 'Unauthorized') {
                        return this._alertService.openSnackBar(
                            `${error.error.message}`
                        );
                    }

                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao rejetiar um negócio!`
                    );
                })
            );
    }

    public close(id: number, body: any): Observable<CloseBusiness> {
        return this.http
            .put<CloseBusiness>(`${environment.URL}/${this.ROUTES.CLOSE_BUSINESS}/${id}`, body)
            .pipe(
                take(1),
                map((response: CloseBusiness) => response),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && error.statusText === 'Unauthorized') {
                        return this._alertService.openSnackBar(
                            `${error.error.message}`
                        );
                    }

                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao fechar um negócio!`
                    );
                })
            );
    }

    public upload(file: File, id: number): Observable<any> {
        const formData = new FormData();

        formData.append('file', file, file.name);

        return this.http.post<any>(`${environment.URL}/${this.ROUTES.UPLOAD}`, formData, {
            params: {
                id: id
            }
        }).pipe(
            map((response: any) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao realizar o upload do arquivo!`
                );
            })
        );
    }

    public download(path: string): Observable<ArrayBuffer> {
        return this.http.get(`${environment.URL}/${this.ROUTES.DOWNLOAD}`, {
            responseType: 'arraybuffer',
            params: {
                path
            }
        }).pipe(
            map((response: ArrayBuffer) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao realizar o download do arquivo!`
                );
            })
        );
    }

    public index(): Observable<Business[]> {
        return this.http.get<Business[]>(`${environment.URL}/${this.ROUTES.BUSINESSES}`).pipe(
            take(1),
            map((response: Business[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os negócios!`
                );
            })
        );
    }

    public create(body: CreateBusiness): Observable<Business> {
        return this.http.post<Business>(`${environment.URL}/${this.ROUTES.BUSINESSES}`, body).pipe(
            take(1),
            map((response: Business) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar o negócio!`
                );
            })
        );
    }

    public read(id: number): Observable<Business | undefined> {
        return this.http.get<Business>(`${environment.URL}/${this.ROUTES.BUSINESSES}/${id}`).pipe(
            take(1),
            map((response: Business) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o negócio!`
                );
            })
        );
    }

    public update(body: UpdateBusiness, id: number): Observable<Business> {
        return this.http.put<Business>(`${environment.URL}/${this.ROUTES.BUSINESSES}/${id}`, body).pipe(
            take(1),
            map((response: Business) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o negócio!`
                );
            })
        );
    }

    public delete(id: number): Observable<DeleteBusiness> {
        return this.http
            .delete<DeleteBusiness>(`${environment.URL}/${this.ROUTES.BUSINESSES}/${id}`)
            .pipe(
                take(1),
                map((response: DeleteBusiness) => response),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && error.statusText === 'Unauthorized') {
                        return this._alertService.openSnackBar(
                            `${error.error.message}`
                        );
                    }

                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao deletar o negócio!`
                    );
                })
            );
    }

    public get status(): string[] {
        return this._status;
    }

}

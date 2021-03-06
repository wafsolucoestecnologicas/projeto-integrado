import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Company, CreateCompany, UpdateCompany, DeleteCompany } from '../interfaces/company.interface';
import { CompanyRoutes } from '../enums/company.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    private ROUTES: typeof CompanyRoutes;

    constructor(
        private readonly http: HttpClient,
        private readonly _alertService: AlertService
    ) {
        this.ROUTES = CompanyRoutes;
    }

    public index(): Observable<Company[]> {
        return this.http.get<Company[]>(`${environment.URL}/${this.ROUTES.COMPANIES}`).pipe(
            take(1),
            map((response: Company[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar as imobiliárias!`
                );
            })
        );
    }

    public create(body: CreateCompany): Observable<Company> {
        return this.http.post<Company>(`${environment.URL}/${this.ROUTES.COMPANIES}`, body).pipe(
            take(1),
            map((response: Company) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar a imobiliária!`
                );
            })
        );
    }

    public read(id: number): Observable<Company> {
        return this.http.get<Company>(`${environment.URL}/${this.ROUTES.COMPANIES}/${id}`).pipe(
            take(1),
            map((response: Company) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar a imobiliária!`
                );
            })
        );
    }

    public update(body: UpdateCompany, id: number): Observable<Company> {
        return this.http.put<Company[]>(`${environment.URL}/${this.ROUTES.COMPANIES}/${id}`, body).pipe(
            take(1),
            map((response: Company[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar a imobiliária!`
                );
            })
        );
    }

    public delete(id: number): Observable<DeleteCompany> {
        return this.http.delete<DeleteCompany>(`${environment.URL}/${this.ROUTES.COMPANIES}/${id}`).pipe(
            take(1),
            map((response: DeleteCompany) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar a imobiliária!`
                );
            })
        );
    }
    
}

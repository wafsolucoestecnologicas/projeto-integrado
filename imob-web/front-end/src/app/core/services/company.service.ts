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
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar as imobiliárias! - ${error.statusText}`
                )
            )
        );
    }

    public create(body: CreateCompany): Observable<Company> {
        return this.http.post<Company>(`${environment.URL}/${this.ROUTES.COMPANIES}`, body).pipe(
            take(1),
            map((response: Company) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar a imobiliária! - ${error.statusText}`
                )
            )
        );
    }

    public read(id: number): Observable<Company> {
        return this.http.get<Company>(`${environment.URL}/${this.ROUTES.COMPANIES}/${id}`).pipe(
            take(1),
            map((response: Company) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar a imobiliária! - ${error.statusText}`
                )
            )
        );
    }

    public update(body: UpdateCompany, id: number): Observable<Company> {
        return this.http.put<Company[]>(`${environment.URL}/${this.ROUTES.COMPANIES}/${id}`, body).pipe(
            take(1),
            map((response: Company[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar a imobiliária! - ${error.statusText}`
                )
            )
        );
    }

    public delete(id: number): Observable<DeleteCompany> {
        return this.http.delete<DeleteCompany>(`${environment.URL}/${this.ROUTES.COMPANIES}/${id}`).pipe(
            take(1),
            map((response: DeleteCompany) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar a imobiliária! - ${error.statusText}`
                )
            )
        );
    }
    
}

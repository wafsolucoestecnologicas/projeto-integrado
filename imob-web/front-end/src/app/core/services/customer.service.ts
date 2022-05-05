import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Customer, CreateCustomer, UpdateCustomer, DeleteCustomer } from '../interfaces/customer.interface';
import { CustomerRoutes } from '../enums/customer.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    private ROUTES: typeof CustomerRoutes;

    constructor(
        private readonly http: HttpClient,
        private readonly _alertService: AlertService
    ) {
        this.ROUTES = CustomerRoutes;
    }

    public index(): Observable<Customer[]> {
        return this.http.get<Customer[]>(`${environment.URL}/${this.ROUTES.CUSTOMERS}`).pipe(
            take(1),
            map((response: Customer[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os clientes!`
                );
            })
        );
    }

    public create(body: CreateCustomer): Observable<Customer> {
        return this.http.post<Customer>(`${environment.URL}/${this.ROUTES.CUSTOMERS}`, body).pipe(
            take(1),
            map((response: Customer) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar o cliente!`
                );
            })
        );
    }

    public read(id: number): Observable<Customer> {
        return this.http.get<Customer>(`${environment.URL}/${this.ROUTES.CUSTOMERS}/${id}`).pipe(
            take(1),
            map((response: Customer) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o cliente!`
                );
            })
        );
    }

    public update(body: UpdateCustomer, id: number): Observable<Customer> {
        return this.http.put<Customer[]>(`${environment.URL}/${this.ROUTES.CUSTOMERS}/${id}`, body).pipe(
            take(1),
            map((response: Customer[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o cliente!`
                );
            })
        );
    }

    public delete(id: number): Observable<DeleteCustomer> {
        return this.http
            .delete<DeleteCustomer>(`${environment.URL}/${this.ROUTES.CUSTOMERS}/${id}`)
            .pipe(
                take(1),
                map((response: DeleteCustomer) => response),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && error.statusText === 'Unauthorized') {
                        return this._alertService.openSnackBar(
                            `${error.error.message}`
                        );
                    }

                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao deletar o cliente!`
                    );
                })
            );
    }
    
}

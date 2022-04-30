import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Address, CreateAddress, UpdateAddress, DeleteAddress, ResponseViaCEPModel } from '../interfaces/address.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddressRoutes } from '../enums/address.enum';

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    private ROUTES: typeof AddressRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
        this.ROUTES = AddressRoutes;
    }

	public search(CEP: string): Observable<ResponseViaCEPModel> {
        return this.http.get<ResponseViaCEPModel>(`${environment.URL}/${this.ROUTES.SEARCH}`, {
			params: {
				CEP
			}
		}).pipe(
            take(1),
            map((response: ResponseViaCEPModel) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao buscar o endereço do CEP!`
                )
            )
        );
    }

    public index(): Observable<Address[]> {
        return this.http.get<Address[]>(`${environment.URL}/${this.ROUTES.ADRESSES}`).pipe(
            take(1),
            map((response: Address[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os endereços!`
                )
            )
        );
    }

    public create(body: CreateAddress): Observable<Address> {
        return this.http.post<Address>(`${environment.URL}/${this.ROUTES.ADRESSES}`, body).pipe(
            take(1),
            map((response: Address) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar um endereço!`
                )
            )
        );
    }

    public read(id: number): Observable<Address | undefined> {
        return this.http.get<Address>(`${environment.URL}/${this.ROUTES.ADRESSES}/${id}`).pipe(
            take(1),
            map((response: Address) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o endereço!`
                )
            )
        );
    }

    public update(body: UpdateAddress, id: number): Observable<Address> {
        return this.http.put<Address>(`${environment.URL}/${this.ROUTES.ADRESSES}/${id}`, body).pipe(
            take(1),
            map((response: Address) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o endereço!`
                )
            )
        );
    }

    public delete(id: number): Observable<DeleteAddress> {
        return this.http.delete<DeleteAddress>(`${environment.URL}/${this.ROUTES.ADRESSES}/${id}`).pipe(
            take(1),
            map((response: DeleteAddress) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar o endereço!`
                )
            )
        );
    }

}

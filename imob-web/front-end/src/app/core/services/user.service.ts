import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { API } from '../classes/api';
import { User, CreateUser, DeleteUser } from '../interfaces/user.interface';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class UserService extends API {

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
        super();

        this.buildHeader();
    }

    public index(): Observable<User[]> {
        return this.http
            .get<User[]>(`${environment.URL}/users`, {
                headers: this.getterHeader
            })
            .pipe(
                take(1),
                map((response: User[]) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao listar os usuários! - ${error.statusText}`
                    )
                )
            );
    }

    public create(body: CreateUser): Observable<User> {
        return this.http
            .post<User>(`${environment.URL}/users`, body, {
                headers: this.getterHeader
            })
            .pipe(
                take(1),
                map((response: User) => {
                    this._alertService.openSnackBar(
                        `Usuário ${response.name} ${response.surname} criado com sucesso!`
                    );

                    return response;
                }),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao criar o usuário! - ${error.statusText}`
                    )
                )
            );
    }

    public read(id: number): Observable<User | undefined> {
		return this.http
            .get<User>(`${environment.URL}/users/${id}`, {
                headers: this.getterHeader
            })
            .pipe(
                take(1),
                map((response: User) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao listar o usuário! - ${error.statusText}`
                    )
                )
            );
	}

    public update(id: number): Observable<User> {
		return this.http
            .put<User>(`${environment.URL}/users/${id}`, {
                headers: this.getterHeader
            })
            .pipe(
                take(1),
                map((response: User) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao atualizar o usuário! - ${error.statusText}`
                    )
                )
            );
	}

    public delete(id: number): Observable<DeleteUser> {
		return this.http
            .delete<DeleteUser>(`${environment.URL}/users/${id}`, {
                headers: this.getterHeader
            })
            .pipe(
                take(1),
                map((response: DeleteUser) => response),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao listar os usuários! - ${error.statusText}`
                    )
                )
            );
	}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User, CreateUser, UpdateUser, DeleteUser } from '../interfaces/user.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { UserRoutes } from '../enums/user.enum';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private ROUTES: typeof UserRoutes;

    constructor(
        private readonly http: HttpClient,
        private readonly _alertService: AlertService
    ) {
        this.ROUTES = UserRoutes;
    }

    public index(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.URL}/${this.ROUTES.USERS}`).pipe(
            take(1),
            map((response: User[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os usuários!`
                );
            })
        );
    }

    public create(body: CreateUser): Observable<User> {
        return this.http.post<User>(`${environment.URL}/${this.ROUTES.USERS}`, body).pipe(
            take(1),
            map((response: User) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar o usuário!`
                );
            })
        );
    }

    public read(id: number): Observable<User | undefined> {
        return this.http.get<User>(`${environment.URL}/${this.ROUTES.USERS}/${id}`).pipe(
            take(1),
            map((response: User) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o usuário!`
                );
            })
        );
    }

    public update(body: UpdateUser, id: number): Observable<User> {
        return this.http.put<User>(`${environment.URL}/${this.ROUTES.USERS}/${id}`, body).pipe(
            take(1),
            map((response: User) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o usuário!`
                );
            })
        );
    }

    public delete(id: number): Observable<DeleteUser> {
        return this.http.delete<DeleteUser>(`${environment.URL}/${this.ROUTES.USERS}/${id}`).pipe(
            take(1),
            map((response: DeleteUser) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar o usuário!`
                )
            })
        );
    }
    
}

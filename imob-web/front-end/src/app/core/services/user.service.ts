import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User, CreateUser, UpdateUser, DeleteUser } from '../interfaces/user.interface';
import { UserRoutes } from '../enums/user.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

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
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os usuários! - ${error.statusText}`
                )
            )
        );
    }

    public create(body: CreateUser): Observable<User> {
        return this.http.post<User>(`${environment.URL}/${this.ROUTES.USERS}`, body).pipe(
            take(1),
            map((response: User) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar o usuário! - ${error.statusText}`
                )
            )
        );
    }

    public read(id: number): Observable<User | undefined> {
        return this.http.get<User>(`${environment.URL}/${this.ROUTES.USERS}/${id}`).pipe(
            take(1),
            map((response: User) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o usuário! - ${error.statusText}`
                )
            )
        );
    }

    public update(body: UpdateUser, id: number): Observable<User> {
        return this.http.put<User>(`${environment.URL}/${this.ROUTES.USERS}/${id}`, body).pipe(
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
        return this.http.delete<DeleteUser>(`${environment.URL}/${this.ROUTES.USERS}/${id}`).pipe(
            take(1),
            map((response: DeleteUser) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar o usuário! - ${error.statusText}`
                )
            )
        );
    }
    
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { API } from '../classes/api';
import { User } from '../interfaces/user.interface';
import { Company } from '../interfaces/company.interface';
import { Profile } from '../interfaces/profile.interface';
import { Administrator } from '../interfaces/administrator.interface';
import { Manager } from '../interfaces/manager.interface';
import { Advisor } from '../interfaces/advisor.interface';
import { Broker } from '../interfaces/broker.interface';
import { Secretary } from '../interfaces/secretary.interface';
import { Authentication } from '../interfaces/authentication.interface';
import { AuthenticationRoutes } from '../enums/authentication.enum';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService extends API {

    private user: User | null;
    private company: Company | null;
    private profile: Profile | null;
    private administrator: Administrator | null;
    private manager: Manager | null;
    private advisor: Advisor | null;
    private broker: Broker | null;
    private secretary: Secretary | null;
    public loggedIn: boolean;
    public ROUTES: typeof AuthenticationRoutes;

    constructor(
        private readonly http: HttpClient,
        private readonly _localStorageService: LocalStorageService,
        private readonly _alertService: AlertService
    ) {
        super();

        this.buildHeader();
        this.loggedIn = false;
        this.ROUTES = AuthenticationRoutes;
    }

    public login(body: any): Observable<Authentication> {
        return this.http
            .post<Authentication>(`${environment.URL}/${this.ROUTES.AUTHENTICATION}`, body, {
                headers: this.getterHeader
            })
            .pipe(
                take(1),
                map((response: Authentication) => {
                    this.data = response;
                    this.loggedIn = true;
                    this._localStorageService.setItem('token', response.token);

                    this._alertService.openSnackBar(
                        `Usuário ${response.user.name} ${response.user.surname} logado com sucesso!`
                    );

                    return response;
                }),
                catchError((error: HttpErrorResponse) =>
                    this._alertService.openSnackBar(
                        `Ocorreu um erro ao realizar o login! - ${error.statusText}`
                    )
                )
            );
    }

    public logout(): void {
        this.user = null;
        this.company = null;
        this.profile = null;
        this.administrator = null;
        this.manager = null;
        this.advisor = null;
        this.broker = null;
        this.secretary = null;
        this.loggedIn = false;
        this._localStorageService.removeItem('token');
    }

    private set data(data: Authentication) {
        this.user = data.user;
        this.company = data.company;
        this.profile = data.profile;
        this.administrator = data.administrator ? data.administrator : null;
        this.manager = data.manager ? data.manager : null;
        this.advisor = data.advisor ? data.advisor : null;
        this.broker = data.broker ? data.broker : null;
        this.secretary = data.secretary ? data.secretary : null;
    }

    public get getterUser(): User | null {
        return this.user;
    }

    public get getterCompany(): Company | null {
        return this.company;
    }

    public get getterProfile(): Profile | null {
        return this.profile;
    }

    public get getterAdministrator(): Administrator | null {
        return this.administrator;
    }

    public get getterManager(): Manager | null {
        return this.manager;
    }

    public get getterAdvisor(): Advisor | null {
        return this.advisor;
    }

    public get getterBroker(): Broker | null {
        return this.broker;
    }

    public get getterSecretary(): Secretary | null {
        return this.secretary;
    }

}

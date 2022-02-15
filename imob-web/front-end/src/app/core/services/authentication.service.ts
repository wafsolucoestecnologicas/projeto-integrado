import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';

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
import { AlertService } from 'src/app/shared/services/alert.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService extends API {

    private user: User;
    private company: Company;
    private profile: Profile;
    private administrator: Administrator | null;
    private manager: Manager | null;
    private advisor: Advisor | null;
    private broker: Broker | null;
    private secretary: Secretary | null;
    public ROUTES: typeof AuthenticationRoutes;

    constructor(
        private readonly http: HttpClient,
        private readonly _alertService: AlertService
    ) {
        super();

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
                    this.setterToken = response.token;

                    this._alertService.openSnackBar(
                        `${response.user.name} ${response.user.surname} logado com sucesso!`
                    );

                    return response.user;
                }),
                catchError((error: HttpErrorResponse) => {
                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao realizar o login! - ${error.statusText}`
                    );
                })
            );
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

    public get getterUser(): User {
        return this.user;
    }

    public get getterCompany(): Company {
        return this.company;
    }

    public get getterProfile(): Profile {
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

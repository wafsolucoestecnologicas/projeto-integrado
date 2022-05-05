import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
export class AuthenticationService {

    private _user: User | null;
    private _company: Company | null;
    private _profile: Profile | null;
    private _administrator: Administrator | null;
    private _manager: Manager | null;
    private _advisor: Advisor | null;
    private _broker: Broker | null;
    private _secretary: Secretary | null;
    private ROUTES: typeof AuthenticationRoutes;
    public loggedIn: boolean;

    constructor(
        private readonly http: HttpClient,
        private readonly _localStorageService: LocalStorageService,
        private readonly _alertService: AlertService
    ) {
        this.ROUTES = AuthenticationRoutes;
        this.loggedIn = false;
    }

    public login(body: any): Observable<Authentication> {
        return this.http
            .post<Authentication>(`${environment.URL}/${this.ROUTES.AUTHENTICATION}`, body)
            .pipe(
                take(1),
                map((response: Authentication) => {
                    this.user = response.user;
                    this.company = response.company;
                    this.profile = response.profile;
                    this.administrator = response.administrator ? response.administrator : null;
                    this.manager = response.manager ? response.manager : null;
                    this.advisor = response.advisor ? response.advisor : null;
                    this.broker = response.broker ? response.broker : null;
                    this.secretary = response.secretary ? response.secretary : null;
                    this.loggedIn = true;

                    this._localStorageService.setItem('user', response.user);
                    this._localStorageService.setItem('company', response.company);
                    this._localStorageService.setItem('profile', response.profile);
                    this._localStorageService.setItem('token', response.token);

                    if (this.administrator) this._localStorageService.setItem('administrator', response.administrator);
                    if (this.manager) this._localStorageService.setItem('manager', response.manager);
                    if (this.advisor) this._localStorageService.setItem('advisor', response.advisor);
                    if (this.broker) this._localStorageService.setItem('broker', response.broker);
                    if (this.secretary) this._localStorageService.setItem('secretary', response.secretary);
                    
                    return response;
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401 && error.statusText === 'Unauthorized') {
                        return this._alertService.openSnackBar(
                            `${error.error.message}`
                        );
                    }

                    return this._alertService.openSnackBar(
                        `Ocorreu um erro ao realizar o login!`
                    );
                })
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

        this._localStorageService.clear();
    }

    public get user(): User | null {
        return this._user;
    }

    public set user(user: User | null) {
        this._user = user;
    }

    public get company(): Company | null {
        return this._company;
    }

    public set company(company: Company | null) {
        this._company = company;
    }

    public get profile(): Profile | null {
        return this._profile;
    }

    public set profile(profile: Profile | null) {
        this._profile = profile;
    }

    public get administrator(): Administrator | null {
        return this._administrator;
    }

    public set administrator(administrator: Administrator | null) {
        this._administrator = administrator;
    }

    public get manager(): Manager | null {
        return this._manager;
    }

    public set manager(manager: Manager | null) {
        this._manager = manager;
    }

    public get advisor(): Advisor | null {
        return this._advisor;
    }

    public set advisor(advisor: Advisor | null) {
        this._advisor = advisor;
    }

    public get broker(): Broker | null {
        return this._broker;
    }

    public set broker(broker: Broker | null) {
        this._broker = broker;
    }

    public get secretary(): Secretary | null {
        return this._secretary;
    }

    public set secretary(secretary: Secretary | null) {
        this._secretary = secretary;
    }

}

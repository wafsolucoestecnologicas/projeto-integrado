import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private readonly _router: Router,
        private readonly _alertService: AlertService,
        private readonly _authenticationService: AuthenticationService,
        private readonly _localStorageService: LocalStorageService
    ) {}

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (this._authenticationService.loggedIn) {
            return true;
        } else if (this._localStorageService.getItem('user')) {
            this._authenticationService.user = this._localStorageService.getItem('user');
            this._authenticationService.company = this._localStorageService.getItem('company');
            this._authenticationService.profile = this._localStorageService.getItem('profile');
            this._authenticationService.administrator = this._localStorageService.getItem('administrator');
            this._authenticationService.manager = this._localStorageService.getItem('manager');
            this._authenticationService.advisor = this._localStorageService.getItem('advisor');
            this._authenticationService.broker = this._localStorageService.getItem('broker');
            this._authenticationService.secretary = this._localStorageService.getItem('secretary');
            this._authenticationService.loggedIn = true;

            return true;
        } else {
            this._alertService.openSnackBar('É necessário realizar o login na aplicação!');
            this._router.navigate(['/login']);

            return false;
        }
        
    }
    
}

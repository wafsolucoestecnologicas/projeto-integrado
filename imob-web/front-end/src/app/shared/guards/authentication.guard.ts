import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlertService } from '../services/alert.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    private loggedIn: boolean;

    constructor(
        private readonly _router: Router,
        private readonly _alertService: AlertService,
        private readonly _authenticationService: AuthenticationService
    ) {
        this.loggedIn = false;
    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        this.loggedIn = this._authenticationService.loggedIn;

        if (this.loggedIn) {
            return true;
        } else {
            this._alertService.openSnackBar('É necessário realizar o login na aplicação!');
            this._router.navigate(['/login']);

            return false;
        }
        
    }
    
}

import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileGuard implements CanActivateChild {

    constructor() {}

    public canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
		/** Implementar método para verificar o perfil de usuário utilizando o localstorage */
        return true;
    }

}

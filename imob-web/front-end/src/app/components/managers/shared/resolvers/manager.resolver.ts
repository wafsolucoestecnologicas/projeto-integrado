import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Manager } from 'src/app/core/interfaces/manager.interface';
import { ManagerService } from 'src/app/core/services/manager.service';

@Injectable()
export class ManagerResolver implements Resolve<Manager | undefined | null> {

    constructor(
		private readonly _managerService: ManagerService
	) {}

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Manager | undefined> | null {
        if (route.params['id']) return this._managerService.read(route.params['id']);

        return null;
    }
	
}

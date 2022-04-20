import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Business } from 'src/app/core/interfaces/business.interface';
import { BusinessService } from 'src/app/core/services/business.service';

@Injectable()
export class BusinessResolver implements Resolve<Business | undefined | null> {

	constructor(
		private readonly _businessService: BusinessService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Business | undefined> | null {
        if (route.params['id']) return this._businessService.read(route.params['id']);

		return null;
    }
	
}

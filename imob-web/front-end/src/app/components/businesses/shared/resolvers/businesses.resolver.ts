import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Business } from 'src/app/core/interfaces/business.interface';
import { BusinessService } from 'src/app/core/services/business.service';

@Injectable()
export class BusinessesResolver implements Resolve<Business[]> {

	constructor(
		private readonly _businessService: BusinessService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Business[]> {
        return this._businessService.index();
    }

}

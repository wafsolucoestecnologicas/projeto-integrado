import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Owner } from 'src/app/core/interfaces/owner.interface';
import { OwnerService } from 'src/app/core/services/owner.service';

@Injectable()
export class OwnersResolver implements Resolve<Owner[]> {

	constructor(
		private readonly _ownerService: OwnerService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Owner[]> {
        return this._ownerService.index();
    }
	
}

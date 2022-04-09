import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Lead } from 'src/app/core/interfaces/lead.interface';
import { LeadService } from 'src/app/core/services/lead.service';

@Injectable()
export class LeadResolver implements Resolve<Lead | undefined | null> {

	constructor(
		private readonly _leadService: LeadService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Lead | undefined> | null {
		if (route.params['id']) return this._leadService.read(route.params['id']);

		return null;
    }
	
}

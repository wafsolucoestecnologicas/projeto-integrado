import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Lead } from 'src/app/core/interfaces/lead.interface';
import { LeadService } from 'src/app/core/services/lead.service';

@Injectable()
export class LeadsResolver implements Resolve<Lead[]> {

	constructor(
		private readonly _leadService: LeadService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Lead[]> {
        return this._leadService.index();
    }

}

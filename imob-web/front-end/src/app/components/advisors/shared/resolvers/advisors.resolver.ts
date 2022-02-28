import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Advisor } from 'src/app/core/interfaces/advisor.interface';
import { AdvisorService } from 'src/app/core/services/advisor.service';

@Injectable()
export class AdvisorsResolver implements Resolve<Advisor[]> {

	constructor(
		private readonly _advisorService: AdvisorService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Advisor[]> {
        return this._advisorService.index();
    }
	
}

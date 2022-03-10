import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Company } from 'src/app/core/interfaces/company.interface';
import { CompanyService } from 'src/app/core/services/company.service';

@Injectable()
export class CompaniesResolver implements Resolve<Company[]> {

	constructor(
		private readonly _companieService: CompanyService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Company[]> {
        return this._companieService.index();
    }

}

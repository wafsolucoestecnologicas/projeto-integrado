import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Company } from 'src/app/core/interfaces/company.interface';
import { CompanyService } from 'src/app/core/services/company.service';

@Injectable()
export class CompanyResolver implements Resolve<Company | undefined | null> {

	constructor(
		private readonly _companyService: CompanyService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Company | undefined> | null {
        if (route.params['id']) return this._companyService.read(route.params['id']);

		return null;
    }

}

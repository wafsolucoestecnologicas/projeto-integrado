import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CommissionPayable } from 'src/app/core/interfaces/commission-payable.interface';
import { CommissionPayableService } from 'src/app/core/services/commission-payable.service';

@Injectable()
export class CommissionsPayableResolver implements Resolve<CommissionPayable[]> {

	constructor(
		private readonly _commissionsPayableService: CommissionPayableService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<CommissionPayable[]> {
        return this._commissionsPayableService.index();
    }

}

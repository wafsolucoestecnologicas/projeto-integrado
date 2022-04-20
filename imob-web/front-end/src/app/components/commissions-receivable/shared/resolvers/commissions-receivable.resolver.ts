import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CommissionReceivable } from 'src/app/core/interfaces/commission-receivable.interface';
import { CommissionReceivableService } from 'src/app/core/services/commission-receivable.service';

@Injectable()
export class CommissionsReceivableResolver implements Resolve<CommissionReceivable[]> {

	constructor(
		private readonly _commissionReceivableService: CommissionReceivableService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<CommissionReceivable[]> {
        return this._commissionReceivableService.index();
    }
	
}

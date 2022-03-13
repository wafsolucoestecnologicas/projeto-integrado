import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Broker } from 'src/app/core/interfaces/broker.interface';
import { BrokerService } from 'src/app/core/services/broker.service';

@Injectable()
export class BrokerResolver implements Resolve<Broker | undefined | null> {

	constructor(
		private readonly _brokerService: BrokerService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Broker | undefined> | null {
		if (route.params['id']) return this._brokerService.read(route.params['id']);

        return null;
    }

}

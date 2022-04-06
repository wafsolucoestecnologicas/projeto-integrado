import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Neighborhood } from 'src/app/core/interfaces/neighborhood.interface';
import { NeighborhoodService } from 'src/app/core/services/neighborhood.service';

@Injectable()
export class NeighborhoodsResolver implements Resolve<Neighborhood[]> {

	constructor(
		private readonly _neighborhoodService: NeighborhoodService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Neighborhood[]> {
        return this._neighborhoodService.index();
    }
	
}

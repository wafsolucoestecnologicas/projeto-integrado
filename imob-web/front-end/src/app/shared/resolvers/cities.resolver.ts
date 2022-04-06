import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { City } from 'src/app/core/interfaces/city.interface';
import { CityService } from 'src/app/core/services/city.service';

@Injectable()
export class CitiesResolver implements Resolve<City[]> {

	constructor(
		private readonly _cityService: CityService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<City[]> {
        return this._cityService.index();
    }
	
}

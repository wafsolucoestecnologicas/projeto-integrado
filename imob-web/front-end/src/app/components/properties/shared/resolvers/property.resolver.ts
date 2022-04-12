import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Property } from 'src/app/core/interfaces/property.interface';
import { PropertyService } from 'src/app/core/services/property.service';

@Injectable()
export class PropertyResolver implements Resolve<Property | undefined | null> {

	constructor(
		private readonly _propertyService: PropertyService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Property | undefined> | null {
        if (route.params['id']) return this._propertyService.read(route.params['id']);

		return null;
    }

}

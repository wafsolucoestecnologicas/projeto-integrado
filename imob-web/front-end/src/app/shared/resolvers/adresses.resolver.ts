import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Address } from 'src/app/core/interfaces/address.interface';
import { AddressService } from 'src/app/core/services/address.service';

@Injectable()
export class AdressesResolver implements Resolve<Address[]> {

	constructor(
		private readonly _addressService: AddressService
	) { }

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Address[]> {
        return this._addressService.index();
    }

}

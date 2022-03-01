import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Customer } from 'src/app/core/interfaces/customer.interface';
import { CustomerService } from 'src/app/core/services/customer.service';

@Injectable()
export class CustomersResolver implements Resolve<Customer[]> {

	constructor(
		private readonly _customerService: CustomerService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Customer[]> {
        return this._customerService.index();
    }

}

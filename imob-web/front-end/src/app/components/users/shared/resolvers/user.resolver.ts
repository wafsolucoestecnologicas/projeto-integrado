import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Injectable()
export class UserResolver implements Resolve<User | undefined | null> {

	constructor(
		private readonly _userService: UserService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<User | undefined> | null {
		if (route.params['id']) return this._userService.read(route.params['id']);

		return null;
    }
	
}

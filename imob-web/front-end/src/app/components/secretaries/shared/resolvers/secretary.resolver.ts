import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Secretary } from 'src/app/core/interfaces/secretary.interface';
import { SecretaryService } from 'src/app/core/services/secretary.service';

@Injectable()
export class SecretaryResolver implements Resolve<Secretary | undefined | null> {

	constructor(
		private readonly _secretaryService: SecretaryService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Secretary | undefined> | null {
		if (route.params['id']) return this._secretaryService.read(route.params['id']);

        return null;
    }
	
}

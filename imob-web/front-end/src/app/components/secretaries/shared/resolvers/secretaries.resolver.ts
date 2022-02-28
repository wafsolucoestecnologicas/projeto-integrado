import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Secretary } from 'src/app/core/interfaces/secretary.interface';
import { SecretaryService } from 'src/app/core/services/secretary.service';

@Injectable()
export class SecretariesResolver implements Resolve<Secretary[]> {

	constructor(
		private readonly _secretaryService: SecretaryService
	) {}

    public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Secretary[]> {
        return this._secretaryService.index();
    }
	
}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor(
		private readonly _localStorageService: LocalStorageService
	) {}
	
    private createHeader(): HttpHeaders {
		let header: HttpHeaders = new HttpHeaders();
		
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        header = header.set('Accept', 'application/json');
        header = header.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Access-Token');
        header = header.set('Access-Control-Allow-Origin', `${environment.ORIGIN}`);
        header = header.set('Access-Control-Allow-Credentials', 'true');
		
		const token: string | null = this._localStorageService.getItem('token');

        if (token) header = header.set('Authorization', `Bearer ${token}`);

        return header;
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            headers: this.createHeader()
        });

        return next.handle(request);
    }
	
}

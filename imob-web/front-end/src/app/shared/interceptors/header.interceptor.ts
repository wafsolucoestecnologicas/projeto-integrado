import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    constructor(
		private readonly _localStorageService: LocalStorageService,
        private readonly _loaderService: LoaderService
	) {}
	
    private createHeader(): HttpHeaders {
		let header: HttpHeaders = new HttpHeaders();
		
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        header = header.set('Accept', 'application/json');
        header = header.set('Access-Control-Allow-Origin', `${environment.ORIGIN}`);
		
		const token: string | null = this._localStorageService.getItem('token');

        if (token) header = header.set('Authorization', `Bearer ${token}`);

        this._loaderService.start();

        return header;
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            headers: this.createHeader()
        });

        return next.handle(request).pipe(
            tap((event: any) => {
                if (event instanceof HttpResponse) {
                    this._loaderService.end();
                }
            }, (error: HttpErrorResponse) => {
                this._loaderService.reset();

                throw error;
            })
        );
    }
	
}

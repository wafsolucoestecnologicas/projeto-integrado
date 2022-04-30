import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Broker, UpdateBroker } from '../interfaces/broker.interface';
import { BrokerRoutes } from '../enums/broker.enum';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
    providedIn: 'root'
})
export class BrokerService {

    private ROUTES: typeof BrokerRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
        this.ROUTES = BrokerRoutes;
    }

    public index(): Observable<Broker[]> {
        return this.http.get<Broker[]>(`${environment.URL}/${this.ROUTES.BROKERS}`).pipe(
            take(1),
            map((response: Broker[]) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os corretores!`
                )
            )
        );
    }

    public read(id: number): Observable<Broker> {
        return this.http.get<Broker>(`${environment.URL}/${this.ROUTES.BROKERS}/${id}`).pipe(
            take(1),
            map((response: Broker) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o corretor!`
                )
            )
        );
    }

    public update(body: UpdateBroker, id: number): Observable<Broker> {
        return this.http.put<Broker>(`${environment.URL}/${this.ROUTES.BROKERS}/${id}`, body).pipe(
            take(1),
            map((response: Broker) => response),
            catchError((error: HttpErrorResponse) =>
                this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o corretor!`
                )
            )
        );
    }
	
}

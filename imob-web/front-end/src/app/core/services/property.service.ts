import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { take, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Property, CreateProperty, UpdateProperty, DeleteProperty } from '../interfaces/property.interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PropertyRoutes } from '../enums/property.enum';

@Injectable({
    providedIn: 'root'
})
export class PropertyService {

	private ROUTES: typeof PropertyRoutes;

    constructor(
		private readonly http: HttpClient,
		private readonly _alertService: AlertService
	) {
		this.ROUTES = PropertyRoutes;
	}

    public upload(files: Set<File>, id: number): Observable<any> {
        const formData = new FormData();

        files.forEach((file: File) => {
            formData.append('files', file, file.name);
        });

        return this.http.post<any>(`${environment.URL}/${this.ROUTES.UPLOAD}`, formData, {
            params: {
                id: id
            }
        }).pipe(
            map((response: any) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao realizar o upload do arquivo!`
                );
            })
        );
    }

    public download(path: string): Observable<ArrayBuffer> {
        return this.http.get(`${environment.URL}/${this.ROUTES.DOWNLOAD}`, {
            responseType: 'arraybuffer',
            params: {
                path
            }
        }).pipe(
            map((response: ArrayBuffer) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao realizar o download do arquivo!`
                );
            })
        );
    }

    public sale(CNPJ: string): Observable<Property[]> {
        return this.http.get<Property[]>(`${environment.URL}/${this.ROUTES.PROPERTIES}/${CNPJ}/sale`).pipe(
            take(1),
            map((response: Property[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os im??veis!`
                );
            })
        );
    }

	public index(): Observable<Property[]> {
        return this.http.get<Property[]>(`${environment.URL}/${this.ROUTES.PROPERTIES}`).pipe(
            take(1),
            map((response: Property[]) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar os im??veis!`
                );
            })
        );
    }

	public create(body: CreateProperty): Observable<Property> {
        return this.http.post<Property>(`${environment.URL}/${this.ROUTES.PROPERTIES}`, body).pipe(
            take(1),
            map((response: Property) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao criar o im??vel!`
                );
            })
        );
    }

    public read(id: number): Observable<Property | undefined> {
        return this.http.get<Property>(`${environment.URL}/${this.ROUTES.PROPERTIES}/${id}`).pipe(
            take(1),
            map((response: Property) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao listar o im??vel!`
                );
            })
        );
    }

    public update(body: UpdateProperty, id: number): Observable<Property> {
        return this.http.put<Property>(`${environment.URL}/${this.ROUTES.PROPERTIES}/${id}`, body).pipe(
            take(1),
            map((response: Property) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }
                
                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao atualizar o im??vel!`
                );
            })
        );
    }

    public delete(id: number): Observable<DeleteProperty> {
        return this.http.delete<DeleteProperty>(`${environment.URL}/${this.ROUTES.PROPERTIES}/${id}`).pipe(
            take(1),
            map((response: DeleteProperty) => response),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 && error.statusText === 'Unauthorized') {
                    return this._alertService.openSnackBar(
                        `${error.error.message}`
                    );
                }

                return this._alertService.openSnackBar(
                    `Ocorreu um erro ao deletar o im??vel!`
                );
            })
        );
    }

}

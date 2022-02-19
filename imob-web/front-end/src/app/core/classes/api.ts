import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class API {

    private token: string;
    private header: HttpHeaders;

    constructor() {
        this.header = new HttpHeaders();
        this.buildHeader();
    }

    public buildHeader(): void {
        this.header.set('Content-Type', 'application/json; charset=utf-8');
        this.header.set('Accept', 'application/json');
        this.header.set('Access-Control-Allow-Origin', `${environment.ORIGIN}`);
        this.header.set('Access-Control-Allow-Credentials', 'true');

        if (this.token) this.header.set('Authorization', `Bearer ${this.token}`);
    }

    public set setterToken(token: string) {
        this.token = token;
    }

    public get getterHeader(): HttpHeaders {
        return this.header;
    }
    
}

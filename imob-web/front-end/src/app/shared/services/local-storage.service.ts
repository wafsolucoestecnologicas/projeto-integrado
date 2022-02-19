import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    public setItem(key: string, value: string): boolean {
        if (this.storage) {
            this.storage.setItem(key, JSON.stringify(value));

            return true;
        }

        return false;
    }

    public getItem(key: string): string | null {
        if (this.storage) {
            return JSON.parse(JSON.stringify(this.storage.getItem(key)));
        }

        return null;
    }

    public removeItem(key: string): boolean {
        if (this.storage) {
            this.storage.removeItem(key);

            return true;
        }

        return false;
    }

    public clear(): boolean {
        if (this.storage) {
            this.storage.clear();

            return true;
        }

        return false;
    }
	
}

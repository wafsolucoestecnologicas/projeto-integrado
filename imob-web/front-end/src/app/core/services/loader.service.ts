import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

	private counter: number;
	private loader$: BehaviorSubject<string>;

    constructor() {
		this.counter = 0;
		this.loader$ = new BehaviorSubject<string>('');
	}

	public start(): void {
		if (++this.counter === 1) {
			this.loader$.next('start');
		}
	}

	public end(): void {
		if (this.counter === 0 || --this.counter === 0) {
			this.loader$.next('stop');
		}
	}

	public reset(): void {
		this.counter = 0;
		this.loader$.next('stop');
	}

	public getLoaderObserver(): Observable<string> {
		return this.loader$.asObservable();
	}

}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
    selector: 'imob-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

    private subscriptions: Subscription[];
    public show: boolean;

    constructor(
        private readonly _changeDectectorRef: ChangeDetectorRef,
        private readonly _loaderService: LoaderService
    ) {
        this.subscriptions = new Array<Subscription>();
        this.show = false;
    }

    public ngOnInit(): void {
        const subscription: Subscription = this._loaderService
            .getLoaderObserver()
            .subscribe((status: string) => {
                this.show = status === 'start';
                this._changeDectectorRef.detectChanges();
            });

        this.subscriptions.push(subscription);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}

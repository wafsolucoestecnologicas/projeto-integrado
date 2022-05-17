import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
    selector: 'imob-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public pathPropertiesForSale: string;

    constructor(
        private readonly _router: Router,
        private readonly _authenticationService: AuthenticationService,
        public _matDialog: MatDialog
    ) {
        this.pathPropertiesForSale = `/properties-for-sale/${this._authenticationService.company?.CNPJ}`;
    }

    public ngOnInit(): void {}

    public logout(): void {
        this._authenticationService.logout();
        this._router.navigate(['login']);
    }
	
}

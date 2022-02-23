import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CompanyComponent } from '../../dialogs/company/company.component';

@Component({
    selector: 'imob-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        private readonly _router: Router,
        private readonly _authenticationService: AuthenticationService,
        public _matDialog: MatDialog
    ) {}

    public ngOnInit(): void {}

    public openDialog(): void {
        this._matDialog.open(CompanyComponent, {
            width: '700px'
        });
    }

    public logout(): void {
        this._authenticationService.logout();
        this._router.navigate(['login']);
    }
	
}

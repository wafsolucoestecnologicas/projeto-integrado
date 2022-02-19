import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
    selector: 'imob-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        private readonly _router: Router,
        private readonly _authenticationService: AuthenticationService
    ) {}

    public ngOnInit(): void {}

    public logout(): void {
        this._authenticationService.logout();
        this._router.navigate(['login']);
    }
	
}

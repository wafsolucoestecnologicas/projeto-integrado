import { Component, OnInit } from '@angular/core';

import { Menu } from 'src/app/shared/interfaces/menu.interface';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
	selector: 'imob-aside',
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

	public menus: Menu[];

	constructor(private readonly _menuService: MenuService) {
		this.menus = new Array<Menu>();
	}

	public ngOnInit(): void {
		this.menus = this._menuService.getterMenus;
	}
	
}

import { Injectable } from '@angular/core';

import { UserType } from '../interfaces/profile.interface';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

	private _usersTypes: UserType[];

    constructor() {
		this._usersTypes = new Array<UserType>(
			{
				disabled: true,
				description: 'Administrador',
				value: 1
			},
			{
				disabled: false,
				description: 'Gestor',
				value: 2
			},
			{
				disabled: false,
				description: 'Despachante',
				value: 3
			},
			{
				disabled: false,
				description: 'Corretor',
				value: 4
			},
			{
				disabled: false,
				description: 'Secretária',
				value: 5
			}
		);
	}

	public get usersTypes(): UserType[] {
		return this._usersTypes;
	}
	
}

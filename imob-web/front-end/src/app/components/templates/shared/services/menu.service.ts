import { Injectable } from '@angular/core';

import { Menu } from 'src/app/shared/interfaces/menu.interface';

@Injectable({
	providedIn: 'root'
})
export class MenuService {

	private menus: Menu[];

	constructor() {
		this.menus = [
			{
				title: 'Gestão Interna',
				icon: 'arrow_circle_down',
				options: [
					{
						name: 'Usuários',
						link: 'users/list'
					},
					{
						name: 'Gestores',
						link: 'managers/list'
					},
					{
						name: 'Despachantes',
						link: 'advisors/list'
					},
					{
						name: 'Corretores',
						link: 'brokers/list'
					},
					{
						name: 'Secretárias',
						link: 'secretaries/list'
					},
					{
						name: 'Imobiliárias',
						link: 'companies/list'
					}
				]
			},
			{
				title: 'Gestão Externa',
				icon: 'arrow_circle_up',
				options: [
					{
						name: 'Imóveis',
						link: 'properties/list'
					},
					{
						name: 'Proprietários',
						link: 'owners/list'
					},
					{
						name: 'Clientes',
						link: 'customers/list'
					},
					{
						name: 'Leads',
						link: 'leads/list'
					}
				]
			},
			{
				title: 'Gestão Financeira',
				icon: 'monetization_on',
				options: [
					{
						name: 'Negócios',
						link: 'businesses/list'
					}
				]
			},
			{
				title: 'Relatórios',
				icon: 'assignment',
				options: [
					{
						name: 'Comissões a Receber',
						link: 'commissions-receivable/list'
					},
					{
						name: 'Comissões a Pagar',
						link: 'commissions-payable/list'
					}
				]
			}
		];
	}

	public get getterMenus(): Menu[] {
		return this.menus;
	}
	
}

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
						link: 'users'
					},
					{
						name: 'Gestores',
						link: 'managers'
					},
					{
						name: 'Despachantes',
						link: 'advisors'
					},
					{
						name: 'Corretores',
						link: 'brokers'
					},
					{
						name: 'Secretárias',
						link: 'secretaries'
					},
					{
						name: 'Imobiliárias',
						link: 'companies'
					}
				]
			},
			{
				title: 'Gestão Externa',
				icon: 'arrow_circle_up',
				options: [
					{
						name: 'Imóveis',
						link: 'properties'
					},
					{
						name: 'Proprietários',
						link: 'owners'
					},
					{
						name: 'Clientes',
						link: 'customers'
					},
					{
						name: 'Leads',
						link: 'leads'
					}
				]
			},
			{
				title: 'Gestão Financeira',
				icon: 'monetization_on',
				options: [
					{
						name: 'Negócios',
						link: 'businesses'
					}
				]
			},
			{
				title: 'Relatórios',
				icon: 'assignment',
				options: [
					{
						name: 'Comissões a Receber',
						link: 'commissions-receivable'
					},
					{
						name: 'Comissões a Pagar',
						link: 'commissions-payable'
					}
				]
			}
		];
	}

	public get getterMenus(): Menu[] {
		return this.menus;
	}
	
}

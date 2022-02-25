import { Injectable } from '@angular/core';

import { Menu } from '../interfaces/menu.interface';

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
						name: 'Gerenciar Gestores',
						link: 'managers'
					},
					{
						name: 'Gerenciar Despachantes',
						link: 'advisors'
					},
					{
						name: 'Gerenciar Corretores',
						link: 'brokers'
					},
					{
						name: 'Gerenciar Secretárias',
						link: 'secretaries'
					},
					{
						name: 'Gerenciar Imobiliárias',
						link: 'companies'
					}
				]
			},
			{
				title: 'Gestão Externa',
				icon: 'arrow_circle_up',
				options: [
					{
						name: 'Gerenciar Imóveis',
						link: 'properties'
					},
					{
						name: 'Gerenciar Proprietários',
						link: 'owners'
					},
					{
						name: 'Gerenciar Clientes',
						link: 'customers'
					},
					{
						name: 'Gerenciar Leads',
						link: 'leads'
					}
				]
			},
			{
				title: 'Gestão Financeira',
				icon: 'monetization_on',
				options: [
					{
						name: 'Gerenciar Negócios',
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

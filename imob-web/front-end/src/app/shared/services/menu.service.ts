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
				options: [
					{
						name: 'Gerenciar Gestores',
						link: '/managers',
						icon: 'supervisor_account'
					},
					{
						name: 'Gerenciar Despachantes',
						link: '/advisors',
						icon: 'people'
					},
					{
						name: 'Gerenciar Corretores',
						link: '/brokers',
						icon: 'people_alt'
					},
					{
						name: 'Gerenciar Secretárias',
						link: '/secretaries',
						icon: 'people_outline'
					},
					{
						name: 'Gerenciar Imobiliárias',
						link: '/companies',
						icon: 'store'
					}
				]
			},
			{
				title: 'Gestão Financeira',
				options: [
					{
						name: 'Gerenciar Negócios',
						link: '/businesses',
						icon: 'business'
					}
				]
			},
			{
				title: 'Gestão Externa',
				options: [
					{
						name: 'Gerenciar Imóveis',
						link: '/properties',
						icon: 'apartment'
					},
					{
						name: 'Gerenciar Proprietários',
						link: '/owners',
						icon: 'group'
					},
					{
						name: 'Gerenciar Clientes',
						link: '/customers',
						icon: 'groups'
					},
					{
						name: 'Gerenciar Leads',
						link: '/leads',
						icon: 'contacts'
					}
				]
			},
			{
				title: 'Relatórios',
				options: [
					{
						name: 'Comissões a Receber',
						link: '/commissions-receivable',
						icon: 'attach_money'
					},
					{
						name: 'Comissões a Pagar',
						link: '/commissions-payable',
						icon: 'money_off_csred'
					}
				]
			}
		];
	}

	public get getterMenus(): Menu[] {
		return this.menus;
	}
	
}

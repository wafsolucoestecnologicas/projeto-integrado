import { Router } from 'express';
import { UserController } from '../api/controllers/user.controller';

const userController: UserController = new UserController();
const router: Router = Router();

router.get('/',
	/**
	 * #swagger.security = [{ 'Token': [] }]
	 * #swagger.path = '/users'
	 * #swagger.tags = ['Usuários']
	 * #swagger.method = 'get'
	 * #swagger.consumes = ['application/json']
	 * #swagger.produces = ['application/json']
	 * #swagger.summary = 'Busca por todos os usuários'
	 * #swagger.description = 'Endpoint para buscar por todos os usuários'
	 * #swagger.responses[200] = {
			description: 'Busca por todos os usuários realizada com sucesso',
			schema: [
				{
					'id': 2,
					'name': 'palloma',
					'surname': 'felix',
					'email': 'palloma.felix@gmail.com',
					'isAdministrator': false,
					'isManager': true,
					'isAdvisor': false,
					'isBroker': false,
					'isSecretary': false,
					'createdAt': '2021-11-29T13:56:21.716Z',
					'updatedAt': '2021-11-29T13:56:21.716Z',
					'company': {
						'id': 2,
						'CNPJ': '00000000000000',
						'corporateName': 'Empresa Cadastrada Automaticamente',
						'stateRegistration': '0000000000',
						'percentageCommissionReceivable': 0,
						'percentageCommissionPayableForClosedDeals': 0,
						'percentageCommissionPayableForPropertyCaptured': 0,
						'createdAt': '2021-11-29T13:56:21.590Z',
						'updatedAt': '2021-11-29T13:56:21.590Z'
					},
					'profile': {
						'id': 2,
						'userType': 'manager',
						'isAdmin': false,
						'permissions': {
							'create': [
								'companies',
								'managers',
								'advisors',
								'brokers',
								'secretaries',
								'owners',
								'customers',
								'properties',
								'leads',
								'businesses'
							],
							'read': [
								'users',
								'profiles',
								'companies',
								'managers',
								'advisors',
								'brokers',
								'secretaries',
								'owners',
								'customers',
								'properties',
								'leads',
								'businesses'
							],
							'update': [
								'companies',
								'managers',
								'advisors',
								'brokers',
								'secretaries',
								'owners',
								'customers',
								'properties',
								'leads',
								'businesses'
							],
							'delete': [
								'companies',
								'managers',
								'advisors',
								'brokers',
								'secretaries',
								'owners',
								'customers',
								'properties',
								'leads',
								'businesses'
							],
							'amount': [
								'leads',
								'businesses'
							],
							'search': [
								'leads',
								'businesses',
								'adresses'
							],
							'transfer': [
								'businesses'
							],
							'reject': [
								'businesses'
							],
							'close': [
								'businesses'
							],
							'receiveble': [
								'commissions-receiveble'
							],
							'payable': [
								'commissions-payable'
							]
						},
						'createdAt': '2021-11-27T18:05:40.508Z',
						'updatedAt': '2021-11-27T18:05:40.508Z'
					},
					'administrator': 'null',
					'manager': {
						'id': 2,
						'name': 'palloma',
						'surname': 'felix',
						'email': 'palloma.felix@gmail.com',
						'birthDate': '2021-11-29',
						'isManager': true,
						'RG': '000000000',
						'CPF': '00000000000',
						'landline': 'null',
						'cellPhone': '00000000000',
						'profession': 'null',
						'createdAt': '2021-11-29T13:56:21.649Z',
						'updatedAt': '2021-11-29T13:56:21.649Z'
					},
					'advisor': 'null',
					'broker': 'null',
					'secretary': 'null'
				},
				{
					'id': 1,
					'name': 'wellington',
					'surname': 'felix',
					'email': 'wellington.felix@gmail.com',
					'isAdministrator': false,
					'isManager': true,
					'isAdvisor': false,
					'isBroker': false,
					'isSecretary': false,
					'createdAt': '2021-11-27T18:12:44.177Z',
					'updatedAt': '2021-11-27T18:12:44.177Z',
					'company': {
						'id': 1,
						'CNPJ': '00000000000000',
						'corporateName': 'Empresa Cadastrada Automaticamente',
						'stateRegistration': '0000000000',
						'percentageCommissionReceivable': 0,
						'percentageCommissionPayableForClosedDeals': 0,
						'percentageCommissionPayableForPropertyCaptured': 0,
						'createdAt': '2021-11-27T18:12:43.983Z',
						'updatedAt': '2021-11-27T18:12:43.983Z'
					},
					'profile': {
						'id': 2,
						'userType': 'manager',
						'isAdmin': false,
						'permissions': {
							'create': [
								'companies',
								'managers',
								'advisors',
								'brokers',
								'secretaries',
								'owners',
								'customers',
								'properties',
								'leads',
								'businesses'
							],
							'read': [
								'users',
								'profiles',
								'companies',
								'managers',
								'advisors',
								'brokers',
								'secretaries',
								'owners',
								'customers',
								'properties',
								'leads',
								'businesses'
							],
							'update': [
								'companies',
								'managers',
								'advisors',
								'brokers',
								'secretaries',
								'owners',
								'customers',
								'properties',
								'leads',
								'businesses'
							],
							'delete': [
								'companies',
								'managers',
								'advisors',
								'brokers',
								'secretaries',
								'owners',
								'customers',
								'properties',
								'leads',
								'businesses'
							],
							'amount': [
								'leads',
								'businesses'
							],
							'search': [
								'leads',
								'businesses',
								'adresses'
							],
							'transfer': [
								'businesses'
							],
							'reject': [
								'businesses'
							],
							'close': [
								'businesses'
							],
							'receiveble': [
								'commissions-receiveble'
							],
							'payable': [
								'commissions-payable'
							]
						},
						'createdAt': '2021-11-27T18:05:40.508Z',
						'updatedAt': '2021-11-27T18:05:40.508Z'
					},
					'administrator': 'null',
					'manager': {
						'id': 1,
						'name': 'wellington',
						'surname': 'felix',
						'email': 'wellington.felix@gmail.com',
						'birthDate': '2021-11-27',
						'isManager': true,
						'RG': '000000000',
						'CPF': '00000000000',
						'landline': 'null',
						'cellPhone': '00000000000',
						'profession': 'null',
						'createdAt': '2021-11-27T18:12:44.036Z',
						'updatedAt': '2021-11-27T18:12:44.036Z'
					},
					'advisor': 'null',
					'broker': 'null',
					'secretary': 'null'
				}
			]
	   }
	 * #swagger.responses[401] = {
			description: 'Requisição sem um Token válido',
			schema: { message: 'Não possui credenciais de autenticação válidas para o recurso!' }
		}
	 * #swagger.responses[500] = {
			description: 'Erro interno',
			schema: { message: 'Erro no servidor ao processar a solicitação!' }
		}
	 */
	userController.index
);

router.post('/',
	/**
	 * #swagger.path = '/users'
	 * #swagger.tags = ['Usuários']
	 * #swagger.method = 'post'
	 * #swagger.consumes = ['application/json']
	 * #swagger.produces = ['application/json']
	 * #swagger.summary = 'Cria um novo usuário'
	 * #swagger.description = 'Endpoint para criar um novo usuário'
	 * #swagger.parameters['body'] = {
			in: 'body',
			description: 'JSON com um objeto para criação de um usuário',
			required: true,
			type: 'object',
			schema: {
				name: 'string',
				surname: 'string',
				password: 'string',
				company: {
					id: 'integer'
				},
				profile: {
					id: 'integer'
				}
			}
	   }
	 * #swagger.responses[201] = {
			description: 'Criação do usuário realizada com sucesso',
			schema: {
				'name': 'palloma',
				'surname': 'felix',
				'email': 'palloma.felix@gmail.com',
				'password': '',
				'isAdministrator': false,
				'isManager': true,
				'isAdvisor': false,
				'isBroker': false,
				'isSecretary': false,
				'company': {
					'id': 2,
					'CNPJ': '00000000000000',
					'corporateName': 'Empresa Cadastrada Automaticamente',
					'stateRegistration': '0000000000',
					'percentageCommissionReceivable': 0,
					'percentageCommissionPayableForClosedDeals': 0,
					'percentageCommissionPayableForPropertyCaptured': 0,
					'createdAt': '2021-11-29T13:56:21.590Z',
					'updatedAt': '2021-11-29T13:56:21.590Z'
				},
				'profile': {
					'id': 2,
					'userType': 'manager',
					'isAdmin': false,
					'permissions': {
						'create': [
							'companies',
							'managers',
							'advisors',
							'brokers',
							'secretaries',
							'owners',
							'customers',
							'properties',
							'leads',
							'businesses'
						],
						'read': [
							'users',
							'profiles',
							'companies',
							'managers',
							'advisors',
							'brokers',
							'secretaries',
							'owners',
							'customers',
							'properties',
							'leads',
							'businesses'
						],
						'update': [
							'companies',
							'managers',
							'advisors',
							'brokers',
							'secretaries',
							'owners',
							'customers',
							'properties',
							'leads',
							'businesses'
						],
						'delete': [
							'companies',
							'managers',
							'advisors',
							'brokers',
							'secretaries',
							'owners',
							'customers',
							'properties',
							'leads',
							'businesses'
						],
						'amount': [
							'leads',
							'businesses'
						],
						'search': [
							'leads',
							'businesses',
							'adresses'
						],
						'transfer': [
							'businesses'
						],
						'reject': [
							'businesses'
						],
						'close': [
							'businesses'
						],
						'receiveble': [
							'commissions-receiveble'
						],
						'payable': [
							'commissions-payable'
						]
					},
					'createdAt': '2021-11-27T18:05:40.508Z',
					'updatedAt': '2021-11-27T18:05:40.508Z'
				},
				'manager': {
					'name': 'palloma',
					'surname': 'felix',
					'email': 'palloma.felix@gmail.com',
					'birthDate': '2021-11-29T13:56:21.647Z',
					'isManager': true,
					'RG': '000000000',
					'CPF': '00000000000',
					'cellPhone': '00000000000',
					'company': {
						'id': 2,
						'CNPJ': '00000000000000',
						'corporateName': 'Empresa Cadastrada Automaticamente',
						'stateRegistration': '0000000000',
						'percentageCommissionReceivable': 0,
						'percentageCommissionPayableForClosedDeals': 0,
						'percentageCommissionPayableForPropertyCaptured': 0,
						'createdAt': '2021-11-29T13:56:21.590Z',
						'updatedAt': '2021-11-29T13:56:21.590Z'
					},
					'createdAt': '2021-11-29T13:56:21.649Z',
					'updatedAt': '2021-11-29T13:56:21.649Z',
					'landline': 'null',
					'profession': 'null',
					'id': 2
				},
				'createdAt': '2021-11-29T13:56:21.716Z',
				'updatedAt': '2021-11-29T13:56:21.716Z',
				'id': 2,
				'uuid': '3d0967a8-c65a-4f29-a65e-41d00bdbaf8a'
			}
	   }
	 * #swagger.responses[400] = {
			description: 'Requisição com dados inválidos',
			schema: { message: 'O pedido não pôde ser entregue devido à sintaxe incorreta!' }
		}
	 * #swagger.responses[401] = {
			description: 'Requisição sem um Token válido',
			schema: { message: 'Não possui credenciais de autenticação válidas para o recurso!' }
		}
	 * #swagger.responses[409] = {
			description: 'E-mail já existe na base de dados',
			schema: { message: 'Solicitação atual conflitou com o recurso que está no servidor!' }
		}
	 * #swagger.responses[500] = {
			description: 'Erro interno',
			schema: { message: 'Erro no servidor ao processar a solicitação!' }
		}
	 */
	userController.create
);

router.get('/:id',
	/**
	 * #swagger.security = [{ 'Token': [] }]
	 * #swagger.path = '/users/{id}'
	 * #swagger.tags = ['Usuários']
	 * #swagger.method = 'get'
	 * #swagger.consumes = ['application/json']
	 * #swagger.produces = ['application/json']
	 * #swagger.summary = 'Busca por um usuário'
	 * #swagger.description = 'Endpoint para buscar por um usuário'
	 * #swagger.parameters['id'] = {
			in: 'path',
			description: 'ID do usuário',
			required: true,
			type: 'integer'
	   }
	 * #swagger.responses[200] = {
			description: 'Busca por um usuário realizada com sucesso',
			schema: {
				'id': 1,
				'name': 'wellington',
				'surname': 'felix',
				'email': 'wellington.felix@gmail.com',
				'isAdministrator': false,
				'isManager': true,
				'isAdvisor': false,
				'isBroker': false,
				'isSecretary': false,
				'createdAt': '2021-11-27T18:12:44.177Z',
				'updatedAt': '2021-11-27T18:12:44.177Z',
				'company': {
					'id': 1,
					'CNPJ': '00000000000000',
					'corporateName': 'Empresa Cadastrada Automaticamente',
					'stateRegistration': '0000000000',
					'percentageCommissionReceivable': 0,
					'percentageCommissionPayableForClosedDeals': 0,
					'percentageCommissionPayableForPropertyCaptured': 0,
					'createdAt': '2021-11-27T18:12:43.983Z',
					'updatedAt': '2021-11-27T18:12:43.983Z'
				},
				'profile': {
					'id': 2,
					'userType': 'manager',
					'isAdmin': false,
					'permissions': {
						'create': [
							'companies',
							'managers',
							'advisors',
							'brokers',
							'secretaries',
							'owners',
							'customers',
							'properties',
							'leads',
							'businesses'
						],
						'read': [
							'users',
							'profiles',
							'companies',
							'managers',
							'advisors',
							'brokers',
							'secretaries',
							'owners',
							'customers',
							'properties',
							'leads',
							'businesses'
						],
						'update': [
							'companies',
							'managers',
							'advisors',
							'brokers',
							'secretaries',
							'owners',
							'customers',
							'properties',
							'leads',
							'businesses'
						],
						'delete': [
							'companies',
							'managers',
							'advisors',
							'brokers',
							'secretaries',
							'owners',
							'customers',
							'properties',
							'leads',
							'businesses'
						],
						'amount': [
							'leads',
							'businesses'
						],
						'search': [
							'leads',
							'businesses',
							'adresses'
						],
						'transfer': [
							'businesses'
						],
						'reject': [
							'businesses'
						],
						'close': [
							'businesses'
						],
						'receiveble': [
							'commissions-receiveble'
						],
						'payable': [
							'commissions-payable'
						]
					},
					'createdAt': '2021-11-27T18:05:40.508Z',
					'updatedAt': '2021-11-27T18:05:40.508Z'
				},
				'administrator': 'null',
				'manager': {
					'id': 1,
					'name': 'wellington',
					'surname': 'felix',
					'email': 'wellington.felix@gmail.com',
					'birthDate': '2021-11-27',
					'isManager': true,
					'RG': '000000000',
					'CPF': '00000000000',
					'landline': 'null',
					'cellPhone': '00000000000',
					'profession': 'null',
					'createdAt': '2021-11-27T18:12:44.036Z',
					'updatedAt': '2021-11-27T18:12:44.036Z'
				},
				'advisor': 'null',
				'broker': 'null',
				'secretary': 'null',
				'password': ''
			}
	   }
	 * #swagger.responses[400] = {
			description: 'Requisição sem o ID do usuário',
			schema: { message: 'O pedido não pôde ser entregue devido à sintaxe incorreta!' }
		}
	 * #swagger.responses[401] = {
			description: 'Requisição sem um Token válido',
			schema: { message: 'Não possui credenciais de autenticação válidas para o recurso!' }
		}
	 * #swagger.responses[500] = {
			description: 'Erro interno',
			schema: { message: 'Erro no servidor ao processar a solicitação!' }
		}
	 */
	userController.read
);

router.put('/:id',
	/**
	 * #swagger.security = [{ 'Token': [] }]
	 * #swagger.path = '/users/{id}'
	 * #swagger.tags = ['Usuários']
	 * #swagger.method = 'put'
	 * #swagger.consumes = ['application/json']
	 * #swagger.produces = ['application/json']
	 * #swagger.summary = 'Atualiza os dados de um usuário'
	 * #swagger.description = 'Endpoint para atualizar os dados de um usuário'
	 * #swagger.parameters['id'] = {
			in: 'path',
			description: 'ID do usuário',
			required: true,
			type: 'integer'
	   }
	   * #swagger.parameters['body'] = {
			in: 'body',
			description: 'JSON com um objeto para atualização de um usuário',
			required: true,
			type: 'object',
			schema: {
				name: 'string',
				surname: 'string',
				email: 'string',
				password: 'string'
			}
	   }
	 * #swagger.responses[200] = {
			description: 'Atualização dos dados do usuário realizada com sucesso',
			schema: {
				'id': 1,
				'name': 'wellington',
				'surname': 'aparecido',
				'email': 'wellington.felix@gmail.com',
				'password': '',
				'updatedAt': '2021-11-29T15:07:19.242Z'
			}
	   }
	 * #swagger.responses[400] = {
			description: 'Requisição sem o ID do usuário | ID do usuário não encontrado na base de dados | Requisição com dados inválidos',
			schema: { message: 'O pedido não pôde ser entregue devido à sintaxe incorreta!' }
		}
	 * #swagger.responses[401] = {
			description: 'Requisição sem um Token válido',
			schema: { message: 'Não possui credenciais de autenticação válidas para o recurso!' }
		}
	 * #swagger.responses[500] = {
			description: 'Erro interno',
			schema: { message: 'Erro no servidor ao processar a solicitação!' }
		}
	 */
	userController.update
);

router.delete('/:id',
	/**
	 * #swagger.security = [{ 'Token': [] }]
	 * #swagger.path = '/users/{id}'
	 * #swagger.tags = ['Usuários']
	 * #swagger.method = 'delete'
	 * #swagger.consumes = ['application/json']
	 * #swagger.produces = ['application/json']
	 * #swagger.summary = 'Deleta um usuário'
	 * #swagger.description = 'Endpoint para deletar um usuário'
	 * #swagger.parameters['id'] = {
			in: 'path',
			description: 'ID do usuário',
			required: true,
			type: 'integer'
	   }
	 * #swagger.responses[200] = {
			description: 'Deleção do usuário realizada com sucesso',
			schema: {
				'user': 1,
				'person': 1,
				'company': 1
			}
	   }
	 * #swagger.responses[400] = {
			description: 'Requisição sem o ID do usuário | ID do usuário não encontrado na base de dados',
			schema: { message: 'O pedido não pôde ser entregue devido à sintaxe incorreta!' }
		}
	 * #swagger.responses[401] = {
			description: 'Requisição sem um Token válido',
			schema: { message: 'Não possui credenciais de autenticação válidas para o recurso!' }
		}
	 * #swagger.responses[500] = {
			description: 'Erro interno',
			schema: { message: 'Erro no servidor ao processar a solicitação!' }
		}
	 */
	userController.delete
);

export default router;
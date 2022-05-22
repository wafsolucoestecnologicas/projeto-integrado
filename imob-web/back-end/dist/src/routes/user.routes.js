"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("../api/controllers/user.controller");
var userController = new user_controller_1.UserController();
var router = (0, express_1.Router)();
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
                'id': 1,
                'name': 'wellington',
                'surname': 'felix',
                'email': 'wellington.felix@gmail.com',
                'isAdministrator': false,
                'isManager': true,
                'isAdvisor': false,
                'isBroker': false,
                'isSecretary': false,
                'createdAt': '2021-12-11T02:06:27.749Z',
                'updatedAt': '2021-12-11T02:06:27.749Z',
                'company': {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-12-11T02:06:27.567Z',
                    'updatedAt': '2021-12-11T02:06:27.567Z'
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
                            'businesses',
                            'commissions-receivable',
                            'commissions-payable',
                            'adresses',
                            'neighborhoods',
                            'cities',
                            'states'
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
                            'businesses',
                            'commissions-receivable',
                            'commissions-payable',
                            'adresses',
                            'neighborhoods',
                            'cities',
                            'states'
                        ],
                        'update': [
                            'users',
                            'companies',
                            'managers',
                            'advisors',
                            'brokers',
                            'secretaries',
                            'owners',
                            'customers',
                            'properties',
                            'leads',
                            'businesses',
                            'commissions-receivable',
                            'commissions-payable',
                            'adresses',
                            'neighborhoods',
                            'cities',
                            'states'
                        ],
                        'delete': [
                            'users',
                            'companies',
                            'managers',
                            'advisors',
                            'brokers',
                            'secretaries',
                            'owners',
                            'customers',
                            'properties',
                            'leads',
                            'businesses',
                            'commissions-receivable',
                            'commissions-payable',
                            'adresses',
                            'neighborhoods',
                            'cities',
                            'states'
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
                        'receivable': [
                            'commissions-receivable'
                        ],
                        'payable': [
                            'commissions-payable'
                        ]
                    },
                    'createdAt': '2021-12-11T02:05:52.482Z',
                    'updatedAt': '2021-12-11T02:05:52.482Z'
                },
                'administrator': 'null',
                'manager': {
                    'id': 1,
                    'name': 'wellington',
                    'surname': 'felix',
                    'email': 'wellington.felix@gmail.com',
                    'birthDate': '2021-12-10',
                    'isManager': true,
                    'RG': '000000000',
                    'CPF': '00000000000',
                    'landline': 'null',
                    'cellPhone': '00000000000',
                    'profession': 'null',
                    'createdAt': '2021-12-11T02:06:27.627Z',
                    'updatedAt': '2021-12-11T02:06:27.628Z'
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
userController.index);
router.post('/', 
/**
 * #swagger.path = '/users'
 * #swagger.tags = ['Usuários']
 * #swagger.method = 'post'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Cria um novo usuário'
 * #swagger.description = 'Endpoint para criar um novo usuário'
 * #swagger.parameters['createUser'] = {
        in: 'body',
        description: 'JSON com um objeto para criação de um usuário',
        required: true,
        type: 'object',
        schema: {
            $ref: '#definitions/createUser'
        }
   }
 * #swagger.responses[201] = {
        description: 'Criação do usuário realizada com sucesso',
        schema: {
            'id': 1,
            'uuid': '7fc5c053-722f-4481-8e69-32f13064b981',
            'name': 'wellington',
            'surname': 'felix',
            'email': 'wellington.felix@gmail.com',
            'password': '',
            'isAdministrator': false,
            'isManager': true,
            'isAdvisor': false,
            'isBroker': false,
            'isSecretary': false,
            'company': {
                'id': 1,
                'CNPJ': '00000000000000',
                'corporateName': 'Empresa Cadastrada Automaticamente',
                'stateRegistration': '0000000000',
                'percentageCommissionReceivable': 0,
                'percentageCommissionPayableForClosedDeals': 0,
                'percentageCommissionPayableForPropertyCaptured': 0,
                'createdAt': '2021-12-11T02:06:27.567Z',
                'updatedAt': '2021-12-11T02:06:27.567Z'
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
                        'businesses',
                        'commissions-receivable',
                        'commissions-payable',
                        'adresses',
                        'neighborhoods',
                        'cities',
                        'states'
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
                        'businesses',
                        'commissions-receivable',
                        'commissions-payable',
                        'adresses',
                        'neighborhoods',
                        'cities',
                        'states'
                    ],
                    'update': [
                        'users',
                        'companies',
                        'managers',
                        'advisors',
                        'brokers',
                        'secretaries',
                        'owners',
                        'customers',
                        'properties',
                        'leads',
                        'businesses',
                        'commissions-receivable',
                        'commissions-payable',
                        'adresses',
                        'neighborhoods',
                        'cities',
                        'states'
                    ],
                    'delete': [
                        'users',
                        'companies',
                        'managers',
                        'advisors',
                        'brokers',
                        'secretaries',
                        'owners',
                        'customers',
                        'properties',
                        'leads',
                        'businesses',
                        'commissions-receivable',
                        'commissions-payable',
                        'adresses',
                        'neighborhoods',
                        'cities',
                        'states'
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
                    'receivable': [
                        'commissions-receivable'
                    ],
                    'payable': [
                        'commissions-payable'
                    ]
                },
                'createdAt': '2021-12-11T02:05:52.482Z',
                'updatedAt': '2021-12-11T02:05:52.482Z'
            },
            'manager': {
                'name': 'wellington',
                'surname': 'felix',
                'email': 'wellington.felix@gmail.com',
                'birthDate': '2021-12-11T02:06:27.625Z',
                'isManager': true,
                'RG': '000000000',
                'CPF': '00000000000',
                'cellPhone': '00000000000',
                'company': {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-12-11T02:06:27.567Z',
                    'updatedAt': '2021-12-11T02:06:27.567Z'
                },
                'createdAt': '2021-12-11T02:06:27.627Z',
                'updatedAt': '2021-12-11T02:06:27.628Z',
                'landline': 'null',
                'profession': 'null',
                'id': 1
            },
            'createdAt': '2021-12-11T02:06:27.749Z',
            'updatedAt': '2021-12-11T02:06:27.749Z'
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
userController.create);
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
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
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
            'createdAt': '2021-12-11T02:06:27.749Z',
            'updatedAt': '2021-12-11T02:06:27.749Z',
            'company': {
                'id': 1,
                'CNPJ': '00000000000000',
                'corporateName': 'Empresa Cadastrada Automaticamente',
                'stateRegistration': '0000000000',
                'percentageCommissionReceivable': 0,
                'percentageCommissionPayableForClosedDeals': 0,
                'percentageCommissionPayableForPropertyCaptured': 0,
                'createdAt': '2021-12-11T02:06:27.567Z',
                'updatedAt': '2021-12-11T02:06:27.567Z'
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
                        'businesses',
                        'commissions-receivable',
                        'commissions-payable',
                        'adresses',
                        'neighborhoods',
                        'cities',
                        'states'
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
                        'businesses',
                        'commissions-receivable',
                        'commissions-payable',
                        'adresses',
                        'neighborhoods',
                        'cities',
                        'states'
                    ],
                    'update': [
                        'users',
                        'companies',
                        'managers',
                        'advisors',
                        'brokers',
                        'secretaries',
                        'owners',
                        'customers',
                        'properties',
                        'leads',
                        'businesses',
                        'commissions-receivable',
                        'commissions-payable',
                        'adresses',
                        'neighborhoods',
                        'cities',
                        'states'
                    ],
                    'delete': [
                        'users',
                        'companies',
                        'managers',
                        'advisors',
                        'brokers',
                        'secretaries',
                        'owners',
                        'customers',
                        'properties',
                        'leads',
                        'businesses',
                        'commissions-receivable',
                        'commissions-payable',
                        'adresses',
                        'neighborhoods',
                        'cities',
                        'states'
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
                    'receivable': [
                        'commissions-receivable'
                    ],
                    'payable': [
                        'commissions-payable'
                    ]
                },
                'createdAt': '2021-12-11T02:05:52.482Z',
                'updatedAt': '2021-12-11T02:05:52.482Z'
            },
            'administrator': 'null',
            'manager': {
                'id': 1,
                'name': 'wellington',
                'surname': 'felix',
                'email': 'wellington.felix@gmail.com',
                'birthDate': '2021-12-10',
                'isManager': true,
                'RG': '000000000',
                'CPF': '00000000000',
                'landline': 'null',
                'cellPhone': '00000000000',
                'profession': 'null',
                'createdAt': '2021-12-11T02:06:27.627Z',
                'updatedAt': '2021-12-11T02:06:27.628Z'
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
userController.read);
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
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
   }
   * #swagger.parameters['updateUser'] = {
        in: 'body',
        description: 'JSON com um objeto para atualização de um usuário',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/updateUser'
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
userController.update);
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
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
   }
 * #swagger.responses[200] = {
        description: 'Deleção do usuário realizada com sucesso',
        schema: {
            'user': 1,
            'person': 1
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
userController.delete);
exports.default = router;
//# sourceMappingURL=user.routes.js.map
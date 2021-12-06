import { Router } from 'express';
import { ProfileController } from '../api/controllers/profile.controller';

const profileController: ProfileController = new ProfileController();
const router: Router = Router();

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/profiles'
     * #swagger.tags = ['Perfis']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os perfis de usuário'
     * #swagger.description = 'Endpoint para buscar por todos os perfis de usuário'
     * #swagger.responses[200] = {
            description: 'Busca por todos os perfis de usuário realiazada com sucesso',
            schema: [
                {
                    'id': 1,
                    'userType': 'administrator',
                    'isAdmin': true,
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
                {
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
                {
                    'id': 3,
                    'userType': 'advisor',
                    'isAdmin': false,
                    'permissions': {
                        'create': [],
                        'read': [
                            'managers',
                            'owners',
                            'customers',
                            'properties',
                            'leads',
                            'businesses'
                        ],
                        'update': [
                            'businesses'
                        ],
                        'delete': [],
                        'amount': [
                            'leads',
                            'businesses'
                        ],
                        'search': [
                            'leads',
                            'businesses',
                            'adresses'
                        ],
                        'transfer': [],
                        'reject': [
                            'businesses'
                        ],
                        'close': [
                            'businesses'
                        ],
                        'receiveble': [],
                        'payable': []
                    },
                    'createdAt': '2021-11-27T18:05:40.508Z',
                    'updatedAt': '2021-11-27T18:05:40.508Z'
                },
                {
                    'id': 4,
                    'userType': 'broker',
                    'isAdmin': false,
                    'permissions': {
                        'create': [
                            'owners',
                            'customers',
                            'properties'
                        ],
                        'read': [
                            'managers',
                            'secretaries',
                            'owners',
                            'customers',
                            'properties',
                            'leads',
                            'businesses'
                        ],
                        'update': [
                            'owners',
                            'customers',
                            'properties',
                            'businesses'
                        ],
                        'delete': [],
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
                        'reject': [],
                        'close': [],
                        'receiveble': [],
                        'payable': [
                            'commissions-payable'
                        ]
                    },
                    'createdAt': '2021-11-27T18:05:40.508Z',
                    'updatedAt': '2021-11-27T18:05:40.508Z'
                },
                {
                    'id': 5,
                    'userType': 'secretary',
                    'isAdmin': false,
                    'permissions': {
                        'create': [
                            'owners',
                            'customers',
                            'properties',
                            'leads',
                            'businesses'
                        ],
                        'read': [
                            'brokers',
                            'owners',
                            'customers',
                            'properties',
                            'leads',
                            'businesses'
                        ],
                        'update': [
                            'owners',
                            'customers',
                            'properties',
                            'leads',
                            'businesses'
                        ],
                        'delete': [
                            'owners',
                            'customers',
                            'properties',
                            'leads'
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
                        'reject': [],
                        'close': [],
                        'receiveble': [],
                        'payable': []
                    },
                    'createdAt': '2021-11-27T18:05:40.508Z',
                    'updatedAt': '2021-11-27T18:05:40.508Z'
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
    profileController.index
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/profiles/{id}'
     * #swagger.tags = ['Perfis']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um perfil de usuário'
     * #swagger.description = 'Endpoint para buscar por um perfil de usuário'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do perfil de usuário',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por um perfil de usuário realizada com sucesso',
            schema: {
                'id': 1,
                'userType': 'administrator',
                'isAdmin': true,
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
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do perfil de usuário',
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
    profileController.read
);

export default router;
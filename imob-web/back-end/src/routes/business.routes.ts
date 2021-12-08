import { Router } from 'express';
import { BusinessController } from '../api/controllers/business.controller';

const businessController: BusinessController = new BusinessController();
const router: Router = Router();

router.get('/amount',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/amount'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca a quantidade total de negócios criados no mês'
     * #swagger.description = 'Endpoint para buscar a quantidade total de negócios criados no mês'
     * #swagger.parameters['month'] = {
            in: 'query',
            description: 'Ano e mês no formato AAAA-MM',
            required: true,
            type: 'string',
            schema: {
                $ref: '#/definitions/month'
            }
        }
     * #swagger.responses[200] = {
            description: 'Busca pela quantidade total de negócios criados no mês realizada com sucesso',
            schema: {
                'totalAmountProspecting': 0,
                'totalAmountVisit': 0,
                'totalAmountProposal': 0,
                'totalAmountRejected': 0,
                'totalAmountClosed': 1,
                'totalAmountBusinesses': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o Ano e Mês',
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
    businessController.amount
);

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os negócios'
     * #swagger.description = 'Endpoint para buscar por todos os negócios'
     * #swagger.responses[200] = {
            description: 'Busca por todos os negócios realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'status': 0,
                    'dateVisit': 'null',
                    'dateSale': 'null',
                    'visitForm': 'null',
                    'propertyRegistration': 'null',
                    'propertySaleContract': 'null',
                    'ITBI': 'null',
                    'customerRG': 'null',
                    'customerCPF': 'null',
                    'customerAddressProof': 'null',
                    'customerPayslip': 'null',
                    'ownerRG': 'null',
                    'ownerCPF': 'null',
                    'ownerAddressProof': 'null',
                    'ownerPayslip': 'null',
                    'createdByAdministrator': false,
                    'createdByManager': true,
                    'createdBySecretary': false,
                    'redirectedManagerId': 'null',
                    'redirectedAdvisorId': 'null',
                    'redirectedBrokerId': 1,
                    'createdAt': '2021-12-05T19:56:14.090Z',
                    'updatedAt': '2021-12-05T19:56:14.090Z',
                    'company': {
                        'id': 1,
                        'CNPJ': '00000000000000',
                        'corporateName': 'Empresa Cadastrada Automaticamente',
                        'stateRegistration': '0000000000',
                        'percentageCommissionReceivable': 0,
                        'percentageCommissionPayableForClosedDeals': 0,
                        'percentageCommissionPayableForPropertyCaptured': 0,
                        'createdAt': '2021-12-03T23:18:28.221Z',
                        'updatedAt': '2021-12-03T23:18:28.221Z'
                    },
                    'owner': {
                        'id': 1,
                        'name': 'joseane',
                        'surname': 'ferreira',
                        'email': 'joseane.ferreira@gmail.com',
                        'birthDate': '2021-03-08',
                        'checked': false,
                        'isOwner': true,
                        'RG': '157882299',
                        'CPF': '20717934047',
                        'landline': '          ',
                        'cellPhone': '31986857815',
                        'profession': '',
                        'createdAt': '2021-12-04T20:53:23.134Z',
                        'updatedAt': '2021-12-04T20:53:23.134Z'
                    },
                    'customer': {
                        'id': 1,
                        'name': 'jose',
                        'surname': 'maria',
                        'email': 'jose.maria@gmail.com',
                        'birthDate': '2021-03-08',
                        'isCustomer': true,
                        'RG': '157882299',
                        'CPF': '20717934047',
                        'landline': '          ',
                        'cellPhone': '31986857815',
                        'profession': '',
                        'createdAt': '2021-12-05T19:45:19.119Z',
                        'updatedAt': '2021-12-05T19:45:19.119Z'
                    },
                    'property': {
                        'id': 1,
                        'description': 'casa de 2 andares, total de 14 cômodos',
                        'photos': {
                            'paths': []
                        },
                        'checked': false,
                        'elevator': 'null',
                        'bedrooms': 2,
                        'bathrooms': 5,
                        'suites': 0,
                        'parkingLots': 2,
                        'terrainArea': 1000,
                        'buildingArea': 800,
                        'totalUtilTerrainArea': 1000,
                        'condominium': 0,
                        'IPTU': 0,
                        'value': 450000,
                        'createdAt': '2021-12-03T23:20:06.093Z',
                        'updatedAt': '2021-12-03T23:20:06.093Z'
                    },
                    'lead': {
                        'id': 1,
                        'name': 'jose',
                        'surname': 'maria',
                        'email': 'jose.maria@gmail.com',
                        'source': 0,
                        'landline': '          ',
                        'cellPhone': '31986857815',
                        'comments': '',
                        'createdByAdministrator': false,
                        'createdByManager': true,
                        'createdBySecretary': false,
                        'createdAt': '2021-12-05T19:50:26.385Z',
                        'updatedAt': '2021-12-05T19:50:26.385Z'
                    }
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
    businessController.index
);

router.post('/',
    /**
      * #swagger.security = [{ 'Token': [] }]
      * #swagger.path = '/businesses'
      * #swagger.tags = ['Negócios']
      * #swagger.method = 'post'
      * #swagger.consumes = ['application/json']
      * #swagger.produces = ['application/json']
      * #swagger.summary = 'Cria um novo negócio'
      * #swagger.description = 'Endpoint para criar um novo negócio'
      * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para criação de um negócio',
            required: true,
            type: 'object',
            schema: {
                status: 'integer',
                dateVisit: 'date',
                dateSale: 'date',
                visitForm: 'string',
                propertyRegistration: 'string',
                propertySaleContract: 'string',
                ITBI: 'string',
                customerRG: 'string',
                customerCPF: 'string',
                customerAddressProof: 'string',
                customerPayslip: 'string',
                ownerRG: 'string',
                ownerCPF: 'string',
                ownerAddressProof: 'string',
                ownerPayslip: 'string',
                createdByAdministrator: 'boolean',
                createdByManager: 'boolean',
                createdBySecretary: 'boolean',
                redirectedManagerId: 'integer',
                redirectedAdvisorId: 'integer',
                redirectedBrokerId: 'integer',
                administrator: 'object',
                manager: 'object',
                advisor: 'object',
                broker: 'object',
                secretary: 'object',
                owner: 'object',
                customer: 'object',
                property: 'object',
                lead: 'object'
            }
        }
      * #swagger.responses[201] = {
             description: 'Criação do negócio realizada com sucesso',
             schema: {
                'id': 1,
                'status': 0,
                'dateVisit': 'null',
                'dateSale': 'null',
                'visitForm': 'null',
                'propertyRegistration': 'null',
                'propertySaleContract': 'null',
                'ITBI': 'null',
                'customerRG': 'null',
                'customerCPF': 'null',
                'customerAddressProof': 'null',
                'customerPayslip': 'null',
                'ownerRG': 'null',
                'ownerCPF': 'null',
                'ownerAddressProof': 'null',
                'ownerPayslip': 'null',
                'createdByAdministrator': false,
                'createdByManager': true,
                'createdBySecretary': false,
                'redirectedManagerId': 'null',
                'redirectedAdvisorId': 'null',
                'redirectedBrokerId': 1,
                'company': {
                    'id': 1
                },
                'manager': {
                    'id': 1
                },
                'broker': {
                    'id': 1
                },
                'owner': {
                    'id': 1
                },
                'customer': {
                    'id': 1
                },
                'property': {
                    'id': 1
                },
                'lead': {
                    'id': 1
                },
                'createdAt': '2021-12-05T19:56:14.090Z',
                'updatedAt': '2021-12-05T19:56:14.090Z'
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
      * #swagger.responses[500] = {
            description: 'Erro interno',
            schema: { message: 'Erro no servidor ao processar a solicitação!' }
         }
      */
    businessController.create
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/{id}'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um negócio'
     * #swagger.description = 'Endpoint para buscar por um negócio'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do negócio',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por um negócio realizada com sucesso',
            schema: {
                'id': 1,
                'status': 0,
                'dateVisit': 'null',
                'dateSale': 'null',
                'visitForm': 'null',
                'propertyRegistration': 'null',
                'propertySaleContract': 'null',
                'ITBI': 'null',
                'customerRG': 'null',
                'customerCPF': 'null',
                'customerAddressProof': 'null',
                'customerPayslip': 'null',
                'ownerRG': 'null',
                'ownerCPF': 'null',
                'ownerAddressProof': 'null',
                'ownerPayslip': 'null',
                'createdByAdministrator': false,
                'createdByManager': true,
                'createdBySecretary': false,
                'redirectedManagerId': 'null',
                'redirectedAdvisorId': 'null',
                'redirectedBrokerId': 1,
                'createdAt': '2021-12-05T19:56:14.090Z',
                'updatedAt': '2021-12-05T19:56:14.090Z',
                'company': {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-12-03T23:18:28.221Z',
                    'updatedAt': '2021-12-03T23:18:28.221Z'
                },
                'owner': {
                    'id': 1,
                    'name': 'joseane',
                    'surname': 'ferreira',
                    'email': 'joseane.ferreira@gmail.com',
                    'birthDate': '2021-03-08',
                    'checked': false,
                    'isOwner': true,
                    'RG': '157882299',
                    'CPF': '20717934047',
                    'landline': '          ',
                    'cellPhone': '31986857815',
                    'profession': '',
                    'createdAt': '2021-12-04T20:53:23.134Z',
                    'updatedAt': '2021-12-04T20:53:23.134Z'
                },
                'customer': {
                    'id': 1,
                    'name': 'jose',
                    'surname': 'maria',
                    'email': 'jose.maria@gmail.com',
                    'birthDate': '2021-03-08',
                    'isCustomer': true,
                    'RG': '157882299',
                    'CPF': '20717934047',
                    'landline': '          ',
                    'cellPhone': '31986857815',
                    'profession': '',
                    'createdAt': '2021-12-05T19:45:19.119Z',
                    'updatedAt': '2021-12-05T19:45:19.119Z'
                },
                'property': {
                    'id': 1,
                    'description': 'casa de 2 andares, total de 14 cômodos',
                    'photos': {
                        'paths': []
                    },
                    'checked': false,
                    'elevator': 'null',
                    'bedrooms': 2,
                    'bathrooms': 5,
                    'suites': 0,
                    'parkingLots': 2,
                    'terrainArea': 1000,
                    'buildingArea': 800,
                    'totalUtilTerrainArea': 1000,
                    'condominium': 0,
                    'IPTU': 0,
                    'value': 450000,
                    'createdAt': '2021-12-03T23:20:06.093Z',
                    'updatedAt': '2021-12-03T23:20:06.093Z'
                },
                'lead': {
                    'id': 1,
                    'name': 'jose',
                    'surname': 'maria',
                    'email': 'jose.maria@gmail.com',
                    'source': 0,
                    'landline': '          ',
                    'cellPhone': '31986857815',
                    'comments': '',
                    'createdByAdministrator': false,
                    'createdByManager': true,
                    'createdBySecretary': false,
                    'createdAt': '2021-12-05T19:50:26.385Z',
                    'updatedAt': '2021-12-05T19:50:26.385Z'
                }
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do negócio',
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
    businessController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/{id}'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de um negócio'
     * #swagger.description = 'Endpoint para atualizar os dados de um negócio'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do negócio',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de um negócio',
            required: true,
            type: 'object',
            schema: {
                status: 'integer',
                dateVisit: 'date',
                dateSale: 'date',
                visitForm: 'string',
                propertyRegistration: 'string',
                propertySaleContract: 'string',
                ITBI: 'string',
                customerRG: 'string',
                customerCPF: 'string',
                customerAddressProof: 'string',
                customerPayslip: 'string',
                ownerRG: 'string',
                ownerCPF: 'string',
                ownerAddressProof: 'string',
                ownerPayslip: 'string',
                createdByAdministrator: 'boolean',
                createdByManager: 'boolean',
                createdBySecretary: 'boolean',
                redirectedManagerId: 'integer',
                redirectedAdvisorId: 'integer',
                redirectedBrokerId: 'integer',
                administrator: 'object',
                manager: 'object',
                advisor: 'object',
                broker: 'object',
                secretary: 'object',
                owner: 'object',
                customer: 'object',
                property: 'object',
                lead: 'object'
            }
        }
     * #swagger.responses[200] = {
            description: 'Atualização dos dados do negócio realizada com sucesso',
            schema: {
                'id': 1,
                'status': 0,
                'dateVisit': '2021-11-15T15:30:00.000Z',
                'dateSale': '2021-12-01T18:00:00.000Z',
                'visitForm': 'null',
                'propertyRegistration': 'null',
                'propertySaleContract': 'null',
                'ITBI': 'null',
                'customerRG': 'null',
                'customerCPF': 'null',
                'customerAddressProof': 'null',
                'customerPayslip': 'null',
                'ownerRG': 'null',
                'ownerCPF': 'null',
                'ownerAddressProof': 'null',
                'ownerPayslip': 'null',
                'createdByAdministrator': false,
                'createdByManager': true,
                'createdBySecretary': false,
                'redirectedManagerId': 'null',
                'redirectedAdvisorId': 'null',
                'redirectedBrokerId': 1,
                'manager': {
                    'id': 1
                },
                'owner': {
                    'id': 1
                },
                'customer': {
                    'id': 1
                },
                'property': {
                    'id': 1
                },
                'lead': {
                    'id': 1
                },
                'updatedAt': '2021-12-05T20:06:26.193Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do negócio | ID do negócio não encontrado na base de dados | Requisição com dados inválidos',
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
    businessController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/{id}'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta um negócio'
     * #swagger.description = 'Endpoint para deletar um negócio'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do negócio',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Deleção do negócio realizada com sucesso',
            schema: {
                'business': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do negócio',
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
    businessController.delete
);

router.put('/transfer/manager/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/transfer/manager/{id}'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Transfere um negócio para um gestor'
     * #swagger.description = 'Endpoint para transferir um negócio para um gestor'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do negócio',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para transferência de um negócio',
            required: true,
            type: 'object',
            schema: {
                manager: 'object'
            }
        }
     * #swagger.responses[200] = {
            description: 'Transferência do negócio realizada com sucesso',
            schema: {
                'business': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do negócio | ID do negócio não encontrado na base de dados',
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
    businessController.transferBusinessToManager
);

router.put('/transfer/advisor/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/transfer/advisor{id}'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Transfere um negócio para um despachante'
     * #swagger.description = 'Endpoint para transferir um negócio para um despachante'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do negócio',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para transferência de um negócio',
            required: true,
            type: 'object',
            schema: {
                advisor: 'object'
            }
        }
     * #swagger.responses[200] = {
            description: 'Transferência do negócio realizada com sucesso',
            schema: {
                'business': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do negócio | ID do negócio não encontrado na base de dados',
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
    businessController.transferBusinessToAdvisor
);

router.put('/transfer/broker/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/transfer/broker/{id}'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Transfere um negócio para um corretor'
     * #swagger.description = 'Endpoint para transferir um negócio para um corretor'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do negócio',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para transferência de um negócio',
            required: true,
            type: 'object',
            schema: {
                broker: 'object'
            }
        }
     * #swagger.responses[200] = {
            description: 'Transferência do negócio realizada com sucesso',
            schema: {
                'business': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do negócio | ID do negócio não encontrado na base de dados',
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
    businessController.transferBusinessToBroker
);

router.put('/reject/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/reject/{id}'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Rejeita um negócio'
     * #swagger.description = 'Endpoint para rejeitar um negócio'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do negócio',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Rejeição do negócio realizada com sucesso',
            schema: {
                'business': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do negócio | ID do negócio não encontrado na base de dados',
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
    businessController.rejectBusiness
);

router.put('/close/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/businesses/close/{id}'
     * #swagger.tags = ['Negócios']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Fecha um negócio'
     * #swagger.description = 'Endpoint para fechar um negócio'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do negócio',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Fechamento do negócio realizada com sucesso',
            schema: {
                'business': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do negócio | ID do negócio não encontrado na base de dados',
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
    businessController.closeBusiness
);

export default router;
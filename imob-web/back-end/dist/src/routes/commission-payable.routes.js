"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var commission_payable_controller_1 = require("../api/controllers/commission-payable.controller");
var commissionPayableController = new commission_payable_controller_1.CommissionPayableController();
var router = (0, express_1.Router)();
router.get('/payable', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/commissions-payable/payable'
 * #swagger.tags = ['Comissões a Pagar']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca pelos valores totais de comissões a pagar no mês'
 * #swagger.description = 'Endpoint para buscar os valores totais de comissões a pagar no mês'
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
        description: 'Busca pelos valores totais de comissões a pagar no mês realizada com sucesso',
        schema: {
            'totalValueClosedDeals': 750,
            'totalValuePropertyCaptured': 500
        }
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
commissionPayableController.payable);
router.get('/', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/commissions-payable'
 * #swagger.tags = ['Comissões a Pagar']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por todas as comissões a pagar'
 * #swagger.description = 'Endpoint para buscar por todas as comissões a pagar'
 * #swagger.responses[200] = {
        description: 'Busca por todas as comissões a pagar realizada com sucesso',
        schema: [
            {
                'id': 1,
                'date': '2021-12-02',
                'valueClosedDeals': 1000,
                'valuePropertyCaptured': 500,
                'createdAt': '2021-12-04T00:26:19.998Z',
                'updatedAt': '2021-12-04T00:26:19.998Z',
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
                'broker': {
                    'id': 1,
                    'name': 'tiago',
                    'surname': 'teixeira',
                    'email': 'tiago.teixeira@gmail.com',
                    'birthDate': '2021-12-03',
                    'isBroker': true,
                    'RG': '000000000',
                    'CPF': '00000000000',
                    'landline': 'null',
                    'cellPhone': '00000000000',
                    'profession': 'null',
                    'createdAt': '2021-12-03T23:18:55.447Z',
                    'updatedAt': '2021-12-03T23:18:55.447Z'
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
commissionPayableController.index);
router.post('/', 
/**
  * #swagger.security = [{ 'Token': [] }]
  * #swagger.path = '/commissions-payable'
  * #swagger.tags = ['Comissões a Pagar']
  * #swagger.method = 'post'
  * #swagger.consumes = ['application/json']
  * #swagger.produces = ['application/json']
  * #swagger.summary = 'Cria uma nova comissão a pagar'
  * #swagger.description = 'Endpoint para criar uma nova comissão a pagar'
  * #swagger.parameters['createCommissionPayable'] = {
        in: 'body',
        description: 'JSON com um objeto para criação de uma comissão a pagar',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/updateCommissionPayable'
        }
    }
  * #swagger.responses[201] = {
         description: 'Criação da comissão a pagar realizada com sucesso',
         schema: {
            'id': 1,
            'date': '2021-12-02',
            'valueClosedDeals': 1000,
            'valuePropertyCaptured': 500,
            'company': {
                'id': 1
            },
            'broker': {
                'id': 1
            },
            'property': {
                'id': 1
            },
            'createdAt': '2021-12-03T23:06:09.465Z',
            'updatedAt': '2021-12-03T23:06:09.465Z'
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
commissionPayableController.create);
router.get('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/commissions-payable/{id}'
 * #swagger.tags = ['Comissões a Pagar']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por uma comissão a pagar'
 * #swagger.description = 'Endpoint para buscar por uma comissão a pagar'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da comissão a pagar',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Busca por uma comissão a pagar realizada com sucesso',
        schema: {
            'id': 1,
            'date': '2021-12-02',
            'valueClosedDeals': 1000,
            'valuePropertyCaptured': 500,
            'createdAt': '2021-12-04T00:26:19.998Z',
            'updatedAt': '2021-12-04T00:26:19.998Z',
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
            'broker': {
                'id': 1,
                'name': 'tiago',
                'surname': 'teixeira',
                'email': 'tiago.teixeira@gmail.com',
                'birthDate': '2021-12-03',
                'isBroker': true,
                'RG': '000000000',
                'CPF': '00000000000',
                'landline': 'null',
                'cellPhone': '00000000000',
                'profession': 'null',
                'createdAt': '2021-12-03T23:18:55.447Z',
                'updatedAt': '2021-12-03T23:18:55.447Z'
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
            }
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID da comissão a pagar',
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
commissionPayableController.read);
router.put('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/commissions-payable/{id}'
 * #swagger.tags = ['Comissões a Pagar']
 * #swagger.method = 'put'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Atualiza os dados de uma comissão a pagar'
 * #swagger.description = 'Endpoint para atualizar os dados de uma comissão a pagar'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da comissão a pagar',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.parameters['updateCommissionPayable'] = {
        in: 'body',
        description: 'JSON com um objeto para atualização de uma comissão a pagar',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/updateCommissionPayable'
        }
    }
 * #swagger.responses[200] = {
        description: 'Atualização dos dados da comissão a pagar realizada com sucesso',
        schema: {
            'id': 1,
            'date': '2021-12-02',
            'valueClosedDeals': 0,
            'valuePropertyCaptured': 250,
            'updatedAt': '2021-12-04T00:38:01.963Z'
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID da comissão a pagar | ID da comissão a pagar não encontrado na base de dados | Requisição com dados inválidos',
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
commissionPayableController.update);
router.delete('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/commissions-payable/{id}'
 * #swagger.tags = ['Comissões a Pagar']
 * #swagger.method = 'delete'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Deleta uma comissão a pagar'
 * #swagger.description = 'Endpoint para deletar uma comissão a pagar'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da comissão a pagar',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Deleção da comissão a pagar realizada com sucesso',
        schema: {
            'commissionPayble': 1
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID da comissão a pagar',
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
commissionPayableController.delete);
exports.default = router;
//# sourceMappingURL=commission-payable.routes.js.map
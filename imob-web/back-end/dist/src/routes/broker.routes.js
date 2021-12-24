"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var broker_controller_1 = require("../api/controllers/broker.controller");
var brokerController = new broker_controller_1.BrokerController();
var router = (0, express_1.Router)();
router.get('/', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/brokers'
 * #swagger.tags = ['Corretores']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por todos os corretores'
 * #swagger.description = 'Endpoint para buscar por todos os corretores'
 * #swagger.responses[200] = {
        description: 'Busca por todos os corretores realizada com sucesso',
        schema: [
            {
                'id': 1,
                'name': 'tiago',
                'surname': 'teixeira',
                'email': 'tiago.teixeira@gmail.com',
                'birthDate': '2021-12-01',
                'isBroker': true,
                'RG': '000000000',
                'CPF': '00000000000',
                'landline': 'null',
                'cellPhone': '00000000000',
                'profession': 'null',
                'createdAt': '2021-12-02T01:15:49.827Z',
                'updatedAt': '2021-12-02T01:15:49.827Z',
                'company': {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-12-01T00:16:28.450Z',
                    'updatedAt': '2021-12-01T00:16:28.450Z'
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
brokerController.index);
/* router.post('/', brokerController.create); */
router.get('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/brokers/{id}'
 * #swagger.tags = ['Corretores']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por um corretor'
 * #swagger.description = 'Endpoint para buscar por um corretor'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do corretor',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Busca por um corretor realizada com sucesso',
        schema: {
            'id': 1,
            'name': 'tiago',
            'surname': 'teixeira',
            'email': 'tiago.teixeira@gmail.com',
            'birthDate': '2021-12-01',
            'isBroker': true,
            'RG': '000000000',
            'CPF': '00000000000',
            'landline': 'null',
            'cellPhone': '00000000000',
            'profession': 'null',
            'createdAt': '2021-12-02T01:15:49.827Z',
            'updatedAt': '2021-12-02T01:15:49.827Z',
            'company': {
                'id': 1,
                'CNPJ': '00000000000000',
                'corporateName': 'Empresa Cadastrada Automaticamente',
                'stateRegistration': '0000000000',
                'percentageCommissionReceivable': 0,
                'percentageCommissionPayableForClosedDeals': 0,
                'percentageCommissionPayableForPropertyCaptured': 0,
                'createdAt': '2021-12-01T00:16:28.450Z',
                'updatedAt': '2021-12-01T00:16:28.450Z'
            }
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do corretor',
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
brokerController.read);
router.put('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/brokers/{id}'
 * #swagger.tags = ['Corretores']
 * #swagger.method = 'put'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Atualiza os dados de um corretor'
 * #swagger.description = 'Endpoint para atualizar os dados de um corretor'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do corretor',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.parameters['updateBroker'] = {
        in: 'body',
        description: 'JSON com um objeto para atualização de um corretor',
        required: true,
        type: 'object',
        schema: {
            $ref: '#definitions/updateBroker'
        }
    }
 * #swagger.responses[200] = {
        description: 'Atualização dos dados do corretor realizada com sucesso',
        schema: {
            'id': 1,
            'name': 'tiago',
            'surname': 'teixeira',
            'email': 'tiago.teixeira@gmail.com',
            'birthDate': '2021-03-08',
            'RG': '157882299',
            'CPF': '20717934047',
            'landline': '3133228544',
            'cellPhone': '31986857815',
            'profession': 'corretor',
            'updatedAt': '2021-12-02T01:18:52.098Z'
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do corretor | ID do corretor não encontrado na base de dados | Requisição com dados inválidos',
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
brokerController.update);
router.delete('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/brokers/{id}'
 * #swagger.tags = ['Corretores']
 * #swagger.method = 'delete'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Deleta um corretor'
 * #swagger.description = 'Endpoint para deletar um corretor'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do corretor',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Deleção do corretor realizada com sucesso',
        schema: {
            'user': 1,
            'broker': 1
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do corretor',
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
brokerController.delete);
exports.default = router;
//# sourceMappingURL=broker.routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var advisor_controller_1 = require("../api/controllers/advisor.controller");
var advisorController = new advisor_controller_1.AdvisorController();
var router = (0, express_1.Router)();
router.get('/', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/advisors'
 * #swagger.tags = ['Despachantes']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por todos os despachantes'
 * #swagger.description = 'Endpoint para buscar por todos os despachantes'
 * #swagger.responses[200] = {
        description: 'Busca por todos os despachantes realizada com sucesso',
        schema: [
            {
                'id': 1,
                'name': 'maria',
                'surname': 'tereza',
                'email': 'maria.tereza@gmail.com',
                'birthDate': '2021-11-30',
                'isAdvisor': true,
                'RG': '000000000',
                'CPF': '00000000000',
                'landline': 'null',
                'cellPhone': '00000000000',
                'profession': 'null',
                'createdAt': '2021-12-01T00:13:41.965Z',
                'updatedAt': '2021-12-01T00:13:41.965Z',
                'company': {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-12-01T00:13:41.922Z',
                    'updatedAt': '2021-12-01T00:13:41.922Z'
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
advisorController.index);
/* router.post('/', advisorController.create); */
router.get('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/advisors/{id}'
 * #swagger.tags = ['Despachantes']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por um despachante'
 * #swagger.description = 'Endpoint para buscar por um despachante'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do despachante',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Busca por um despachante realizada com sucesso',
        schema: {
            'id': 1,
            'name': 'maria',
            'surname': 'tereza',
            'email': 'maria.tereza@gmail.com',
            'birthDate': '2021-11-30',
            'isAdvisor': true,
            'RG': '000000000',
            'CPF': '00000000000',
            'landline': 'null',
            'cellPhone': '00000000000',
            'profession': 'null',
            'createdAt': '2021-12-01T00:13:41.965Z',
            'updatedAt': '2021-12-01T00:13:41.965Z',
            'company': {
                'id': 1,
                'CNPJ': '00000000000000',
                'corporateName': 'Empresa Cadastrada Automaticamente',
                'stateRegistration': '0000000000',
                'percentageCommissionReceivable': 0,
                'percentageCommissionPayableForClosedDeals': 0,
                'percentageCommissionPayableForPropertyCaptured': 0,
                'createdAt': '2021-12-01T00:13:41.922Z',
                'updatedAt': '2021-12-01T00:13:41.922Z'
            }
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do despachante',
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
advisorController.read);
router.put('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/advisors/{id}'
 * #swagger.tags = ['Despachantes']
 * #swagger.method = 'put'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Atualiza os dados de um despachante'
 * #swagger.description = 'Endpoint para atualizar os dados de um despachante'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do despachante',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.parameters['updateAdvisor'] = {
        in: 'body',
        description: 'JSON com um objeto para atualização de um despachante',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/updateAdvisor'
        }
    }
 * #swagger.responses[200] = {
        description: 'Atualização dos dados do despachante realizada com sucesso',
        schema: {
            'id': 1,
            'name': 'maria',
            'surname': 'tereza',
            'email': 'maria.tereza@gmail.com',
            'birthDate': '2021-03-08',
            'RG': '157882299',
            'CPF': '20717934047',
            'landline': '3133228544',
            'cellPhone': '31986857815',
            'profession': 'despachante',
            'updatedAt': '2021-12-02T01:08:46.606Z'
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do despachante | ID do despachante não encontrado na base de dados | Requisição com dados inválidos',
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
advisorController.update);
router.delete('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/advisors/{id}'
 * #swagger.tags = ['Despachantes']
 * #swagger.method = 'delete'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Deleta um despachante'
 * #swagger.description = 'Endpoint para deletar um despachante'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do despachante',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Deleção do despachante realizada com sucesso',
        schema: {
            'user': 1,
            'advisor': 1
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do despachante',
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
advisorController.delete);
exports.default = router;
//# sourceMappingURL=advisor.routes.js.map
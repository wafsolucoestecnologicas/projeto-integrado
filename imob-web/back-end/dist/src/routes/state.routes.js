"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var state_controller_1 = require("../api/controllers/state.controller");
var stateController = new state_controller_1.StateController();
var router = (0, express_1.Router)();
router.get('/', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/states'
 * #swagger.tags = ['Estados']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por todos os estados'
 * #swagger.description = 'Endpoint para buscar por todos os estados'
 * #swagger.responses[200] = {
        description: 'Busca por todos os estados realizada com sucesso',
        schema: [
            {
                'id': 1,
                'state': 'acre',
                'UF': 'AC'
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
stateController.index);
router.get('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/states/{id}'
 * #swagger.tags = ['Estados']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por um estado'
 * #swagger.description = 'Endpoint para buscar por um estado'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do estado',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Busca por um estado realizada com sucesso',
        schema: {
            'id': 1,
            'state': 'acre',
            'UF': 'AC'
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do estado',
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
stateController.read);
exports.default = router;
//# sourceMappingURL=state.routes.js.map
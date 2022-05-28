"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var neighborhood_controller_1 = require("../api/controllers/neighborhood.controller");
var neighborhoodController = new neighborhood_controller_1.NeighborhoodController();
var router = (0, express_1.Router)();
router.get('/', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/neighborhoods'
 * #swagger.tags = ['Bairros']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por todos os bairros'
 * #swagger.description = 'Endpoint para buscar por todos os bairros'
 * #swagger.responses[200] = {
        description: 'Busca por todos os bairros realizada com sucesso',
        schema: [
            {
                'id': 1,
                'neighborhood': 'itaipú (barreiro)',
                'city': {
                    'id': 1,
                    'city': 'contagem'
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
neighborhoodController.index);
router.post('/', 
/**
  * #swagger.security = [{ 'Token': [] }]
  * #swagger.path = '/neighborhoods'
  * #swagger.tags = ['Bairros']
  * #swagger.method = 'post'
  * #swagger.consumes = ['application/json']
  * #swagger.produces = ['application/json']
  * #swagger.summary = 'Cria um novo bairro'
  * #swagger.description = 'Endpoint para criar um novo bairro'
  * #swagger.parameters['createNeighborhood'] = {
        in: 'body',
        description: 'JSON com um objeto para criação de um bairro',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/createNeighborhood'
        }
    }
  * #swagger.responses[201] = {
         description: 'Criação do bairro realizada com sucesso',
         schema: {
            'id': 1,
            'neighborhood': 'itaipú (barreiro)',
            'city': {
                'id': 1
            }
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
neighborhoodController.create);
router.get('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/neighborhoods/{id}'
 * #swagger.tags = ['Bairros']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por um bairro'
 * #swagger.description = 'Endpoint para buscar por um bairro'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do bairro',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Busca por um bairro realizada com sucesso',
        schema: {
            'id': 1,
            'neighborhood': 'itaipú (barreiro)',
            'city': {
                'id': 1,
                'city': 'contagem'
            }
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do bairro',
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
neighborhoodController.read);
router.put('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/neighborhoods/{id}'
 * #swagger.tags = ['Bairros']
 * #swagger.method = 'put'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Atualiza os dados de um bairro'
 * #swagger.description = 'Endpoint para atualizar os dados de um bairro'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do bairro',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.parameters['updateNeighborhood'] = {
        in: 'body',
        description: 'JSON com um objeto para atualização de um bairro',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/updateNeighborhood'
        }
    }
 * #swagger.responses[200] = {
        description: 'Atualização dos dados do bairro realizada com sucesso',
        schema: {
            'id': 1,
            'neighborhood': 'riacho das pedras',
            'city': {
                'id': 2
            }
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do bairro | ID do bairro não encontrado na base de dados | Requisição com dados inválidos',
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
neighborhoodController.update);
router.delete('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/neighborhoods/{id}'
 * #swagger.tags = ['Bairros']
 * #swagger.method = 'delete'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Deleta um bairro'
 * #swagger.description = 'Endpoint para deletar um bairro'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do bairro',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Deleção do bairro realizada com sucesso',
        schema: {
            'neighborhood': 1
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do bairro',
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
neighborhoodController.delete);
exports.default = router;
//# sourceMappingURL=neighborhood.routes.js.map
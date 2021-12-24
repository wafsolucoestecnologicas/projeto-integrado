"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var city_controller_1 = require("../api/controllers/city.controller");
var cityController = new city_controller_1.CityController();
var router = (0, express_1.Router)();
router.get('/', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/cities'
 * #swagger.tags = ['Cidades']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por todas as cidades'
 * #swagger.description = 'Endpoint para buscar por todas as cidades'
 * #swagger.responses[200] = {
        description: 'Busca por todas as cidades realizada com sucesso',
        schema: [
            {
                'id': 1,
                'city': 'belo horizonte',
                'state': {
                    'id': 12,
                    'state': 'minas gerais',
                    'UF': 'MG'
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
cityController.index);
router.post('/', 
/**
  * #swagger.security = [{ 'Token': [] }]
  * #swagger.path = '/cities'
  * #swagger.tags = ['Cidades']
  * #swagger.method = 'post'
  * #swagger.consumes = ['application/json']
  * #swagger.produces = ['application/json']
  * #swagger.summary = 'Cria uma nova cidade'
  * #swagger.description = 'Endpoint para criar uma nova cidade'
  * #swagger.parameters['createCity'] = {
        in: 'body',
        description: 'JSON com um objeto para criação de uma cidade',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/createCity'
        }
    }
  * #swagger.responses[201] = {
         description: 'Criação da cidade realizada com sucesso',
         schema: {
             'id': 1,
            'city': 'belo horizonte',
            'state': {
                'id': 12
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
cityController.create);
router.get('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/cities/{id}'
 * #swagger.tags = ['Cidades']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por uma cidade'
 * #swagger.description = 'Endpoint para buscar por uma cidade'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da cidade',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Busca por uma cidade realizada com sucesso',
        schema: {
            'id': 1,
            'city': 'belo horizonte',
            'state': {
                'id': 12,
                'state': 'minas gerais',
                'UF': 'MG'
            }
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID da cidade',
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
cityController.read);
router.put('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/cities/{id}'
 * #swagger.tags = ['Cidades']
 * #swagger.method = 'put'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Atualiza os dados de uma cidade'
 * #swagger.description = 'Endpoint para atualizar os dados de uma cidade'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da cidade',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.parameters['updateCity'] = {
        in: 'body',
        description: 'JSON com um objeto para atualização de uma cidade',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/updateCity'
        }
    }
 * #swagger.responses[200] = {
        description: 'Atualização dos dados da cidade realizada com sucesso',
        schema: {
            'id': 1,
            'city': 'contagem',
            'state': {
                'id': 12
            }
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID da cidade | ID da cidade não encontrado na base de dados | Requisição com dados inválidos',
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
cityController.update);
router.delete('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/cities/{id}'
 * #swagger.tags = ['Cidades']
 * #swagger.method = 'delete'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Deleta uma cidade'
 * #swagger.description = 'Endpoint para deletar uma cidade'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID da cidade',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Deleção da cidade realizada com sucesso',
        schema: {
            'city': 1
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID da cidade',
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
cityController.delete);
exports.default = router;
//# sourceMappingURL=city.routes.js.map
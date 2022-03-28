"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var property_controller_1 = require("../api/controllers/property.controller");
var propertyController = new property_controller_1.PropertyController();
var router = (0, express_1.Router)();
router.get('/', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/properties'
 * #swagger.tags = ['Imóveis']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por todos os imóveis'
 * #swagger.description = 'Endpoint para buscar por todos os imóveis'
 * #swagger.responses[200] = {
        description: 'Busca por todos os imóveis realizada com sucesso',
        schema: [
            {
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
                'createdAt': '2021-12-03T00:09:37.800Z',
                'updatedAt': '2021-12-03T00:09:37.800Z'
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
propertyController.index);
router.post('/', 
/**
  * #swagger.security = [{ 'Token': [] }]
  * #swagger.path = '/properties'
  * #swagger.tags = ['Imóveis']
  * #swagger.method = 'post'
  * #swagger.consumes = ['application/json']
  * #swagger.produces = ['application/json']
  * #swagger.summary = 'Cria um novo imóvel'
  * #swagger.description = 'Endpoint para criar um novo imóvel'
  * #swagger.parameters['createProperty'] = {
        in: 'body',
        description: 'JSON com um objeto para criação de um imóvel',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/createProperty'
        }
    }
  * #swagger.responses[201] = {
        description: 'Criação do imóvel realizada com sucesso',
        schema: {
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
            'company': {
                'id': 1
            },
            'manager': {
                'id': 2
            },
            'createdAt': '2021-12-03T00:09:37.800Z',
            'updatedAt': '2021-12-03T00:09:37.800Z'
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
propertyController.create);
router.get('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/properties/{id}'
 * #swagger.tags = ['Imóveis']
 * #swagger.method = 'get'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Busca por um imóvel'
 * #swagger.description = 'Endpoint para buscar por um imóvel'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do imóvel',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Busca por um imóvel realizada com sucesso',
        schema: {
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
            'createdAt': '2021-12-03T00:09:37.800Z',
            'updatedAt': '2021-12-03T00:09:37.800Z'
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do imóvel',
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
propertyController.read);
router.put('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/properties/{id}'
 * #swagger.tags = ['Imóveis']
 * #swagger.method = 'put'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Atualiza os dados de um imóvel'
 * #swagger.description = 'Endpoint para atualizar os dados de um imóvel'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do imóvel',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.parameters['updateProperty'] = {
        in: 'body',
        description: 'JSON com um objeto para atualização de um imóvel',
        required: true,
        type: 'object',
        schema: {
            $ref: '#/definitions/updateProperty'
        }
    }
 * #swagger.responses[200] = {
        description: 'Atualização dos dados do imóvel realizada com sucesso',
        schema: {
            'id': 1,
            'description': 'casa de 1 andar',
            'photos': {
                'paths': []
            },
            'checked': true,
            'elevator': true,
            'bedrooms': 3,
            'bathrooms': 3,
            'suites': 1,
            'parkingLots': 2,
            'terrainArea': 1000,
            'buildingArea': 800,
            'totalUtilTerrainArea': 1000,
            'condominium': 250.50,
            'IPTU': 1500.75,
            'value': 500975.25,
            'updatedAt': '2021-12-03T00:53:11.688Z'
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do imóvel | ID do imóvel não encontrado na base de dados | Requisição com dados inválidos',
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
propertyController.update);
router.delete('/:id', 
/**
 * #swagger.security = [{ 'Token': [] }]
 * #swagger.path = '/properties/{id}'
 * #swagger.tags = ['Imóveis']
 * #swagger.method = 'delete'
 * #swagger.consumes = ['application/json']
 * #swagger.produces = ['application/json']
 * #swagger.summary = 'Deleta um imóvel'
 * #swagger.description = 'Endpoint para deletar um imóvel'
 * #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do imóvel',
        required: true,
        type: 'integer',
        schema: {
            $ref: '#/definitions/id'
        }
    }
 * #swagger.responses[200] = {
        description: 'Deleção do imóvel realizada com sucesso',
        schema: {
            'property': 1
        }
    }
 * #swagger.responses[400] = {
        description: 'Requisição sem o ID do imóvel',
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
propertyController.delete);
exports.default = router;
//# sourceMappingURL=property.routes.js.map
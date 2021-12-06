import { Router } from 'express';
import { NeighborhoodController } from '../api/controllers/neighborhood.controller';

const neighborhoodController: NeighborhoodController = new NeighborhoodController();
const router: Router = Router();

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
                    'neighborhood': 'ITAIPÚ',
                    'city': {
                        'id': 1,
                        'city': 'CONTAGEM'
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
    neighborhoodController.index
);

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
      * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para criação de um bairro',
            required: true,
            type: 'object',
            schema: {
                neighborhood: 'string',
                city: 'object'
            }
        }
      * #swagger.responses[201] = {
             description: 'Criação do bairro realizada com sucesso',
             schema: {
                'id': 1,
                'neighborhood': 'itaipú',
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
    neighborhoodController.create
);

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
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por um bairro realizada com sucesso',
            schema: {
                'id': 1,
                'neighborhood': 'ITAIPÚ',
                'city': {
                    'id': 1,
                    'city': 'CONTAGEM'
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
    neighborhoodController.read
);

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
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de um bairro',
            required: true,
            type: 'object',
            schema: {
                neighboorhod: 'string'
            }
        }
     * #swagger.responses[200] = {
            description: 'Atualização dos dados do bairro realizada com sucesso',
            schema: {
                'id': 1,
                'neighborhood': 'riacho das pedras'
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
    neighborhoodController.update
);

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
            type: 'integer'
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
    neighborhoodController.delete
);

export default router;
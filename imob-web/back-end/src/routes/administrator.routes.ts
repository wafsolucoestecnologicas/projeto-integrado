import { Router } from 'express';
import { AdministratorController } from '../api/controllers/administrator.controller';

const administratorController: AdministratorController = new AdministratorController();
const router: Router = Router();

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/administrators'
     * #swagger.tags = ['Administradores']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os administradores'
     * #swagger.description = 'Endpoint para buscar por todos os administradores'
     * #swagger.responses[200] = {
            description: 'Busca por todos os administradores realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'name': 'heitor',
                    'surname': 'felix',
                    'email': 'heitor.felix@gmail.com',
                    'birthDate': '2021-11-29',
                    'isAdministrator': true,
                    'RG': '000000000',
                    'CPF': '00000000000',
                    'landline': 'null',
                    'cellPhone': '00000000000',
                    'profession': 'null',
                    'createdAt': '2021-11-30T02:13:52.795Z',
                    'updatedAt': '2021-11-30T02:13:52.795Z'
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
    administratorController.index
);

/* router.post('/', administratorController.create); */

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/administrators/{id}'
     * #swagger.tags = ['Administradores']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um administrador'
     * #swagger.description = 'Endpoint para buscar por um administrador'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do administrador',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por um administrador realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'heitor',
                'surname': 'felix',
                'email': 'heitor.felix@gmail.com',
                'birthDate': '2021-11-29',
                'isAdministrator': true,
                'RG': '000000000',
                'CPF': '00000000000',
                'landline': 'null',
                'cellPhone': '00000000000',
                'profession': 'null',
                'createdAt': '2021-11-30T02:13:52.795Z',
                'updatedAt': '2021-11-30T02:13:52.795Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do administrador',
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
    administratorController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/administrators/{id}'
     * #swagger.tags = ['Administradores']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de um administrador'
     * #swagger.description = 'Endpoint para atualizar os dados de um administrador'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do administrador',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de um administrador',
            required: true,
            type: 'object',
            schema: {
                name: 'string',
                surname: 'string',
                email: 'string',
                birthDate: 'string',
                RG: 'string',
                CPF: 'string',
                landline: 'string',
                cellPhone: 'string',
                profession: 'string'
            }
        }
     * #swagger.responses[200] = {
            description: 'Atualização dos dados do administrador realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'heitor',
                'surname': 'miranda',
                'email': 'heitor.miranda@gmail.com',
                'birthDate': '1989-06-16',
                'RG': '157882299',
                'CPF': '09126126621',
                'landline': '',
                'cellPhone': '31986857812',
                'profession': 'desenvolvedor web',
                'updatedAt': '2021-11-30T02:17:59.814Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do administrador | ID do administrador não encontrado na base de dados | Requisição com dados inválidos',
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
    administratorController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/administrators/{id}'
     * #swagger.tags = ['Administradores']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta um administrador'
     * #swagger.description = 'Endpoint para deletar um administrador'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do administrador',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Deleção do administrador realizada com sucesso',
            schema: {
                'user': 1,
                'administrator': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do administrador',
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
    administratorController.delete
);

export default router;
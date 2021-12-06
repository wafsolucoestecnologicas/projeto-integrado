import { Router } from 'express';
import { ManagerController } from '../api/controllers/manager.controller';

const managerController: ManagerController = new ManagerController();
const router: Router = Router();

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/managers'
     * #swagger.tags = ['Gestores']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os gestores'
     * #swagger.description = 'Endpoint para buscar por todos os gestores'
     * #swagger.responses[200] = {
            description: 'Busca por todos os gestores realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'name': 'joao',
                    'surname': 'almeida',
                    'email': 'joao.almeida@gmail.com',
                    'birthDate': '2021-11-30',
                    'isManager': true,
                    'RG': '000000000',
                    'CPF': '00000000000',
                    'landline': 'null',
                    'cellPhone': '00000000000',
                    'profession': 'null',
                    'createdAt': '2021-12-01T00:08:58.661Z',
                    'updatedAt': '2021-12-01T00:08:58.661Z',
                    'company': {
                        'id': 2,
                        'CNPJ': '00000000000000',
                        'corporateName': 'Empresa Cadastrada Automaticamente',
                        'stateRegistration': '0000000000',
                        'percentageCommissionReceivable': 0,
                        'percentageCommissionPayableForClosedDeals': 0,
                        'percentageCommissionPayableForPropertyCaptured': 0,
                        'createdAt': '2021-12-01T00:08:58.614Z',
                        'updatedAt': '2021-12-01T00:08:58.614Z'
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
    managerController.index
);

/* router.post('/', managerController.create); */

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/managers/{id}'
     * #swagger.tags = ['Gestores']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um gestor'
     * #swagger.description = 'Endpoint para buscar por um gestor'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do gestor',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por um gestor realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'joao',
                'surname': 'almeida',
                'email': 'joao.almeida@gmail.com',
                'birthDate': '2021-11-30',
                'isManager': true,
                'RG': '000000000',
                'CPF': '00000000000',
                'landline': 'null',
                'cellPhone': '00000000000',
                'profession': 'null',
                'createdAt': '2021-12-01T00:08:58.661Z',
                'updatedAt': '2021-12-01T00:08:58.661Z',
                'company': {
                    'id': 2,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-12-01T00:08:58.614Z',
                    'updatedAt': '2021-12-01T00:08:58.614Z'
                }
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do gestor',
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
    managerController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/managers/{id}'
     * #swagger.tags = ['Gestores']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de um gestor'
     * #swagger.description = 'Endpoint para atualizar os dados de um gestor'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do gestor',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de um gestor',
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
            description: 'Atualização dos dados do gestor realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'joao',
                'surname': 'almeida',
                'email': 'joao.almeida@gmail.com',
                'birthDate': '2021-03-08',
                'RG': '157882299',
                'CPF': '20717934047',
                'landline': '',
                'cellPhone': '31986857815',
                'profession': '',
                'updatedAt': '2021-12-01T00:11:59.520Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do gestor | ID do gestor não encontrado na base de dados | Requisição com dados inválidos',
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
    managerController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/managers/{id}'
     * #swagger.tags = ['Gestores']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta um gestor'
     * #swagger.description = 'Endpoint para deletar um gestor'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do gestor',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Deleção do gestor realizada com sucesso',
            schema: {
                'user': 1,
                'manager': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do gestor',
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
    managerController.delete
);

export default router;
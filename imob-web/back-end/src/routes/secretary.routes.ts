import { Router } from 'express';
import { SecretaryController } from '../api/controllers/secretary.controller';

const secretaryController: SecretaryController = new SecretaryController();
const router: Router = Router();

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/secretaries'
     * #swagger.tags = ['Secretárias']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os secretárias'
     * #swagger.description = 'Endpoint para buscar por todas as secretárias'
     * #swagger.responses[200] = {
            description: 'Busca por todas as secretárias realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'name': 'mariana',
                    'surname': 'ramos',
                    'email': 'mariana.ramos@gmail.com',
                    'birthDate': '2021-12-01',
                    'isSecretary': true,
                    'RG': '000000000',
                    'CPF': '00000000000',
                    'landline': 'null',
                    'cellPhone': '00000000000',
                    'profession': 'null',
                    'createdAt': '2021-12-02T01:20:57.296Z',
                    'updatedAt': '2021-12-02T01:20:57.296Z',
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
    secretaryController.index
);

/* router.post('/', secretaryController.create); */

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/secretaries/{id}'
     * #swagger.tags = ['Secretárias']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um secretária'
     * #swagger.description = 'Endpoint para buscar por uma secretária'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da secretária',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por uma secretária realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'mariana',
                'surname': 'ramos',
                'email': 'mariana.ramos@gmail.com',
                'birthDate': '2021-12-01',
                'isSecretary': true,
                'RG': '000000000',
                'CPF': '00000000000',
                'landline': 'null',
                'cellPhone': '00000000000',
                'profession': 'null',
                'createdAt': '2021-12-02T01:20:57.296Z',
                'updatedAt': '2021-12-02T01:20:57.296Z',
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
            description: 'Requisição sem o ID da secretária',
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
    secretaryController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/secretaries/{id}'
     * #swagger.tags = ['Secretárias']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de um secretária'
     * #swagger.description = 'Endpoint para atualizar os dados de uma secretária'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da secretária',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de uma secretária',
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
            description: 'Atualização dos dados da secretária realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'mariana',
                'surname': 'ramos',
                'email': 'mariana.ramos@gmail.com',
                'birthDate': '2021-03-08',
                'RG': '157882299',
                'CPF': '20717934047',
                'landline': '',
                'cellPhone': '31986857815',
                'profession': '',
                'updatedAt': '2021-12-02T01:22:43.064Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da secretária | ID da secretária não encontrado na base de dados | Requisição com dados inválidos',
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
    secretaryController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/secretaries/{id}'
     * #swagger.tags = ['Secretárias']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta um secretária'
     * #swagger.description = 'Endpoint para deletar uma secretária'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da secretária',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Deleção da secretária realizada com sucesso',
            schema: {
                'user': 1,
                'secretary': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da secretária',
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
    secretaryController.delete
);

export default router;
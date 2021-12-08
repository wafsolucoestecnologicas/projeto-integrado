import { Router } from 'express';
import { CustomerController } from '../api/controllers/customer.controller';

const customerController: CustomerController = new CustomerController();
const router: Router = Router();

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/customers'
     * #swagger.tags = ['Clientes']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os clientes'
     * #swagger.description = 'Endpoint para buscar por todos os clientes'
     * #swagger.responses[200] = {
            description: 'Busca por todos os clientes realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'name': 'florisvaldo',
                    'surname': 'miranda',
                    'email': 'florisvaldo.miranda@gmail.com',
                    'birthDate': '2021-03-08',
                    'isCustomer': true,
                    'RG': '157882299',
                    'CPF': '20717934047',
                    'landline': '          ',
                    'cellPhone': '31986857815',
                    'profession': '',
                    'createdAt': '2021-12-02T02:00:52.863Z',
                    'updatedAt': '2021-12-02T02:00:52.863Z',
                    'company': {
                        'id': 1,
                        'CNPJ': '00000000000000',
                        'corporateName': 'Empresa Cadastrada Automaticamente',
                        'stateRegistration': '0000000000',
                        'percentageCommissionReceivable': 0,
                        'percentageCommissionPayableForClosedDeals': 0,
                        'percentageCommissionPayableForPropertyCaptured': 0,
                        'createdAt': '2021-11-30T02:13:52.729Z',
                        'updatedAt': '2021-11-30T02:13:52.729Z'
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
    customerController.index
);

router.post('/',
    /**
      * #swagger.security = [{ 'Token': [] }]
      * #swagger.path = '/customers'
      * #swagger.tags = ['Clientes']
      * #swagger.method = 'post'
      * #swagger.consumes = ['application/json']
      * #swagger.produces = ['application/json']
      * #swagger.summary = 'Cria um novo cliente'
      * #swagger.description = 'Endpoint para criar um novo cliente'
      * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para criação de um cliente',
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
      * #swagger.responses[201] = {
            description: 'Criação do cliente realizada com sucesso',
                schema: {
                'id': 1,
                'name': 'florisvaldo',
                'surname': 'miranda',
                'email': 'florisvaldo.miranda@gmail.com',
                'birthDate': '2021-03-08',
                'isCustomer': true,
                'RG': '157882299',
                'CPF': '20717934047',
                'landline': '          ',
                'cellPhone': '31986857815',
                'profession': '',
                'company': {
                    'id': 1
                },
                'createdAt': '2021-12-02T02:00:52.863Z',
                'updatedAt': '2021-12-02T02:00:52.863Z'
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
      * #swagger.responses[409] = {
            description: 'CPF já existe na base de dados',
            schema: { message: 'Solicitação atual conflitou com o recurso que está no servidor!' }
        }
      * #swagger.responses[500] = {
            description: 'Erro interno',
            schema: { message: 'Erro no servidor ao processar a solicitação!' }
        }
      */
    customerController.create
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/customers/{id}'
     * #swagger.tags = ['Clientes']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um cliente'
     * #swagger.description = 'Endpoint para buscar por um cliente'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do cliente',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por um cliente realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'florisvaldo',
                'surname': 'miranda',
                'email': 'florisvaldo.miranda@gmail.com',
                'birthDate': '2021-03-08',
                'isCustomer': true,
                'RG': '157882299',
                'CPF': '20717934047',
                'landline': '          ',
                'cellPhone': '31986857815',
                'profession': '',
                'createdAt': '2021-12-02T02:00:52.863Z',
                'updatedAt': '2021-12-02T02:00:52.863Z',
                'company': {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-11-30T02:13:52.729Z',
                    'updatedAt': '2021-11-30T02:13:52.729Z'
                }
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do cliente',
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
    customerController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/customers/{id}'
     * #swagger.tags = ['Clientes']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de um cliente'
     * #swagger.description = 'Endpoint para atualizar os dados de um cliente'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do cliente',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de um cliente',
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
            description: 'Atualização dos dados do cliente realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'florisvaldo',
                'surname': 'miranda',
                'email': 'florisvaldo.miranda@gmail.com',
                'birthDate': '2021-03-08',
                'RG': '157882299',
                'CPF': '20717934047',
                'landline': '3133228544',
                'cellPhone': '31986857815',
                'profession': 'jardineiro',
                'updatedAt': '2021-12-02T02:03:59.995Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do cliente | ID do cliente não encontrado na base de dados | Requisição com dados inválidos',
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
    customerController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/customers/{id}'
     * #swagger.tags = ['Clientes']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta um cliente'
     * #swagger.description = 'Endpoint para deletar um cliente'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do cliente',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Deleção do cliente realizada com sucesso',
            schema: {
                'customer': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do cliente',
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
    customerController.delete
);

export default router;
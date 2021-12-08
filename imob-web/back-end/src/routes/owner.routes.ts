import { Router } from 'express';
import { OwnerController } from '../api/controllers/owner.controller';

const ownerController: OwnerController = new OwnerController();
const router: Router = Router();

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/owners'
     * #swagger.tags = ['Proprietários']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os proprietários'
     * #swagger.description = 'Endpoint para buscar por todos os proprietários'
     * #swagger.responses[200] = {
            description: 'Busca por todos os proprietários realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'name': 'cesar',
                    'surname': 'brito',
                    'email': 'cesar.brito@gmail.com',
                    'birthDate': '2021-03-08',
                    'checked': false,
                    'isOwner': true,
                    'RG': '157882299',
                    'CPF': '20717934047',
                    'landline': '          ',
                    'cellPhone': '31986857815',
                    'profession': '',
                    'createdAt': '2021-12-02T01:49:25.438Z',
                    'updatedAt': '2021-12-02T01:49:25.438Z',
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
    ownerController.index
);

router.post('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/owners'
     * #swagger.tags = ['Proprietários']
     * #swagger.method = 'post'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Cria um novo proprietário'
     * #swagger.description = 'Endpoint para criar um novo proprietário'
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para criação de um proprietário',
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
                profession: 'string',
                checked: 'boolean'
            }
        }
     * #swagger.responses[201] = {
            description: 'Criação do proprietário realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'cesar',
                'surname': 'brito',
                'email': 'cesar.brito@gmail.com',
                'birthDate': '2021-03-08',
                'checked': false,
                'isOwner': true,
                'RG': '157882299',
                'CPF': '20717934047',
                'landline': '          ',
                'cellPhone': '31986857815',
                'profession': '',
                'company': {
                    'id': 1
                },
                'createdAt': '2021-12-02T01:49:25.438Z',
                'updatedAt': '2021-12-02T01:49:25.438Z'
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
    ownerController.create
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/owners/{id}'
     * #swagger.tags = ['Proprietários']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um proprietário'
     * #swagger.description = 'Endpoint para buscar por um proprietário'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do proprietário',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por um proprietário realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'cesar',
                'surname': 'brito',
                'email': 'cesar.brito@gmail.com',
                'birthDate': '2021-03-08',
                'checked': false,
                'isOwner': true,
                'RG': '157882299',
                'CPF': '20717934047',
                'landline': '          ',
                'cellPhone': '31986857815',
                'profession': '',
                'createdAt': '2021-12-02T01:49:25.438Z',
                'updatedAt': '2021-12-02T01:49:25.438Z',
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
            description: 'Requisição sem o ID do proprietário',
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
    ownerController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/owners/{id}'
     * #swagger.tags = ['Proprietários']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de um proprietário'
     * #swagger.description = 'Endpoint para atualizar os dados de um proprietário'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do proprietário',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de um proprietário',
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
            description: 'Atualização dos dados do proprietário realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'cesar',
                'surname': 'brito',
                'email': 'cesar.brito@gmail.com',
                'birthDate': '2021-03-08',
                'RG': '157882299',
                'CPF': '20717934047',
                'landline': '3133228554',
                'cellPhone': '31986857815',
                'profession': 'engenheiro civil',
                'updatedAt': '2021-12-02T01:52:10.727Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do proprietário | ID do proprietário não encontrado na base de dados | Requisição com dados inválidos',
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
    ownerController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/owners/{id}'
     * #swagger.tags = ['Proprietários']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta um proprietário'
     * #swagger.description = 'Endpoint para deletar um proprietário'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do proprietário',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Deleção do proprietário realizada com sucesso',
            schema: {
                'owner': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do proprietário',
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
    ownerController.delete
);

export default router;
import { Router } from 'express';
import { LeadController } from '../api/controllers/lead.controller';

const leadController: LeadController = new LeadController();
const router: Router = Router();

router.get('/amount',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/leads/amount'
     * #swagger.tags = ['Leads']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca a quantidade total de leads criadas no mês'
     * #swagger.description = 'Endpoint para buscar a quantidade total de leads criadas no mês'
     * #swagger.parameters['month'] = {
            in: 'query',
            description: 'Ano e mês no formato AAAA-MM',
            required: true,
            type: 'string',
            schema: {
                $ref: '#/definitions/month'
            }
        }
     * #swagger.responses[200] = {
            description: 'Busca pela quantidade total de leads criadas no mês realizada com sucesso',
            schema: {
                'totalLeads': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o Ano e Mês',
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
    leadController.amount
);

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/leads'
     * #swagger.tags = ['Leads']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todas as leads'
     * #swagger.description = 'Endpoint para buscar por todas as leads'
     * #swagger.responses[200] = {
            description: 'Busca por todas as leads realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'name': 'túlio',
                    'surname': 'menezes',
                    'email': 'tulio.menezes@gmail.com',
                    'source': 0,
                    'landline': '          ',
                    'cellPhone': '31996214031',
                    'comments': '',
                    'createdByAdministrator': false,
                    'createdByManager': true,
                    'createdBySecretary': false,
                    'createdAt': '2021-12-03T02:18:08.784Z',
                    'updatedAt': '2021-12-03T02:18:08.784Z',
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
    leadController.index
);

router.post('/',
    /**
      * #swagger.security = [{ 'Token': [] }]
      * #swagger.path = '/leads'
      * #swagger.tags = ['Leads']
      * #swagger.method = 'post'
      * #swagger.consumes = ['application/json']
      * #swagger.produces = ['application/json']
      * #swagger.summary = 'Cria uma nova lead'
      * #swagger.description = 'Endpoint para criar uma nova lead'
      * #swagger.parameters['createLead'] = {
            in: 'body',
            description: 'JSON com um objeto para criação de uma lead',
            required: true,
            type: 'object',
            schema: {
                $ref: '#/definitions/createLead'
            }
        }
      * #swagger.responses[201] = {
             description: 'Criação da lead realizada com sucesso',
             schema: {
                'id': 1,
                'name': 'túlio',
                'surname': 'menezes',
                'email': 'tulio.menezes@gmail.com',
                'source': 0,
                'landline': '          ',
                'cellPhone': '31996214031',
                'comments': '',
                'createdByAdministrator': false,
                'createdByManager': true,
                'createdBySecretary': false,
                'company': {
                    'id': 1
                },
                'manager': {
                    'id': 2
                },
                'createdAt': '2021-12-03T02:18:08.784Z',
                'updatedAt': '2021-12-03T02:18:08.784Z'
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
            description: 'E-mail já existe na base de dados',
            schema: { message: 'Solicitação atual conflitou com o recurso que está no servidor!' }
         }
      * #swagger.responses[500] = {
            description: 'Erro interno',
            schema: { message: 'Erro no servidor ao processar a solicitação!' }
         }
      */
    leadController.create
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/leads/{id}'
     * #swagger.tags = ['Leads']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por uma lead'
     * #swagger.description = 'Endpoint para buscar por uma lead'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da lead',
            required: true,
            type: 'integer',
            schema: {
                $ref: '#/definitions/id'
            }
        }
     * #swagger.responses[200] = {
            description: 'Busca por uma lead realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'túlio',
                'surname': 'menezes',
                'email': 'tulio.menezes@gmail.com',
                'source': 0,
                'landline': '          ',
                'cellPhone': '31996214031',
                'comments': '',
                'createdByAdministrator': false,
                'createdByManager': true,
                'createdBySecretary': false,
                'createdAt': '2021-12-03T02:18:08.784Z',
                'updatedAt': '2021-12-03T02:18:08.784Z',
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
            description: 'Requisição sem o ID da lead',
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
    leadController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/leads/{id}'
     * #swagger.tags = ['Leads']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de uma lead'
     * #swagger.description = 'Endpoint para atualizar os dados de uma lead'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da lead',
            required: true,
            type: 'integer',
            schema: {
                $ref: '#/definitions/id'
            }
        }
     * #swagger.parameters['updateLead'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de uma lead',
            required: true,
            type: 'object',
            schema: {
                $ref: '#/definitions/updateLead'
            }
        }
     * #swagger.responses[200] = {
            description: 'Atualização dos dados da lead realizada com sucesso',
            schema: {
                'id': 1,
                'name': 'tulio',
                'surname': 'menezes',
                'email': 'tulio.menezes@gmail.com',
                'source': 1,
                'landline': '3133228544',
                'cellPhone': '31996214031',
                'comments': 'está interessado no imóvel do bairro serra',
                'createdByAdministrator': false,
                'createdByManager': true,
                'createdBySecretary': false,
                'updatedAt': '2021-12-03T02:36:00.319Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da lead | ID da lead não encontrada na base de dados | Requisição com dados inválidos',
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
    leadController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/leads/{id}'
     * #swagger.tags = ['Leads']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta uma lead'
     * #swagger.description = 'Endpoint para deletar uma lead'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da lead',
            required: true,
            type: 'integer',
            schema: {
                $ref: '#/definitions/id'
            }
        }
     * #swagger.responses[200] = {
            description: 'Deleção da lead realizada com sucesso',
            schema: {
                'lead': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da lead',
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
    leadController.delete
);

export default router;
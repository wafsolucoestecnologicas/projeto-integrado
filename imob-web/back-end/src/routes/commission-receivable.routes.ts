import { Router } from 'express';
import { CommissionReceivableController } from '../api/controllers/commission-receivable.controller';

const commissionReceivableController: CommissionReceivableController = new CommissionReceivableController();
const router: Router = Router();

router.get('/receivable',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/commissions-receivable/receivable'
     * #swagger.tags = ['Comissões a Receber']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca pelos valores totais de comissões a receber no mês'
     * #swagger.description = 'Endpoint para buscar os valores totais de comissões a receber no mês'
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
            description: 'Busca pelos valores totais de comissões a receber no mês realizada com sucesso',
            schema: {
                'totalValueReceivable': 3000
            }
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
    commissionReceivableController.receivable
);

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/commissions-receivable'
     * #swagger.tags = ['Comissões a Receber']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todas as comissões a receber'
     * #swagger.description = 'Endpoint para buscar por todas as comissões a receber'
     * #swagger.responses[200] = {
            description: 'Busca por todas as comissões a receber realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'date': '2021-12-04',
                    'value': 1500,
                    'createdAt': '2021-12-06T02:39:59.854Z',
                    'updatedAt': '2021-12-06T02:39:59.854Z',
                    'company': {
                        'id': 1,
                        'CNPJ': '00000000000000',
                        'corporateName': 'Empresa Cadastrada Automaticamente',
                        'stateRegistration': '0000000000',
                        'percentageCommissionReceivable': 0,
                        'percentageCommissionPayableForClosedDeals': 0,
                        'percentageCommissionPayableForPropertyCaptured': 0,
                        'createdAt': '2021-12-06T02:38:33.426Z',
                        'updatedAt': '2021-12-06T02:38:33.426Z'
                    },
                    'property': {
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
                        'createdAt': '2021-12-06T02:39:45.369Z',
                        'updatedAt': '2021-12-06T02:39:45.369Z'
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
    commissionReceivableController.index
);

router.post('/',
    /**
      * #swagger.security = [{ 'Token': [] }]
      * #swagger.path = '/commissions-receivable'
      * #swagger.tags = ['Comissões a Receber']
      * #swagger.method = 'post'
      * #swagger.consumes = ['application/json']
      * #swagger.produces = ['application/json']
      * #swagger.summary = 'Cria uma nova comissão a receber'
      * #swagger.description = 'Endpoint para criar uma nova comissão a receber'
      * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para criação de uma comissão a receber',
            required: true,
            type: 'object',
            schema: {
                date: 'string',
                value: 'decimal',
                company: 'object',
                property: 'object'
            }
        }
      * #swagger.responses[201] = {
             description: 'Criação da comissão a receber realizada com sucesso',
             schema: {
                'id': 1,
                'date': '2021-12-04',
                'value': 1500,
                'company': {
                    'id': 1
                },
                'property': {
                    'id': 1
                },
                'createdAt': '2021-12-06T02:39:59.854Z',
                'updatedAt': '2021-12-06T02:39:59.854Z'
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
    commissionReceivableController.create
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/commissions-receivable/{id}'
     * #swagger.tags = ['Comissões a Receber']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por uma comissão a receber'
     * #swagger.description = 'Endpoint para buscar por uma comissão a receber'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da comissão a receber',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por uma comissão a receber realizada com sucesso',
            schema: {
                'id': 1,
                'date': '2021-12-04',
                'value': 1500,
                'createdAt': '2021-12-06T02:39:59.854Z',
                'updatedAt': '2021-12-06T02:39:59.854Z',
                'company': {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-12-06T02:38:33.426Z',
                    'updatedAt': '2021-12-06T02:38:33.426Z'
                },
                'property': {
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
                    'createdAt': '2021-12-06T02:39:45.369Z',
                    'updatedAt': '2021-12-06T02:39:45.369Z'
                }
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da comissão a receber',
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
    commissionReceivableController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/commissions-receivable/{id}'
     * #swagger.tags = ['Comissões a Receber']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de uma comissão a receber'
     * #swagger.description = 'Endpoint para atualizar os dados de uma comissão a receber'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da comissão a receber',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de uma comissão a receber',
            required: true,
            type: 'object',
            schema: {
                date: 'string',
                value: 'decimal'
            }
        }
     * #swagger.responses[200] = {
            description: 'Atualização dos dados da comissão a receber realizada com sucesso',
            schema: {
                'id': 1,
                'date': '2021-12-04',
                'value': 2000,
                'updatedAt': '2021-12-06T02:42:58.349Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da comissão a receber | ID da comissão a receber não encontrado na base de dados | Requisição com dados inválidos',
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
    commissionReceivableController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/commissions-receivable/{id}'
     * #swagger.tags = ['Comissões a Receber']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta uma comissão a receber'
     * #swagger.description = 'Endpoint para deletar uma comissão a receber'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da comissão a receber',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Deleção da comissão a receber realizada com sucesso',
            schema: {
                'commissionReceivable': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da comissão a receber',
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
    commissionReceivableController.delete
);

export default router;
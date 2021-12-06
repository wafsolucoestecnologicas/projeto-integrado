import { Router } from 'express';
import { CompanyController } from '../api/controllers/company.controller';

const companyController: CompanyController = new CompanyController();
const router: Router = Router();

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/companies'
     * #swagger.tags = ['Imobiliárias']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todas as imobiliárias'
     * #swagger.description = 'Endpoint para buscar por todas as imobiliárias'
     * #swagger.responses[200] = {
            description: 'Busca por todas as imobiliárias realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-11-29T21:37:56.927Z',
                    'updatedAt': '2021-11-29T21:37:56.927Z'
                },
                {
                    'id': 2,
                    'CNPJ': '75536670000126',
                    'corporateName': 'WAF Soluções Tecnologicas',
                    'stateRegistration': '0467483802980',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 10.3,
                    'percentageCommissionPayableForPropertyCaptured': 2,
                    'createdAt': '2021-11-29T21:42:26.552Z',
                    'updatedAt': '2021-11-29T21:42:26.552Z'
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
    companyController.index
);

router.post('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/companies'
     * #swagger.tags = ['Imobiliárias']
     * #swagger.method = 'post'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Cria uma nova imobiliária'
     * #swagger.description = 'Endpoint para criar uma nova imobiliária'
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para criação de uma imobiliária',
            required: true,
            type: 'object',
            schema: {
                CNPJ: 'string',
                coporateName: 'string',
                stateRegistration: 'string',
                percentageCommissionReceivable: 'decimal',
                percentageCommissionPayableForClosedDeals: 'decimal',
                percentageCommissionPayableForPropertyCaptured: 'decimal'
            }
        }
     * #swagger.responses[201] = {
            description: 'Criação da imobiliária realizada com sucesso',
            schema: {
                'id': 2,
                'CNPJ': '75536670000126',
                'corporateName': 'WAF Soluções Tecnologicas',
                'stateRegistration': '0467483802980',
                'percentageCommissionReceivable': 5.5,
                'percentageCommissionPayableForClosedDeals': 10.3,
                'percentageCommissionPayableForPropertyCaptured': 2,
                'createdAt': '2021-11-29T21:42:26.552Z',
                'updatedAt': '2021-11-29T21:42:26.552Z'
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
            description: 'CNPJ já existe na base de dados',
            schema: { message: 'Solicitação atual conflitou com o recurso que está no servidor!' }
        }
     * #swagger.responses[500] = {
            description: 'Erro interno',
            schema: { message: 'Erro no servidor ao processar a solicitação!' }
        }
     */
    companyController.create
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/companies/{id}'
     * #swagger.tags = ['Imobiliárias']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por uma imobiliária'
     * #swagger.description = 'Endpoint para buscar por uma imobiliária'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da imobiliária',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por uma imobiliária realizada com sucesso',
            schema: {
                'id': 2,
                'CNPJ': '75536670000126',
                'corporateName': 'WAF Soluções Tecnologicas',
                'stateRegistration': '0467483802980',
                'percentageCommissionReceivable': 5.5,
                'percentageCommissionPayableForClosedDeals': 10.3,
                'percentageCommissionPayableForPropertyCaptured': 2,
                'createdAt': '2021-11-29T21:42:26.552Z',
                'updatedAt': '2021-11-29T21:42:26.552Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da imobiliária',
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
    companyController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/companies/{id}'
     * #swagger.tags = ['Imobiliárias']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de uma imobiliária'
     * #swagger.description = 'Endpoint para atualizar os dados de uma imobiliária'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da imobiliária',
            required: true,
            type: 'integer'
        }
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de uma imobiliária',
            required: true,
            type: 'object',
            schema: {
                CNPJ: 'string',
                coporateName: 'string',
                stateRegistration: 'string',
                percentageCommissionReceivable: 'decimal',
                percentageCommissionPayableForClosedDeals: 'decimal',
                percentageCommissionPayableForPropertyCaptured: 'decimal'
            }
        }
     * #swagger.responses[200] = {
            description: 'Atualização dos dados da imobiliária realizada com sucesso',
            schema: {
                'id': 1,
                'CNPJ': '75536670000126',
                'corporateName': 'WAF Soluções Tecnologicas',
                'stateRegistration': '0467483802980',
                'percentageCommissionReceivable': 10.5,
                'percentageCommissionPayableForClosedDeals': 5,
                'percentageCommissionPayableForPropertyCaptured': 1,
                'updatedAt': '2021-11-29T22:00:22.650Z'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da imobiliária | ID da imobiliária não encontrado na base de dados | Requisição com dados inválidos',
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
    companyController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/companies/{id}'
     * #swagger.tags = ['Imobiliárias']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta uma imobiliária'
     * #swagger.description = 'Endpoint para deletar uma imobiliária'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID da imobiliária',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Deleção da imobiliária realizada com sucesso',
            schema: {
                'company': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID da imobiliária',
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
    companyController.delete
);

export default router;
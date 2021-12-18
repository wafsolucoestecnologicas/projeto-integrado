import { Router } from 'express';
import { AddressController } from '../api/controllers/address.controller';

const addressController: AddressController = new AddressController();
const router: Router = Router();

router.get('/search',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/adresses/search'
     * #swagger.tags = ['Endereços']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca um endereço na API ViaCEP através de um CEP'
     * #swagger.description = 'Endpoint para buscar um endereço na API ViaCEP através de um CEP'
     * #swagger.parameters['CEP'] = {
            in: 'query',
            description: 'CEP do endereço',
            required: true,
            type: 'string',
            schema: {
                $ref: '#/definitions/CEP'
            }
        }
     * #swagger.responses[200] = {
            description: 'Busca pelo endereço realizada com sucesso',
            schema: {
                'cep': '30692-080',
                'logradouro': 'rua ibirapuera',
                'complemento': '',
                'bairro': 'itaipu (barreiro)',
                'localidade': 'belo horizonte',
                'uf': 'MG',
                'ibge': '3106200',
                'gia': '',
                'ddd': '31',
                'siafi': '4123'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o CEP',
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
    addressController.searchAddressInAPIViaCEP
);

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/adresses'
     * #swagger.tags = ['Endereços']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os endereços'
     * #swagger.description = 'Endpoint para buscar por todos os endereços'
     * #swagger.responses[200] = {
            description: 'Busca por todos os endereços realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'street': 'rua ibirapuera',
                    'complement': '',
                    'number': '480',
                    'CEP': '30692080',
                    'isCompany': false,
                    'isManager': true,
                    'isAdvisor': false,
                    'isBroker': false,
                    'isSecretary': false,
                    'isOwner': false,
                    'isCustomer': false,
                    'isProperty': false,
                    'neighborhood': {
                        'id': 1,
                        'neighborhood': 'riacho das pedras'
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
    addressController.index
);

router.post('/',
    /**
      * #swagger.security = [{ 'Token': [] }]
      * #swagger.path = '/adresses'
      * #swagger.tags = ['Endereços']
      * #swagger.method = 'post'
      * #swagger.consumes = ['application/json']
      * #swagger.produces = ['application/json']
      * #swagger.summary = 'Cria um novo endereço'
      * #swagger.description = 'Endpoint para criar um novo endereço'
      * #swagger.parameters['createAddress'] = {
            in: 'body',
            description: 'JSON com um objeto para criação de um endereço',
            required: true,
            type: 'object',
            schema: {
                $ref: '#/definitions/createAddress'
            }
        }
      * #swagger.responses[201] = {
             description: 'Criação do endereço realizada com sucesso',
             schema: {
                'id': 1,
                'street': 'rua ibirapuera',
                'complement': '',
                'number': '480',
                'CEP': '30692080',
                'isCompany': false,
                'isManager': true,
                'isAdvisor': false,
                'isBroker': false,
                'isSecretary': false,
                'isOwner': false,
                'isCustomer': false,
                'isProperty': false,
                'company': {
                    'id': 1
                },
                'neighborhood': {
                    'id': 1
                },
                'manager': {
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
    addressController.create
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/adresses/{id}'
     * #swagger.tags = ['Endereços']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um endereço'
     * #swagger.description = 'Endpoint para buscar por um endereço'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do endereço',
            required: true,
            type: 'integer',
            schema: {
                $ref: '#/definitions/id'
            }
        }
     * #swagger.responses[200] = {
            description: 'Busca por um endereço realizada com sucesso',
            schema: {
                'id': 1,
                'street': 'rua ibirapuera',
                'complement': '',
                'number': '480',
                'CEP': '30692080',
                'isCompany': false,
                'isManager': true,
                'isAdvisor': false,
                'isBroker': false,
                'isSecretary': false,
                'isOwner': false,
                'isCustomer': false,
                'isProperty': false,
                'neighborhood': {
                    'id': 1,
                    'neighborhood': 'riacho das pedras'
                }
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do endereço',
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
    addressController.read
);

router.put('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/adresses/{id}'
     * #swagger.tags = ['Endereços']
     * #swagger.method = 'put'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Atualiza os dados de um endereço'
     * #swagger.description = 'Endpoint para atualizar os dados de um endereço'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do endereço',
            required: true,
            type: 'integer',
            schema: {
                $ref: '#/definitions/id'
            }
        }
     * #swagger.parameters['updateAddress'] = {
            in: 'body',
            description: 'JSON com um objeto para atualização de um endereço',
            required: true,
            type: 'object',
            schema: {
                $ref: '#/definitions/updateAddress'
            }
        }
     * #swagger.responses[200] = {
            description: 'Atualização dos dados do endereço realizada com sucesso',
            schema: {
                'id': 1,
                'street': 'avenida marte',
                'complement': 'casa',
                'number': '214',
                'CEP': '32241395',
                'isCompany': false,
                'isManager': true,
                'isAdvisor': false,
                'isBroker': false,
                'isSecretary': false,
                'isOwner': false,
                'isCustomer': false,
                'isProperty': false,
                'neighborhood': {
                    'id': 2
                }
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do endereço | ID do endereço não encontrado na base de dados | Requisição com dados inválidos',
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
    addressController.update
);

router.delete('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/adresses/{id}'
     * #swagger.tags = ['Endereços']
     * #swagger.method = 'delete'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Deleta um endereço'
     * #swagger.description = 'Endpoint para deletar um endereço'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do endereço',
            required: true,
            type: 'integer',
            schema: {
                $ref: '#/definitions/id'
            }
        }
     * #swagger.responses[200] = {
            description: 'Deleção do endereço realizada com sucesso',
            schema: {
                'address': 1
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do endereço',
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
    addressController.delete
);

export default router;
import { Router } from 'express';
import { StateController } from '../api/controllers/state.controller';

const stateController: StateController = new StateController();
const router: Router = Router();

router.get('/',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/states'
     * #swagger.tags = ['Estados']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por todos os estados'
     * #swagger.description = 'Endpoint para buscar por todos os estados'
     * #swagger.responses[200] = {
            description: 'Busca por todos os estados realizada com sucesso',
            schema: [
                {
                    'id': 1,
                    'state': 'ACRE',
                    'UF': 'AC'
                },
                {
                    'id': 2,
                    'state': 'ALAGOAS',
                    'UF': 'AL'
                },
                {
                    'id': 3,
                    'state': 'AMAPÁ',
                    'UF': 'AP'
                },
                {
                    'id': 4,
                    'state': 'AMAZONAS',
                    'UF': 'AM'
                },
                {
                    'id': 5,
                    'state': 'BAHIA',
                    'UF': 'BA'
                },
                {
                    'id': 6,
                    'state': 'CEARÁ',
                    'UF': 'CE'
                },
                {
                    'id': 7,
                    'state': 'ESPÍRITO SANTO',
                    'UF': 'ES'
                },
                {
                    'id': 8,
                    'state': 'GOIÁS',
                    'UF': 'GO'
                },
                {
                    'id': 9,
                    'state': 'MARANHÃO',
                    'UF': 'MA'
                },
                {
                    'id': 10,
                    'state': 'MATO GROSSO',
                    'UF': 'MT'
                },
                {
                    'id': 11,
                    'state': 'MATO GROSSO DO SUL',
                    'UF': 'MS'
                },
                {
                    'id': 12,
                    'state': 'MINAS GERAIS',
                    'UF': 'MG'
                },
                {
                    'id': 13,
                    'state': 'PARÁ',
                    'UF': 'PA'
                },
                {
                    'id': 14,
                    'state': 'PARAÍBA',
                    'UF': 'PB'
                },
                {
                    'id': 15,
                    'state': 'PARANÁ',
                    'UF': 'PR'
                },
                {
                    'id': 16,
                    'state': 'PERNAMBUCO',
                    'UF': 'PE'
                },
                {
                    'id': 17,
                    'state': 'PIAUÍ',
                    'UF': 'PI'
                },
                {
                    'id': 18,
                    'state': 'RIO DE JANEIRO',
                    'UF': 'RJ'
                },
                {
                    'id': 19,
                    'state': 'RIO GRANDE DO NORTE',
                    'UF': 'RN'
                },
                {
                    'id': 20,
                    'state': 'RIO GRANDE DO SUL',
                    'UF': 'RS'
                },
                {
                    'id': 21,
                    'state': 'RONDÔNIA',
                    'UF': 'RO'
                },
                {
                    'id': 22,
                    'state': 'RORAIMA',
                    'UF': 'RR'
                },
                {
                    'id': 23,
                    'state': 'SANTA CATARINA',
                    'UF': 'SC'
                },
                {
                    'id': 24,
                    'state': 'SÃO PAULO',
                    'UF': 'SP'
                },
                {
                    'id': 25,
                    'state': 'SERGIPE',
                    'UF': 'SE'
                },
                {
                    'id': 26,
                    'state': 'TOCANTINS',
                    'UF': 'TO'
                },
                {
                    'id': 27,
                    'state': 'DISTRITO FEDERAL',
                    'UF': 'DF'
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
    stateController.index
);

router.get('/:id',
    /**
     * #swagger.security = [{ 'Token': [] }]
     * #swagger.path = '/states/{id}'
     * #swagger.tags = ['Estados']
     * #swagger.method = 'get'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Busca por um estado'
     * #swagger.description = 'Endpoint para buscar por um estado'
     * #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID do estado',
            required: true,
            type: 'integer'
        }
     * #swagger.responses[200] = {
            description: 'Busca por um estado realizada com sucesso',
            schema: {
                'id': 1,
                'state': 'ACRE',
                'UF': 'AC'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem o ID do estado',
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
    stateController.read
);

export default router;

import { Router } from 'express';
import { AuthenticationController } from '../api/controllers/authentication.controller';

const autheticationControllher: AuthenticationController = new AuthenticationController();
const router: Router = Router();

router.post('/',
    /**
     * #swagger.path = '/authentications'
     * #swagger.tags = ['Autenticação']
     * #swagger.method = 'post'
     * #swagger.consumes = ['application/json']
     * #swagger.produces = ['application/json']
     * #swagger.summary = 'Autentica um usuário'
     * #swagger.description = 'Endpoint para autenticar um usuário'
     * #swagger.parameters['body'] = {
            in: 'body',
            description: 'JSON com um objeto para autenticação',
            required: true,
            type: 'object',
            schema: {
                email: 'wellington.felix@gmail.com',
                password: '12345678'
            }
        }
     * #swagger.responses[200] = {
            description: 'Autenticação de usuário realizada com sucesso',
            schema: {
                'user': {
                    'id': 1,
                    'uuid': '4e65e985-2485-4b48-9902-37f3f58ffeee',
                    'name': 'wellington',
                    'surname': 'felix',
                    'email': 'wellington.felix@gmail.com',
                    'password': '',
                    'isAdministrator': false,
                    'isManager': true,
                    'isAdvisor': false,
                    'isBroker': false,
                    'isSecretary': false,
                    'createdAt': '2021-11-21T15:38:28.893Z',
                    'updatedAt': '2021-11-21T15:38:28.893Z',
                    'company': {
                        'id': 1,
                        'CNPJ': '86504565000121',
                        'corporateName': 'Canaan Imóveis',
                        'stateRegistration': '1555506993860',
                        'percentageCommissionReceived': 5.5,
                        'percentageCommissionPayable': 10.3,
                        'createdAt': '2021-11-21T15:38:28.669Z',
                        'updatedAt': '2021-11-23T01:58:48.963Z'
                    },
                    'profile': {
                        'id': 2,
                        'userType': 'manager',
                        'isAdmin': false,
                        'permissions': {
                            'create': [
                                'companies',
                                'managers',
                                'advisors',
                                'brokers',
                                'secretaries',
                                'owners',
                                'customers',
                                'properties',
                                'leads',
                                'businesses'
                            ],
                            'read': [
                                'users',
                                'companies',
                                'managers',
                                'advisors',
                                'brokers',
                                'secretaries',
                                'owners',
                                'customers',
                                'properties',
                                'leads',
                                'businesses'
                            ],
                            'update': [
                                'companies',
                                'managers',
                                'advisors',
                                'brokers',
                                'secretaries',
                                'owners',
                                'customers',
                                'properties',
                                'leads',
                                'businesses'
                            ],
                            'delete': [
                                'companies',
                                'managers',
                                'advisors',
                                'brokers',
                                'secretaries',
                                'owners',
                                'customers',
                                'properties',
                                'leads',
                                'businesses'
                            ],
                            'amount': [
                                'leads',
                                'businesses'
                            ],
                            'search': [
                                'leads',
                                'businesses',
                                'adresses'
                            ],
                            'transfer': [
                                'businesses'
                            ],
                            'reject': [
                                'businesses'
                            ],
                            'close': [
                                'businesses'
                            ],
                            'receivable': [
                                'commissions-receivable'
                            ],
                            'payable': [
                                'commissions-payable'
                            ]
                        },
                        'createdAt': '2021-11-21T15:37:31.491Z',
                        'updatedAt': '2021-11-21T15:37:31.491Z'
                    }
                },
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXVpZCI6IjRlNjVlOTg1LTI0ODUtNGI0OC05OTAyLTM3ZjNmNThmZmVlZSIsImNvbXBhbnkiOnsiaWQiOjEsIkNOUEoiOiI4NjUwNDU2NTAwMDEyMSIsImNvcnBvcmF0ZU5hbWUiOiJDYW5hYW4gSW3Ds3ZlaXMiLCJzdGF0ZVJlZ2lzdHJhdGlvbiI6IjE1NTU1MDY5OTM4NjAiLCJwZXJjZW50YWdlQ29tbWlzc2lvblJlY2VpdmVkIjo1LjUsInBlcmNlbnRhZ2VDb21taXNzaW9uUGF5YWJsZSI6MTAuMywiY3JlYXRlZEF0IjoiMjAyMS0xMS0yMVQxNTozODoyOC42NjlaIiwidXBkYXRlZEF0IjoiMjAyMS0xMS0yM1QwMTo1ODo0OC45NjNaIn0sIm5hbWUiOiJ3ZWxsaW5ndG9uIiwic3VybmFtZSI6ImZlbGl4IiwiZW1haWwiOiJ3ZWxsaW5ndG9uLmZlbGl4QGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOlsiY29tcGFuaWVzIiwibWFuYWdlcnMiLCJhZHZpc29ycyIsImJyb2tlcnMiLCJzZWNyZXRhcmllcyIsIm93bmVycyIsImN1c3RvbWVycyIsInByb3BlcnRpZXMiLCJsZWFkcyIsImJ1c2luZXNzZXMiXSwicmVhZCI6WyJ1c2VycyIsImNvbXBhbmllcyIsIm1hbmFnZXJzIiwiYWR2aXNvcnMiLCJicm9rZXJzIiwic2VjcmV0YXJpZXMiLCJvd25lcnMiLCJjdXN0b21lcnMiLCJwcm9wZXJ0aWVzIiwibGVhZHMiLCJidXNpbmVzc2VzIl0sInVwZGF0ZSI6WyJjb21wYW5pZXMiLCJtYW5hZ2VycyIsImFkdmlzb3JzIiwiYnJva2VycyIsInNlY3JldGFyaWVzIiwib3duZXJzIiwiY3VzdG9tZXJzIiwicHJvcGVydGllcyIsImxlYWRzIiwiYnVzaW5lc3NlcyJdLCJkZWxldGUiOlsiY29tcGFuaWVzIiwibWFuYWdlcnMiLCJhZHZpc29ycyIsImJyb2tlcnMiLCJzZWNyZXRhcmllcyIsIm93bmVycyIsImN1c3RvbWVycyIsInByb3BlcnRpZXMiLCJsZWFkcyIsImJ1c2luZXNzZXMiXSwiYW1vdW50IjpbImxlYWRzIiwiYnVzaW5lc3NlcyJdLCJzZWFyY2giOlsibGVhZHMiLCJidXNpbmVzc2VzIiwiYWRyZXNzZXMiXSwidHJhbnNmZXIiOlsiYnVzaW5lc3NlcyJdLCJyZWplY3QiOlsiYnVzaW5lc3NlcyJdLCJjbG9zZSI6WyJidXNpbmVzc2VzIl0sInJlY2VpdmVibGUiOlsiY29tbWlzc2lvbnMtcmVjZWl2ZWJsZSJdLCJwYXlhYmxlIjpbImNvbW1pc3Npb25zLXBheWFibGUiXX0sImlhdCI6MTYzODAzNDQ0OSwiZXhwIjoxNjM4MTIwODQ5fQ.9tKuHafA6OZWMQREZx046e2IVP3npxDPrF3ui4vMY_I'
            }
        }
     * #swagger.responses[400] = {
            description: 'Requisição sem e-mail ou senha de usuário | E-mail não encontrado | Senha inválida',
            schema: { message: 'O pedido não pôde ser entregue devido à sintaxe incorreta!' }
        }
     * #swagger.responses[500] = {
            description: 'Erro interno',
            schema: { message: 'Erro no servidor ao processar a solicitação!' }
        }
     */
    autheticationControllher.authenticate
);

export default router;
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
     * #swagger.parameters['authentication'] = {
            in: 'body',
            description: 'JSON com um objeto para autenticação',
            required: true,
            type: 'object',
            schema: {
                $ref: '#/definitions/authentication'
            }
        }
     * #swagger.responses[200] = {
            description: 'Autenticação de usuário realizada com sucesso',
            schema: {
                'user': {
                    'id': 1,
                    'name': 'wellington',
                    'surname': 'felix',
                    'email': 'wellington.felix@gmail.com',
                    'isAdministrator': false,
                    'isManager': true,
                    'isAdvisor': false,
                    'isBroker': false,
                    'isSecretary': false,
                    'createdAt': '2021-12-11T02:06:27.749Z',
                    'updatedAt': '2021-12-11T02:06:27.749Z'
                },
                'company': {
                    'id': 1,
                    'CNPJ': '00000000000000',
                    'corporateName': 'Empresa Cadastrada Automaticamente',
                    'stateRegistration': '0000000000',
                    'percentageCommissionReceivable': 0,
                    'percentageCommissionPayableForClosedDeals': 0,
                    'percentageCommissionPayableForPropertyCaptured': 0,
                    'createdAt': '2021-12-11T02:06:27.567Z',
                    'updatedAt': '2021-12-11T02:06:27.567Z'
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
                            'businesses',
                            'commissions-receivable',
                            'commissions-payable',
                            'adresses',
                            'neighborhoods',
                            'cities',
                            'states'
                        ],
                        'read': [
                            'users',
                            'profiles',
                            'companies',
                            'managers',
                            'advisors',
                            'brokers',
                            'secretaries',
                            'owners',
                            'customers',
                            'properties',
                            'leads',
                            'businesses',
                            'commissions-receivable',
                            'commissions-payable',
                            'adresses',
                            'neighborhoods',
                            'cities',
                            'states'
                        ],
                        'update': [
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
                            'businesses',
                            'commissions-receivable',
                            'commissions-payable',
                            'adresses',
                            'neighborhoods',
                            'cities',
                            'states'
                        ],
                        'delete': [
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
                            'businesses',
                            'commissions-receivable',
                            'commissions-payable',
                            'adresses',
                            'neighborhoods',
                            'cities',
                            'states'
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
                    'createdAt': '2021-12-11T02:05:52.482Z',
                    'updatedAt': '2021-12-11T02:05:52.482Z'
                },
                'administrator': 'null',
                'manager': {
                    'id': 1,
                    'name': 'wellington',
                    'surname': 'felix',
                    'email': 'wellington.felix@gmail.com',
                    'birthDate': '2021-12-10',
                    'isManager': true,
                    'RG': '000000000',
                    'CPF': '00000000000',
                    'landline': 'null',
                    'cellPhone': '00000000000',
                    'profession': 'null',
                    'createdAt': '2021-12-11T02:06:27.627Z',
                    'updatedAt': '2021-12-11T02:06:27.628Z'
                },
                'advisor': 'null',
                'broker': 'null',
                'secretary': 'null',
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXVpZCI6IjdmYzVjMDUzLTcyMmYtNDQ4MS04ZTY5LTMyZjEzMDY0Yjk4MSIsImNvbXBhbnkiOnsiaWQiOjEsIkNOUEoiOiIwMDAwMDAwMDAwMDAwMCIsImNvcnBvcmF0ZU5hbWUiOiJFbXByZXNhIENhZGFzdHJhZGEgQXV0b21hdGljYW1lbnRlIiwic3RhdGVSZWdpc3RyYXRpb24iOiIwMDAwMDAwMDAwIiwicGVyY2VudGFnZUNvbW1pc3Npb25SZWNlaXZhYmxlIjowLCJwZXJjZW50YWdlQ29tbWlzc2lvblBheWFibGVGb3JDbG9zZWREZWFscyI6MCwicGVyY2VudGFnZUNvbW1pc3Npb25QYXlhYmxlRm9yUHJvcGVydHlDYXB0dXJlZCI6MCwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xMVQwMjowNjoyNy41NjdaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xMVQwMjowNjoyNy41NjdaIn0sIm5hbWUiOiJ3ZWxsaW5ndG9uIiwic3VybmFtZSI6ImZlbGl4IiwiZW1haWwiOiJ3ZWxsaW5ndG9uLmZlbGl4QGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJwZXJtaXNzaW9ucyI6eyJjcmVhdGUiOlsiY29tcGFuaWVzIiwibWFuYWdlcnMiLCJhZHZpc29ycyIsImJyb2tlcnMiLCJzZWNyZXRhcmllcyIsIm93bmVycyIsImN1c3RvbWVycyIsInByb3BlcnRpZXMiLCJsZWFkcyIsImJ1c2luZXNzZXMiLCJjb21taXNzaW9ucy1yZWNlaXZhYmxlIiwiY29tbWlzc2lvbnMtcGF5YWJsZSIsImFkcmVzc2VzIiwibmVpZ2hib3Job29kcyIsImNpdGllcyIsInN0YXRlcyJdLCJyZWFkIjpbInVzZXJzIiwicHJvZmlsZXMiLCJjb21wYW5pZXMiLCJtYW5hZ2VycyIsImFkdmlzb3JzIiwiYnJva2VycyIsInNlY3JldGFyaWVzIiwib3duZXJzIiwiY3VzdG9tZXJzIiwicHJvcGVydGllcyIsImxlYWRzIiwiYnVzaW5lc3NlcyIsImNvbW1pc3Npb25zLXJlY2VpdmFibGUiLCJjb21taXNzaW9ucy1wYXlhYmxlIiwiYWRyZXNzZXMiLCJuZWlnaGJvcmhvb2RzIiwiY2l0aWVzIiwic3RhdGVzIl0sInVwZGF0ZSI6WyJ1c2VycyIsImNvbXBhbmllcyIsIm1hbmFnZXJzIiwiYWR2aXNvcnMiLCJicm9rZXJzIiwic2VjcmV0YXJpZXMiLCJvd25lcnMiLCJjdXN0b21lcnMiLCJwcm9wZXJ0aWVzIiwibGVhZHMiLCJidXNpbmVzc2VzIiwiY29tbWlzc2lvbnMtcmVjZWl2YWJsZSIsImNvbW1pc3Npb25zLXBheWFibGUiLCJhZHJlc3NlcyIsIm5laWdoYm9yaG9vZHMiLCJjaXRpZXMiLCJzdGF0ZXMiXSwiZGVsZXRlIjpbInVzZXJzIiwiY29tcGFuaWVzIiwibWFuYWdlcnMiLCJhZHZpc29ycyIsImJyb2tlcnMiLCJzZWNyZXRhcmllcyIsIm93bmVycyIsImN1c3RvbWVycyIsInByb3BlcnRpZXMiLCJsZWFkcyIsImJ1c2luZXNzZXMiLCJjb21taXNzaW9ucy1yZWNlaXZhYmxlIiwiY29tbWlzc2lvbnMtcGF5YWJsZSIsImFkcmVzc2VzIiwibmVpZ2hib3Job29kcyIsImNpdGllcyIsInN0YXRlcyJdLCJhbW91bnQiOlsibGVhZHMiLCJidXNpbmVzc2VzIl0sInNlYXJjaCI6WyJsZWFkcyIsImJ1c2luZXNzZXMiLCJhZHJlc3NlcyJdLCJ0cmFuc2ZlciI6WyJidXNpbmVzc2VzIl0sInJlamVjdCI6WyJidXNpbmVzc2VzIl0sImNsb3NlIjpbImJ1c2luZXNzZXMiXSwicmVjZWl2YWJsZSI6WyJjb21taXNzaW9ucy1yZWNlaXZhYmxlIl0sInBheWFibGUiOlsiY29tbWlzc2lvbnMtcGF5YWJsZSJdfSwiYWRtaW5pc3RyYXRvciI6bnVsbCwibWFuYWdlciI6eyJpZCI6MSwibmFtZSI6IndlbGxpbmd0b24iLCJzdXJuYW1lIjoiZmVsaXgiLCJlbWFpbCI6IndlbGxpbmd0b24uZmVsaXhAZ21haWwuY29tIiwiYmlydGhEYXRlIjoiMjAyMS0xMi0xMCIsImlzTWFuYWdlciI6dHJ1ZSwiUkciOiIwMDAwMDAwMDAiLCJDUEYiOiIwMDAwMDAwMDAwMCIsImxhbmRsaW5lIjpudWxsLCJjZWxsUGhvbmUiOiIwMDAwMDAwMDAwMCIsInByb2Zlc3Npb24iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMTItMTFUMDI6MDY6MjcuNjI3WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTItMTFUMDI6MDY6MjcuNjI4WiJ9LCJhZHZpc29yIjpudWxsLCJicm9rZXIiOm51bGwsInNlY3JldGFyeSI6bnVsbCwiaWF0IjoxNjM5NTM2OTk0LCJleHAiOjE2Mzk2MjMzOTR9.qGWWjLefK6YipmYpLL0e-8e8SbBy1YT_maXbtijB9hI'
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
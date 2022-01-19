"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateURLWithoutAuthentication = exports.returnMessages = exports.statusMessages = void 0;
exports.statusMessages = {
    400: 'O pedido não pôde ser entregue devido à sintaxe incorreta!',
    401: 'Não possui credenciais de autenticação válidas para o recurso!',
    409: 'Solicitação atual conflitou com o recurso que está no servidor!',
    500: 'Erro no servidor ao processar a solicitação!'
};
exports.returnMessages = [
    'Dados do corpo da requisição inválidos.',
    'Registro não existe na base de dados.',
    'É necessário o id do registro.',
    'Já existe um registro com o CNPJ informado no banco de dados.',
    'Já existe um registro com o e-mail informado no banco de dados.',
    'Erro interno ao cadastrar uma nova imobiliária.',
    'Erro interno ao recuperar o perfil de usuário gestor.',
    'Senha de usuário informada não confere.'
];
var validateURLWithoutAuthentication = function (url, method) {
    var isValid = false;
    var paths = [
        'docs',
        'authentications',
        'users'
    ];
    var path = url.split('/')[1];
    if (path === 'users') {
        isValid = paths.includes(path) && method === 'POST';
    }
    else {
        isValid = paths.includes(path);
    }
    return isValid;
};
exports.validateURLWithoutAuthentication = validateURLWithoutAuthentication;
//# sourceMappingURL=utils.js.map
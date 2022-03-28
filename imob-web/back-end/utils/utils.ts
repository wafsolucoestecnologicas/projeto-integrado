import { createConnection, ConnectionOptions, getConnectionOptions } from "typeorm";

export const statusMessages: { [key: number]: string } = {
    400: 'O pedido não pôde ser entregue devido à sintaxe incorreta!',
    401: 'Não possui credenciais de autenticação válidas para o recurso!',
    409: 'Solicitação atual conflitou com o recurso que está no servidor!',
    500: 'Erro no servidor ao processar a solicitação!'
};

export const returnMessages: string[] = [
    'Dados do corpo da requisição inválidos.',
    'Registro não existe na base de dados.',
    'É necessário o id do registro.',
    'Já existe um registro com o CNPJ informado no banco de dados.',
    'Já existe um registro com o e-mail informado no banco de dados.',
    'Erro interno ao cadastrar uma nova imobiliária.',
    'Erro interno ao recuperar o perfil de usuário gestor.',
    'Senha de usuário informada não confere.'
];

export const validateURLWithoutAuthentication = (url: string, method: string): boolean => {
    let isValid: boolean = false;

    const paths: string[] = [
        'docs',
        'authentications',
        'users'
    ];
    const path: string = url.split('/')[1];

    if (path === 'users') {
        isValid = paths.includes(path) && method === 'POST';
    } else {
        isValid = paths.includes(path);
    }

    return isValid;
};

export const createTypeORMConnection = async () => {
    const options: ConnectionOptions = await getConnectionOptions(process.env.NODE_ENV);

    return await createConnection({ ...options, name: 'default' });
};
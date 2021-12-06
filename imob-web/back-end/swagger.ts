import path from 'path';
import swaggerAutogen from 'swagger-autogen';

const options: any = {
    openapi: null,
    language: 'pt-BR',
    disableLogs: false,
    disableWarnings: false
};
const outputFile: string = `${path.join(__dirname, 'public', 'swagger', 'swagger.json')}`;
const endpointsFiles: string[] = [
    `${path.join(__dirname, 'src', 'routes', 'authentication.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'profile.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'user.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'company.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'administrator.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'manager.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'advisor.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'broker.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'secretary.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'owner.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'customer.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'property.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'lead.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'business.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'commission-receiveble.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'commission-payable.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'address.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'neighborhood.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'city.routes.ts')}`,
    `${path.join(__dirname, 'src', 'routes', 'state.routes.ts')}`
];
const documentation: any = {
    info: {
        version: '1.0.0',
        title: 'API IMOB Web',
        description: 'API para gestão de informações da plataforma IMOB Web',
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Autenticação',
            description: 'Gerenciamento de Autenticação de Usuários',
        },
        {
            name: 'Perfis',
            description: 'Gerenciamento de Perfis de Usuários',
        },
        {
            name: 'Usuários',
            description: 'Gerenciamento de Usuários',
        },
        {
            name: 'Imobiliárias',
            description: 'Gerenciamento de Imobiliárias',
        },
        {
            name: 'Administradores',
            description: 'Gerenciamento de Administradores',
        },
        {
            name: 'Gestores',
            description: 'Gerenciamento de Gestores',
        },
        {
            name: 'Despachantes',
            description: 'Gerenciamento de Despachantes',
        },
        {
            name: 'Corretores',
            description: 'Gerenciamento de Corretores',
        },
        {
            name: 'Secretárias',
            description: 'Gerenciamento de Secretárias',
        },
        {
            name: 'Proprietários',
            description: 'Gerenciamento de Proprietários',
        },
        {
            name: 'Clientes',
            description: 'Gerenciamento de Clientes',
        },
        {
            name: 'Imóveis',
            description: 'Gerenciamento de Imóveis',
        },
        {
            name: 'Leads',
            description: 'Gerenciamento de Leads (Possíveis Clientes)',
        },
        {
            name: 'Negócios',
            description: 'Gerenciamento de Negócios',
        },
        {
            name: 'Comissões a Receber',
            description: 'Gerenciamento de Comissões a Receber das Imobiliárias',
        },
        {
            name: 'Comissões a Pagar',
            description: 'Gerenciamento de Comissões a Pagar aos Corretores',
        },
        {
            name: 'Endereços',
            description: 'Gerenciamento de Endereços',
        },
        {
            name: 'Bairros',
            description: 'Gerenciamento de Bairros',
        },
        {
            name: 'Cidades',
            description: 'Gerenciamento de Cidades',
        },
        {
            name: 'Estados',
            description: 'Gerenciamento de Estados',
        },
    ],
    securityDefinitions: {
        Token: {
            name: 'Authorization',
            description: 'Token do tipo Bearer Token obtido no endpoint de autenticação',
            type: 'apiKey',
            in: 'header'
        }
    },
    definitions: {
        month: '2021-11',
        CEP: '30692080'
    },
    components: {}
};

swaggerAutogen(options)(outputFile, endpointsFiles, documentation);
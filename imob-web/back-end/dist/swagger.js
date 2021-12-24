"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var swagger_autogen_1 = __importDefault(require("swagger-autogen"));
var options = {
    openapi: null,
    language: 'pt-BR',
    disableLogs: false,
    disableWarnings: false
};
var outputFile = "" + path_1.default.join(__dirname, 'public', 'swagger', 'swagger.json');
var endpointsFiles = [
    "" + path_1.default.join(__dirname, 'src', 'routes', 'authentication.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'profile.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'user.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'company.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'administrator.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'manager.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'advisor.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'broker.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'secretary.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'owner.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'customer.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'property.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'lead.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'business.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'commission-receivable.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'commission-payable.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'address.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'neighborhood.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'city.routes.ts'),
    "" + path_1.default.join(__dirname, 'src', 'routes', 'state.routes.ts')
];
var documentation = {
    info: {
        version: '1.0.0',
        title: 'API IMOB Web',
        description: 'API para gestão de informações da plataforma IMOB Web',
    },
    host: 'https://api-imob-web.herokuapp.com/',
    //host: 'localhost:3000',
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
        Profile: {
            $id: 2,
            $userType: 'manager',
            $isAdmin: false,
            $permissions: {
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
            }
        },
        User: {
            id: 1,
            $name: 'wellington',
            $surname: 'felix',
            $email: 'wellington.felix@gmail.com',
            $password: 'we@#4123',
            $isAdministrator: false,
            $isManager: true,
            $isAdvisor: false,
            $isBroker: false,
            $isSecretary: false,
            $company: {
                $ref: '#/definitions/Company'
            },
            $profile: {
                $ref: '#/definitions/Profile'
            },
            administrator: {
                $ref: '#/definitions/Administrator'
            },
            manager: {
                $ref: '#/definitions/Manager'
            },
            advisor: {
                $ref: '#/definitions/Advisor'
            },
            broker: {
                $ref: '#/definitions/Broker'
            },
            secretary: {
                $ref: '#/definitions/Secretary'
            },
        },
        Company: {
            $id: 1,
            $CNPJ: '31173962000176',
            $corporateName: 'WAF Soluções Tecnologicas',
            $stateRegistration: '7816160810762',
            percentageCommissionReceivable: 10.0,
            percentageCommissionPayableForClosedDeals: 2.5,
            percentageCommissionPayableForPropertyCaptured: 0.5
        },
        Administrator: {
            $id: 1,
            $name: 'marcelo',
            $surname: 'mendes',
            $email: 'marcelo.mendes@gmail.com',
            $birthDate: '1989-06-05',
            $isAdministrator: true,
            $RG: '164297807',
            $CPF: '63203566001',
            landline: '3133228577',
            $cellPhone: '31986857814',
            profession: 'gerente de desenvolvimento'
        },
        Manager: {
            $id: 1,
            $name: 'carlos',
            $surname: 'almeida',
            $email: 'carlos.almeida@gmail.com',
            $birthDate: '1989-01-03',
            $isManager: true,
            $RG: '164297807',
            $CPF: '63203566001',
            landline: '3133228577',
            $cellPhone: '31986857814',
            profession: 'gestor',
            $company: {
                $ref: '#/definitions/Company'
            }
        },
        Advisor: {
            $id: 1,
            $name: 'palloma',
            $surname: 'felix',
            $email: 'palloma.felix@gmail.com',
            $birthDate: '1991-12-07',
            $isAdvisor: true,
            $RG: '164297807',
            $CPF: '63203566001',
            landline: '3133228577',
            $cellPhone: '31986857814',
            profession: 'despachante',
            $company: {
                $ref: '#/definitions/Company'
            }
        },
        Broker: {
            $id: 1,
            $name: 'julio',
            $surname: 'mesquita',
            $email: 'julio.mesquita@gmail.com',
            $birthDate: '1989-02-15',
            $isBroker: true,
            $RG: '164297807',
            $CPF: '63203566001',
            landline: '3133228577',
            $cellPhone: '31986857814',
            profession: 'corretor',
            $company: {
                $ref: '#/definitions/Company'
            }
        },
        Secretary: {
            $id: 1,
            $name: 'sheila',
            $surname: 'alves',
            $email: 'sheila.alves@gmail.com',
            $birthDate: '1989-10-05',
            $isSecretary: true,
            $RG: '164297807',
            $CPF: '63203566001',
            landline: '3133228577',
            $cellPhone: '31986857814',
            profession: 'secretária',
            $company: {
                $ref: '#/definitions/Company'
            }
        },
        Owner: {
            $id: 1,
            $name: 'gustavo',
            $surname: 'alvares',
            $email: 'gustavo.alvares@gmail.com',
            $birthDate: '1989-11-25',
            $checked: false,
            $isOwner: true,
            $RG: '164297807',
            $CPF: '63203566001',
            landline: '3133228577',
            $cellPhone: '31986857814',
            profession: 'motorista de táxi',
            $company: {
                $ref: '#/definitions/Company'
            }
        },
        Customer: {
            $id: 1,
            $name: 'florisvaldo',
            $surname: 'miranda',
            $email: 'florisvaldo.miranda@gmail.com',
            $birthDate: '1989-12-02',
            $isCustomer: true,
            $RG: '164297807',
            $CPF: '63203566001',
            landline: '3133228577',
            $cellPhone: '31986857814',
            profession: 'jardineiro',
            $company: {
                $ref: '#/definitions/Company'
            }
        },
        Property: {
            id: 1,
            description: 'casa de 2 andares no bairro santa efigênia',
            photos: {
                paths: [
                    '/images/31173962000176/01.jpg',
                    '/images/31173962000176/02.jpg',
                    '/images/31173962000176/03.jpg'
                ]
            },
            $checked: false,
            elevator: true,
            bedrooms: 4,
            bathrooms: 2,
            suites: 0,
            parkingLots: 1,
            terrainArea: 600.00,
            buildingArea: 750.00,
            totalUtilTerrainArea: 1000.00,
            condominium: 250.00,
            IPTU: 1000.00,
            value: 450000.00,
            $company: {
                $ref: '#/definitions/Company'
            },
            administrator: {
                $ref: '#/definitions/Administrator'
            },
            manager: {
                $ref: '#/definitions/Manager'
            },
            advisor: {
                $ref: '#/definitions/Advisor'
            },
            broker: {
                $ref: '#/definitions/Broker'
            },
            secretary: {
                $ref: '#/definitions/Secretary'
            }
        },
        Lead: {
            $id: 1,
            $name: 'túlio',
            $surname: 'menezes',
            $email: 'tulio.menezes@gmail.com',
            $source: 0,
            landline: '3133228554',
            $cellPhone: '31996214054',
            comments: 'interessado no imóvel do bairro santa efigênia',
            $createdByAdministrator: false,
            $createdByManager: false,
            $createdBySecretary: true,
            $company: {
                $ref: '#/definitions/Company'
            },
            administrator: {
                $ref: '#/definitions/Administrator'
            },
            manager: {
                $ref: '#/definitions/Manager'
            },
            secretary: {
                $ref: '#/definitions/Secretary'
            }
        },
        Business: {
            $id: 1,
            $status: 4,
            $dateVisit: '2021-12-01T14:00:00',
            $dateSale: '2021-12-10T09:00:00',
            visitForm: '/forms/31173962000176/form.jpg',
            propertyRegistration: '/docs/31173962000176/property-registration.jpg',
            propertySaleContract: '/docs/31173962000176/property-sale.jpg',
            ITBI: '/docs/31173962000176/itbi.jpg',
            customerRG: '/docs/31173962000176/customer-rg.jpg',
            customerCPF: '/docs/31173962000176/customer-cpf.jpg',
            customerAddressProof: '/docs/31173962000176/customer-address-proof.jpg',
            customerPayslip: '/docs/31173962000176/customer-payslip.jpg',
            ownerRG: '/docs/31173962000176/owner-rg.jpg',
            ownerCPF: '/docs/31173962000176/owner-cpf.jpg',
            ownerAddressProof: '/docs/31173962000176/owner-address-proof.jpg',
            ownerPayslip: '/docs/31173962000176/owner-payslip.jpg',
            $createdByAdministrator: false,
            $createdByManager: false,
            $createdBySecretary: true,
            redirectedManagerId: 0,
            redirectedAdvisorId: 0,
            redirectedBrokerId: 1,
            $company: {
                $ref: '#/definitions/Company'
            },
            administrator: {
                $ref: '#/definitions/Administrator'
            },
            manager: {
                $ref: '#/definitions/Manager'
            },
            advisor: {
                $ref: '#/definitions/Advisor'
            },
            broker: {
                $ref: '#/definitions/Broker'
            },
            secretary: {
                $ref: '#/definitions/Secretary'
            },
            $owner: {
                $ref: '#/definitions/Owner'
            },
            $customer: {
                $ref: '#/definitions/Customer'
            },
            $property: {
                $ref: '#/definitions/Property'
            },
            $lead: {
                $ref: '#/definitions/Lead'
            }
        },
        CommissionReceivable: {
            $id: 1,
            $date: '2021-12-10',
            $value: 2500.00,
            $company: {
                $ref: '#/definitions/Company'
            },
            $property: {
                $ref: '#/definitions/Property'
            }
        },
        CommissionPayable: {
            $id: 1,
            $date: '2021-12-10',
            $valueClosedDeals: 250.00,
            $valuePropertyCaptured: 0,
            $company: {
                $ref: '#/definitions/Company'
            },
            $broker: {
                $ref: '#/definitions/Broker'
            },
            $property: {
                $ref: '#/definitions/Property'
            }
        },
        Address: {
            $id: 1,
            $street: 'avenida ibirapuera',
            $complement: 'casa',
            $number: '480',
            $CEP: '30692080',
            $isCompany: false,
            $isManager: false,
            $isAdvisor: false,
            $isBroker: false,
            $isSecretary: false,
            $isOwner: false,
            $isCustomer: false,
            $isProperty: true,
            $company: {
                $ref: '#/definitions/Company'
            },
            $neighborhood: {
                $ref: '#/definitions/Neighborhood'
            },
            manager: {
                $ref: '#/definitions/Manager'
            },
            advisor: {
                $ref: '#/definitions/Advisor'
            },
            broker: {
                $ref: '#/definitions/Broker'
            },
            secretary: {
                $ref: '#/definitions/Secretary'
            },
            owner: {
                $ref: '#/definitions/Owner'
            },
            customer: {
                $ref: '#/definitions/Customer'
            },
            property: {
                $ref: '#/definitions/Property'
            }
        },
        Neighborhood: {
            $id: 1,
            $neighborhood: 'itaipu (barreiro)',
            $city: {
                $ref: '#/definitions/City'
            }
        },
        City: {
            id: 1,
            city: 'belo horizonte',
            state: {
                $ref: '#/definitions/State'
            }
        },
        State: {
            id: 1,
            state: 'minas gerais',
            UF: 'MG'
        },
        authentication: {
            $email: 'wellington.felix@gmail.com',
            $password: '12345678'
        },
        createUser: {
            $name: 'wellington',
            $surname: 'felix',
            $email: "wellington.felix@gmail.com",
            $password: '12345678',
            $company: {
                $id: 0
            },
            $profile: {
                $id: 2
            }
        },
        updateUser: {
            $name: 'wellington',
            $surname: 'aparecido',
            $email: 'wellington.felix@gmail.com',
            $password: '12345678'
        },
        createCompany: {
            $CNPJ: '75536670000126',
            $coporateName: 'WAF Soluções Tecnologicas',
            $stateRegistration: '0467483802980',
            percentageCommissionReceivable: 5.5,
            percentageCommissionPayableForClosedDeals: 10.3,
            percentageCommissionPayableForPropertyCaptured: 2
        },
        updateCompany: {
            $CNPJ: '75536670000126',
            $coporateName: 'WAF Soluções Tecnologicas',
            $stateRegistration: '0467483802980',
            percentageCommissionReceivable: 10.5,
            percentageCommissionPayableForClosedDeals: 5,
            percentageCommissionPayableForPropertyCaptured: 1
        },
        updateAdministrator: {
            $name: 'heitor',
            $surname: 'miranda',
            $email: 'heitor.miranda@gmail.com',
            $birthDate: '1989-06-16',
            $RG: '157882299',
            $CPF: '09126126621',
            landline: '3133228544',
            $cellPhone: '31986857812',
            profession: 'desenvolvedor web'
        },
        updateManager: {
            $name: 'joao',
            $surname: 'almeida',
            $email: 'joao.almeida@gmail.com',
            $birthDate: '2021-03-08',
            $RG: '157882299',
            $CPF: '20717934047',
            landline: '3133228544',
            $cellPhone: '31986857815',
            profession: 'gestor'
        },
        updateAdvisor: {
            $name: 'maria',
            $surname: 'tereza',
            $email: 'maria.tereza@gmail.com',
            $birthDate: '2021-03-08',
            $RG: '157882299',
            $CPF: '20717934047',
            landline: '3133228544',
            $cellPhone: '31986857815',
            profession: 'despachante'
        },
        updateBroker: {
            $name: 'tiago',
            $surname: 'teixeira',
            $email: 'tiago.teixeira@gmail.com',
            $birthDate: '2021-03-08',
            $RG: '157882299',
            $CPF: '20717934047',
            landline: '3133228544',
            $cellPhone: '31986857815',
            profession: 'corretor'
        },
        updateSecretary: {
            $name: 'mariana',
            $surname: 'ramos',
            $email: 'mariana.ramos@gmail.com',
            $birthDate: '2021-03-08',
            $RG: '157882299',
            $CPF: '20717934047',
            landline: '3133228544',
            $cellPhone: '31986857815',
            profession: 'secretária'
        },
        createOwner: {
            $name: 'cesar',
            $surname: 'brito',
            $email: 'cesar.brito@gmail.com',
            $birthDate: '2021-03-08',
            $checked: false,
            $RG: '157882299',
            $CPF: '20717934047',
            landline: '',
            $cellPhone: '31986857815',
            profession: ''
        },
        updateOwner: {
            $name: 'cesar',
            $surname: 'brito',
            $email: 'cesar.brito@gmail.com',
            $birthDate: '2021-03-08',
            $RG: '157882299',
            $CPF: '20717934047',
            landline: '3133228544',
            $cellPhone: '31986857815',
            profession: 'engenheiro civil'
        },
        createCustomer: {
            $name: 'florisvaldo',
            $surname: 'miranda',
            $email: 'florisvaldo.miranda@gmail.com',
            $birthDate: '2021-03-08',
            $RG: '157882299',
            $CPF: '20717934047',
            landline: '',
            $cellPhone: '31986857815',
            profession: ''
        },
        updateCustomer: {
            $name: 'florisvaldo',
            $surname: 'miranda',
            $email: 'florisvaldo.miranda@gmail.com',
            $birthDate: '2021-03-08',
            $RG: '157882299',
            $CPF: '20717934047',
            landline: '3133228544',
            $cellPhone: '31986857815',
            profession: 'jardineiro'
        },
        createProperty: {
            description: 'casa de 2 andares, total de 14 cômodos',
            photos: {
                paths: []
            },
            $checked: false,
            elevator: false,
            bedrooms: 2,
            bathrooms: 5,
            suites: 0,
            parkingLots: 2,
            terrainArea: 1000,
            buildingArea: 800,
            totalUtilTerrainArea: 1000,
            condominium: 0,
            IPTU: 0,
            value: 450000
        },
        updateProperty: {
            description: 'casa de 1 andar',
            photos: {
                paths: []
            },
            $checked: true,
            elevator: true,
            bedrooms: 3,
            bathrooms: 3,
            suites: 1,
            parkingLots: 2,
            terrainArea: 1000,
            buildingArea: 800,
            totalUtilTerrainArea: 1000,
            condominium: 250.50,
            IPTU: 1500.75,
            value: 500975.25
        },
        createLead: {
            $name: 'túlio',
            $surname: 'menezes',
            $email: 'tulio.menezes@gmail.com',
            $source: 0,
            landline: '',
            $cellPhone: '31996214031',
            comments: '',
            $createdByAdministrator: false,
            $createdByManager: true,
            $createdBySecretary: false
        },
        updateLead: {
            $name: 'túlio',
            $surname: 'menezes',
            $email: 'tulio.menezes@gmail.com',
            $source: 1,
            landline: '3133228544',
            $cellPhone: '31996214031',
            comments: 'está interessado no imóvel do bairro serra',
            $createdByAdministrator: false,
            $createdByManager: true,
            $createdBySecretary: false
        },
        createBusiness: {
            $status: 0,
            dateVisit: '',
            dateSale: '',
            visitForm: '',
            propertyRegistration: '',
            propertySaleContract: '',
            ITBI: '',
            customerRG: '',
            customerCPF: '',
            customerAddressProof: '',
            customerPayslip: '',
            ownerRG: '',
            ownerCPF: '',
            ownerAddressProof: '',
            ownerPayslip: '',
            $createdByAdministrator: false,
            $createdByManager: true,
            $createdBySecretary: false,
            redirectedManagerId: 0,
            redirectedAdvisorId: 0,
            redirectedBrokerId: 1,
            administrator: {},
            manager: {
                id: 1
            },
            advisor: {},
            broker: {
                id: 1
            },
            secretary: {
                id: 1
            },
            $owner: {
                id: 1
            },
            $customer: {
                id: 1
            },
            $property: {
                id: 1
            },
            $lead: {
                id: 1
            }
        },
        updateBusiness: {
            $status: 0,
            dateVisit: '2021-11-15T15:30:00',
            dateSale: '2021-12-01T18:00:00',
            visitForm: '/forms/00000000000000/form.jpg',
            propertyRegistration: '/docs/00000000000000/property-registration.jpg',
            propertySaleContract: '/docs/00000000000000/property-sale.jpg',
            ITBI: '/docs/00000000000000/itbi.jpg',
            customerRG: '/docs/00000000000000/customer-rg.jpg',
            customerCPF: '/docs/00000000000000/customer-cpf.jpg',
            customerAddressProof: '/docs/00000000000000/customer-address-proof.jpg',
            customerPayslip: '/docs/00000000000000/customer-payslip.jpg',
            ownerRG: '/docs/00000000000000/owner-rg.jpg',
            ownerCPF: '/docs/00000000000000/owner-cpf.jpg',
            ownerAddressProof: '/docs/00000000000000/owner-address-proof.jpg',
            ownerPayslip: '/docs/00000000000000/owner-payslip.jpg',
            $createdByAdministrator: false,
            $createdByManager: true,
            $createdBySecretary: false,
            redirectedManagerId: 0,
            redirectedAdvisorId: 0,
            redirectedBrokerId: 1,
            administrator: {},
            manager: {
                id: 1
            },
            advisor: {},
            broker: {
                id: 1
            },
            secretary: {
                id: 1
            },
            $owner: {
                id: 1
            },
            $customer: {
                id: 1
            },
            $property: {
                id: 1
            },
            $lead: {
                id: 1
            }
        },
        transferManager: {
            manager: {
                id: 1
            }
        },
        transferAdvisor: {
            advisor: {
                id: 1
            }
        },
        transferBroker: {
            broker: {
                id: 1
            }
        },
        createCommissionReceivable: {
            $date: '2021-12-04',
            $value: 1500,
            $property: {
                id: 1
            }
        },
        updateCommissionReceivable: {
            $date: '2021-12-04',
            $value: 2000
        },
        createCommissionPayable: {
            $date: '2021-12-02',
            $valueClosedDeals: 1000,
            $valuePropertyCaptured: 500,
            $broker: {
                id: 1
            },
            $property: {
                id: 1
            }
        },
        updateCommissionPayable: {
            $date: '2021-12-02',
            $valueClosedDeals: 0,
            $valuePropertyCaptured: 250
        },
        createAddress: {
            $street: 'rua ibirapuera',
            complement: '',
            $number: '480',
            $CEP: '30692080',
            $isCompany: false,
            $isManager: true,
            $isAdvisor: false,
            $isBroker: false,
            $isSecretary: false,
            $isOwner: false,
            $isCustomer: false,
            $isProperty: false,
            $neighborhood: {
                id: 1
            },
            manager: {
                id: 1
            },
            advisor: {},
            broker: {},
            secretary: {},
            owner: {},
            customer: {},
            property: {}
        },
        updateAddress: {
            $street: 'avenida marte',
            complement: 'casa',
            $number: '214',
            $CEP: '32241395',
            $isCompany: false,
            $isManager: true,
            $isAdvisor: false,
            $isBroker: false,
            $isSecretary: false,
            $isOwner: false,
            $isCustomer: false,
            $isProperty: false,
            $neighborhood: {
                id: 2
            }
        },
        createNeighborhood: {
            $neighborhood: 'itaipú (barreiro)',
            $city: {
                id: 1
            }
        },
        updateNeighborhood: {
            $neighborhood: 'riacho das pedras',
            $city: {
                id: 2
            }
        },
        createCity: {
            $city: 'belo horizonte',
            $state: {
                id: 12
            }
        },
        updateCity: {
            $city: 'contagem',
            $state: {
                id: 12
            }
        },
        id: 1,
        month: '2021-12',
        CEP: '30692080'
    },
    components: {}
};
(0, swagger_autogen_1.default)(options)(outputFile, endpointsFiles, documentation);
//# sourceMappingURL=swagger.js.map
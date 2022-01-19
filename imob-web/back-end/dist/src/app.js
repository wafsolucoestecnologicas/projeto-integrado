"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var index_routes_1 = __importDefault(require("./routes/index.routes"));
var authentication_middleware_1 = __importDefault(require("./middlewares/authentication.middleware"));
var manage_user_profile_middleware_1 = __importDefault(require("./middlewares/manage-user-profile.middleware"));
var dotenv_1 = __importDefault(require("../config/dotenv"));
var swagger_json_1 = __importDefault(require("../public/swagger/swagger.json"));
var App = /** @class */ (function () {
    function App() {
        this.port = dotenv_1.default.SERVER.PORT || 3000;
        this.origins = ['http://localhost:3000', 'https://api-imob-web.herokuapp.com'];
        this.options = {
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token'
            ],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: this.origins,
            preflightContinue: false
        };
        this.express = (0, express_1.default)();
        switch (dotenv_1.default.ENVIRONMENT) {
            case 'production':
                this.production = {
                    type: 'postgres',
                    host: 'tcc-puc-minas-db-1.c79fjwhk0fpx.us-east-1.rds.amazonaws.com',
                    port: 5432,
                    username: 'tccpucminasadmin',
                    password: '9MqS97pbzvjSQprORZ6t',
                    database: 'imob_web',
                    synchronize: false,
                    logging: true,
                    entities: [
                        "" + path_1.default.join(__dirname, 'api', 'entities', '*.js'),
                    ],
                    migrations: [
                        "" + path_1.default.join(__dirname, 'database', 'migrations', '*.js')
                    ],
                    cli: {
                        migrationsDir: "" + path_1.default.join(__dirname, 'database', 'migrations')
                    }
                };
                break;
            case 'development':
                this.development = {
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: 'admin',
                    database: 'imob_web',
                    synchronize: false,
                    logging: true,
                    entities: [
                        "" + path_1.default.join(__dirname, 'api', 'entities', '*.ts'),
                        "" + path_1.default.join(__dirname, 'api', 'entities', '*.js')
                    ],
                    migrations: [
                        "" + path_1.default.join(__dirname, 'database', 'migrations', '*.ts')
                    ],
                    subscribers: [
                        "" + path_1.default.join(__dirname, 'subscriber', '**', '*.ts')
                    ],
                    cli: {
                        migrationsDir: "" + path_1.default.join(__dirname, 'database', 'migrations')
                    }
                };
                break;
        }
        this.middlewares();
        this.database();
        this.routes();
        this.listen();
    }
    App.prototype.middlewares = function () {
        this.express.use((0, cors_1.default)(this.options));
        this.express.use(express_1.default.json());
        this.express.use(authentication_middleware_1.default);
        this.express.use(manage_user_profile_middleware_1.default);
    };
    App.prototype.database = function () {
        switch (dotenv_1.default.ENVIRONMENT) {
            case 'production':
                (0, typeorm_1.createConnection)(this.production)
                    .then(function () {
                    console.log('Conexão com o Banco de Dados de Produção Realizada com Sucesso!');
                }).catch(function (error) {
                    console.log('Conexão com o Banco de Dados Não Realizada!', error);
                });
                break;
            case 'development':
                (0, typeorm_1.createConnection)(this.development)
                    .then(function () {
                    console.log('Conexão com o Banco de Dados de Desenvolvimento Realizada com Sucesso!');
                }).catch(function (error) {
                    console.log('Conexão com o Banco de Dados Não Realizada!', error);
                });
                break;
        }
    };
    App.prototype.routes = function () {
        this.express.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
        this.express.use('/authentications', index_routes_1.default.authentication);
        this.express.use('/companies', index_routes_1.default.company);
        this.express.use('/profiles', index_routes_1.default.profile);
        this.express.use('/users', index_routes_1.default.user);
        this.express.use('/administrators', index_routes_1.default.administrator);
        this.express.use('/managers', index_routes_1.default.manager);
        this.express.use('/advisors', index_routes_1.default.advisor);
        this.express.use('/brokers', index_routes_1.default.broker);
        this.express.use('/secretaries', index_routes_1.default.secretary);
        this.express.use('/owners', index_routes_1.default.owner);
        this.express.use('/customers', index_routes_1.default.customer);
        this.express.use('/properties', index_routes_1.default.property);
        this.express.use('/leads', index_routes_1.default.lead);
        this.express.use('/businesses', index_routes_1.default.business);
        this.express.use('/commissions-receivable', index_routes_1.default.receivable);
        this.express.use('/commissions-payable', index_routes_1.default.payable);
        this.express.use('/adresses', index_routes_1.default.address);
        this.express.use('/neighborhoods', index_routes_1.default.neighborhood);
        this.express.use('/cities', index_routes_1.default.city);
        this.express.use('/states', index_routes_1.default.state);
    };
    App.prototype.listen = function () {
        var _this = this;
        this.express.listen(this.port, function () {
            console.log("Servidor Rodando na Porta " + _this.port + "!");
        });
    };
    App.prototype.startApp = function () {
        return this.express;
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map
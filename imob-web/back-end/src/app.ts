import 'reflect-metadata';
import { ConnectionOptions, createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import path from 'path';
import swaggerUiExpress from 'swagger-ui-express';

import routes from './routes/index.routes';
import authentication from './middlewares/authentication.middleware';
import manage from './middlewares/manage-user-profile.middleware';
import CONFIGURATION from '../config/dotenv';
import swaggerFile from '../public/swagger/swagger.json';

export class App {

    private port: number;
    private express: express.Application;
    private production: ConnectionOptions;
    private development: ConnectionOptions;

    constructor() {
        this.port = CONFIGURATION.SERVER.PORT || 3000;
        this.express = express();

        switch (CONFIGURATION.ENVIRONMENT) {
            case 'production':
                this.production = {
                    type: 'postgres',
                    host: 'tcc-puc-minas-db.c79fjwhk0fpx.us-east-1.rds.amazonaws.com',
                    port: 5432,
                    username: 'tccpucminasadmin',
                    password: '9MqS97pbzvjSQprORZ6t',
                    database: 'imob_web',
                    synchronize: false,
                    logging: true,
                    entities: [
                        `${path.join(__dirname, 'api', 'entities', '*.ts')}`,
                        `${path.join(__dirname, 'api', 'entities', '*.js')}`
                    ],
                    migrations: [
                        `${path.join(__dirname, 'database', 'migrations', '*.ts')}`
                    ],
                    subscribers: [
                        `${path.join(__dirname, 'subscriber', '**', '*.ts')}`
                    ],
                    cli: {
                        migrationsDir: `${path.join(__dirname, 'database', 'migrations')}`
                    }
                }
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
                        `${path.join(__dirname, 'api', 'entities', '*.ts')}`,
                        `${path.join(__dirname, 'api', 'entities', '*.js')}`
                    ],
                    migrations: [
                        `${path.join(__dirname, 'database', 'migrations', '*.ts')}`
                    ],
                    subscribers: [
                        `${path.join(__dirname, 'subscriber', '**', '*.ts')}`
                    ],
                    cli: {
                        migrationsDir: `${path.join(__dirname, 'database', 'migrations')}`
                    }
                }
                break;
        }

        this.middlewares();
        this.database();
        this.routes();
        this.listen();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(authentication);
        this.express.use(manage);
    }

    private database(): void {
        switch (CONFIGURATION.ENVIRONMENT) {
            case 'production':
                createConnection(this.production)
                    .then(() => {
                        console.log('Conexão com o Banco de Dados Realizada com Sucesso!');
                    }).catch((error: any) => {
                        console.log('Conexão com o Banco de Dados Não Realizada!', error);
                    });
                break;

            case 'development':
                createConnection(this.development)
                    .then(() => {
                        console.log('Conexão com o Banco de Dados Realizada com Sucesso!');
                    }).catch((error: any) => {
                        console.log('Conexão com o Banco de Dados Não Realizada!', error);
                    });
                break;
        }
    }

    private routes(): void {
        this.express.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerFile));
        this.express.use('/authentications', routes.authentication);
        this.express.use('/companies', routes.company);
        this.express.use('/profiles', routes.profile);
        this.express.use('/users', routes.user);
        this.express.use('/administrators', routes.administrator);
        this.express.use('/managers', routes.manager);
        this.express.use('/advisors', routes.advisor);
        this.express.use('/brokers', routes.broker);
        this.express.use('/secretaries', routes.secretary);
        this.express.use('/owners', routes.owner);
        this.express.use('/customers', routes.customer);
        this.express.use('/properties', routes.property);
        this.express.use('/leads', routes.lead);
        this.express.use('/businesses', routes.business);
        this.express.use('/commissions-receivable', routes.receivable);
        this.express.use('/commissions-payable', routes.payable);
        this.express.use('/adresses', routes.address);
        this.express.use('/neighborhoods', routes.neighborhood);
        this.express.use('/cities', routes.city);
        this.express.use('/states', routes.state);
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log(`Servidor Rodando na Porta ${this.port}!`);
        })
    }

    public startApp(): express.Application {
        return this.express;
    }

}
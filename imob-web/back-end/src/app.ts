import 'reflect-metadata';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes/index';
import authentication from './middlewares/authentication.middleware';
import CONFIGURATION from '../config/dotenv';

export class App {

    private port: number;
    private express: express.Application;
    private options: ConnectionOptions;
    private connection: Connection;

    constructor() {
        this.port = (CONFIGURATION.SERVER.PORT) ? CONFIGURATION.SERVER.PORT : 3000;
        this.express = express();
        this.options = {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'admin',
            database: 'imob_web',
            synchronize: false,
            logging: true,
            entities: [
                `${path.join(__dirname, 'api', 'models', '*.ts')}`,
                `${path.join(__dirname, 'api', 'models', '*.js')}`
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

        this.middlewares();
        this.database();
        this.routes();
        this.listen();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(authentication);
    }

    private database(): void {
        switch (CONFIGURATION.ENVIRONMENT) {
            case 'production':
                createConnection()
                    .then(() => {
                        console.log('Conexão com o Banco de Dados Realizada com Sucesso!');
                    }).catch((error: any) => {
                        console.log('Conexão com o Banco de Dados Não Realizada!', error);
                    });
                break;

            case 'development':
                createConnection(this.options)
                    .then(() => {
                        console.log('Conexão com o Banco de Dados Realizada com Sucesso!');
                    }).catch((error: any) => {
                        console.log('Conexão com o Banco de Dados Não Realizada!', error);
                    });
                break;
        }
    }

    private routes(): void {
        this.express.use('/authentication', routes.authentication);
        this.express.use('/companies', routes.company);
        this.express.use('/profiles', routes.profile);
        this.express.use('/users', routes.user);
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
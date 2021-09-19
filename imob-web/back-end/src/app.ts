import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';

import routes from './routes/index';
import { authenticationMiddleware } from './middlewares/authentication.middleware';
import CONFIGURATION from '../config/dotenv';

export class App {

    private express: express.Application;
    private port: number;

    constructor() {
        this.express = express();
        this.port = (CONFIGURATION.SERVER.PORT) ? CONFIGURATION.SERVER.PORT : 3000;

        this.middlewares();
        this.database();
        this.routes();
        this.listen();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(authenticationMiddleware);
    }

    private database(): void {
        createConnection()
            .then(() => {
                console.log('Conexão com o Banco de Dados Realizada com Sucesso!');
            })
            .catch((error: any) => {
                console.log('Conexão com o Banco de Dados Não Realizada!', error);
            });
    }

    private routes(): void {
        this.express.use('/authentication', routes.authentication);
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
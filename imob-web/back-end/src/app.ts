import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import cors from 'cors';

import routes from './routes/index';

export class App {

    private express: express.Application;
    private port: number;

    constructor() {
        this.express = express();
        this.port = 3000;

        this.middlewares();
        this.database();
        this.routes();
        this.listen();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
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
        this.express.use('/users', routes.users);
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
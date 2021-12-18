import path from 'path';
import dotenv from 'dotenv';

import { Configuration } from '../utils/interfaces/dotenv.interfaces';

let pathConfig: string = '';

switch (process.env.NODE_ENV) {
    case 'production':
        pathConfig = path.join(__dirname, '..', '.env');
        break;

    case 'development':
        pathConfig = path.join(__dirname, '..', 'environments', '.development.env');
        break;
}

dotenv.config({ path: pathConfig });

/**
 * Montando objeto com os dados de conexão do banco de dados no Heroku
 */
const url: string | undefined = process.env.DATABASE_URL;
const obj: any = {};

if (url) {
    const array: string[] = url.split(' ');

    obj.name = array[0].slice(7);
    obj.host = array[1].slice(5);
    obj.port = array[2].slice(5);
    obj.user = array[3].slice(5);
    obj.password = array[4].slice(9);
}

const CONFIGURATION: Configuration = {
    ENVIRONMENT: process.env.NODE_ENV || '',
    SERVER: {
        PORT: 0
    },
    DATABASE: {
        NAME: '',
        HOST: '',
        PORT: 0,
        USERNAME: '',
        PASSWORD: ''
    },
    JWT: {
        PRIVATE_KEY: ''
    }
};

CONFIGURATION.SERVER.PORT = Number(process.env.PORT);
CONFIGURATION.DATABASE.NAME = obj.name;
CONFIGURATION.DATABASE.HOST = obj.host;
CONFIGURATION.DATABASE.PORT = obj.port;
CONFIGURATION.DATABASE.USERNAME = obj.username;
CONFIGURATION.DATABASE.PASSWORD = obj.password;
CONFIGURATION.JWT.PRIVATE_KEY = process.env.PRIVATE_KEY || '';

export default CONFIGURATION;

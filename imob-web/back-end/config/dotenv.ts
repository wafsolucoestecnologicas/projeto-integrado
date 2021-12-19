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

const CONFIGURATION: Configuration = {
    ENVIRONMENT: process.env.NODE_ENV || '',
    SERVER: {
        PORT: 0
    },
    DATABASE: {
        URL: '',
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
CONFIGURATION.DATABASE.URL = (process.env.DATABASE_URL) ? process.env.DATABASE_URL : '';
CONFIGURATION.DATABASE.NAME = '';
CONFIGURATION.DATABASE.HOST = '';
CONFIGURATION.DATABASE.PORT = 0;
CONFIGURATION.DATABASE.USERNAME = '';
CONFIGURATION.DATABASE.PASSWORD = '';
CONFIGURATION.JWT.PRIVATE_KEY = process.env.PRIVATE_KEY || '';

export default CONFIGURATION;

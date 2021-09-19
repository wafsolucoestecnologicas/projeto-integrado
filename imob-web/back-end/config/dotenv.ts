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
    SERVER: {
        PORT: 0
    },
    JWT: {
        PRIVATE_KEY: ''
    }
};

CONFIGURATION.SERVER.PORT = Number(process.env.SERVER_PORT);
CONFIGURATION.JWT.PRIVATE_KEY = process.env.PRIVATE_KEY || '';

export default CONFIGURATION;

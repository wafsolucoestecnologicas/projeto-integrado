export interface Configuration {
    ENVIRONMENT: string;
    SERVER: {
        PORT: number
    },
    DATABASE: {
        URL: any,
        NAME: string,
        HOST: string,
        PORT: number,
        USERNAME: string,
        PASSWORD: string
    }
    JWT: {
        PRIVATE_KEY: string
    }
}
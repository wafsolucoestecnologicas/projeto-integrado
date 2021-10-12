export interface Configuration {
    ENVIRONMENT: string,
    SERVER: {
        PORT: number
    },
    JWT: {
        PRIVATE_KEY: string
    }
}
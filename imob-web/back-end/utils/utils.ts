const statusMessages: { [key: number]: string } = {
    401: 'Não possui credenciais de autenticação válidas para o recurso!',
    409: 'Solicitação atual conflitou com o recurso que está no servidor!'
};

export default statusMessages;
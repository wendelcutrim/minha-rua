const axios = require('axios');

const brasilApi = axios.create({baseURL: "https://brasilapi.com.br/api"});

const methods = {
    getCep: async (cep) => {
        try {
            const response = await brasilApi.get(`/cep/v2/${cep}`);

            if (response.status !== 200) {
                throw new Error({
                    info: "A requisição deu ruim ☹️",
                    status: response.status,
                    message: response.statusText,
                });
            }
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = methods;
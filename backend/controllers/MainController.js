const cepApi = require('../services/cepApi');

const MainController = {
    getAddressByCep: async (req, res) => {
        try{
            const {number} = req.params;
            const response = await cepApi.getCep(number);
            /* const { cep, state, city, neighborhood, street } = response;
            const response = {
                cep,
                uf: state,
                cidade: city,
                bairro: neighborhood,
                rua: street
            } */
            const data = {
                cep: response.cep,
                uf: response.state,
                cidade: response.city,
                bairro: response.neighborhood,
                rua: response.street
            }
            return res.status(200).json(data);
        } catch(err){
            return res.status(500).json(err);
        }
    }
}

module.exports = MainController;
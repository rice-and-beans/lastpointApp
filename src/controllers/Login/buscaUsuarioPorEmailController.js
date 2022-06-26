import { MensagensConstants } from '../../constants/mensagensConstants';
const axios = require('axios');

export class BuscarUsuarioPorEmailController {

    async execute(login) {
        return await axios.get('http://localhost:3001/usuario/email', {
            params:{
                email: login
            }
        }).then(function (response) {
            if(response){
                return response.data ? response.data : null
            }else{
                return null;
            }
        }).catch((err) => {
            if(err.message && err.message.includes(MensagensConstants.MGS_SERVICO_INDISPONIVEL_AUTH)){
                throw new Error("Serviço indisponível: AuthApi");
            }else{
                return null;
            }
        });
    }

}
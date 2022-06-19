import { MensagensConstants } from '../../constants/mensagensConstants';
const axios = require('axios');

export class GerarTokenUsuarioController {

    async gerarTokenUsuario(login, senha) {
        return await axios.post('http://localhost:3002/auth/', {
            login: login,
            senha: senha
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
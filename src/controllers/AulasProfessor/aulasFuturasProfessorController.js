import { MensagensConstants } from '../../constants/mensagensConstants';
const axios = require('axios');

export class AulasFuturasProfessorController
{
    async buscaAulasFuturasProfessorController(token, codigo){
        return await axios.get('http://localhost:3001/aula/HistoricoAulasFuturasProfessor', {
            headers:{
               "x-access-token": token
            },
            params: {
                codigo: codigo
            }
        }).then(function (response) {
            if(response){
                return response.data ? response.data : null
            }else{
                return null;
            }
        }).catch((err) => {
            console.log(err)
            if(err.message && err.message.includes(MensagensConstants.MGS_SERVICO_INDISPONIVEL_AUTH)){
                throw new Error("Serviço indisponível: AuthApi");
            }else{
                return null;
            }
        });
    }
}
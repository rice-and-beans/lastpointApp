import { MensagensConstants } from '../../constants/mensagensConstants';
const axios = require('axios');

export class GeraQrcodeAulaController {

    async execute(token, codProfessor, codAula) {
        return await axios.get('http://localhost:3003/qrcode/', {
            headers: {
                "x-access-token": token
            },
            params:{
                codProfessor: codProfessor,
                codAula: codAula
            }
        }).then(function (response) {
            if(response){
                return response.data ? response.data : null
            }else{
                return null;
            }
        }).catch((err) => {
            if(err.message && err.message.includes(MensagensConstants.MGS_SERVICO_INDISPONIVEL_AUTH)){
                throw new Error("Serviço indisponível: CallerServiceApi");
            }else{
                return null;
            }
        });
    }

}
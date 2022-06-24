import { MensagensConstants } from '../../constants/mensagensConstants';
const axios = require('axios');

export class RealizaChamadaQrCodeController {

    async execute(token, codigo, chaveAula){
        return await axios.post('http://localhost:3001/chamada/realizaChamadaQrCode', {
            headers:{
               "x-access-token": token
            },
            data: {
                codUsuario: codigo,
                chaveAula: chaveAula
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
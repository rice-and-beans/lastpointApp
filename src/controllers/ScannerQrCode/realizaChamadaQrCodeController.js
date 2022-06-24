import { MensagensConstants } from '../../constants/mensagensConstants';
const axios = require('axios');

export class RealizaChamadaQrCodeController {

    async execute(token, codigo, chaveAula){
        return await axios.post('http://localhost:3003/qrcode/', {
            codUsuario: codigo,
            chaveAula: chaveAula
        }, 
        {
            headers:{
                "x-access-token": token
            }
        }).then(function (response) {
            if(response && response.status){
                return response.status;
            }else if(response){
                return response.data ? response.data : null
            }else{
                return null;
            }
        }).catch((err) => {
            if(err.message && err.message.includes(MensagensConstants.MGS_SERVICO_INDISPONIVEL_AUTH)){
                throw new Error("Serviço indisponível: AuthApi");
            }else if (err.message){
                return "Chamada já realizada";
            }else{
                return "Não foi possível realizar chamada";
            }
        });
    }

}
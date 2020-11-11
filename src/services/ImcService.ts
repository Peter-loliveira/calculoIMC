import { IImcService } from 'src/interfaces/IImcService';
import { Imc } from 'src/models/Imc';

export class ImcService implements IImcService {
    public calcularImc(imc: Imc): number {
        if(( !imc.altura || !imc.peso )) {
            alert('Ambos os campos são obrigatórios!')
            return
        }
        let ResultadoDoIMC = parseFloat( (imc.peso / Math.pow(imc.altura, 2)).toFixed(2) )
        return ResultadoDoIMC
    }
}
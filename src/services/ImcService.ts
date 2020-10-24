import { Observable } from 'rxjs';
import { IImcService } from 'src/interfaces/IImcService';
import { Imc } from 'src/models/Imc';

export class ImcService implements IImcService {
    calcularImc(imc: Imc): Observable<number> {
        const resImc = imc.Peso * Math.pow(imc.Altura, 2)
        // return parseFloat(this.resImc)
        throw new Error('Ocorreu algum ERRO!');
    }

}
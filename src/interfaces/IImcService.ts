import { Imc } from 'src/models/Imc';

export interface IImcService{
    // calcularImc(imc: Imc): Observable<number>
    calcularImc(imc: Imc): number
}
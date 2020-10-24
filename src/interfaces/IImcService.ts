import { Imc } from './../models/Imc';
import { Observable } from 'rxjs';

export interface IImcService{
    calcularImc(imc: Imc): Observable<number>
}
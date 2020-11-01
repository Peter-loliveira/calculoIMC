import { ImcService } from 'src/services/ImcService';
import { Imc } from "src/models/Imc";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-imc",
  templateUrl: "./imc.page.html",
  styleUrls: ["./imc.page.scss"],
})

export class ImcPage implements OnInit {
  constructor (private imcService: ImcService){ }
  
  private _resultadoIMC: number
  private teste = 'TETE'
  public DadosIMC = new Imc();

  calcular_Imc(){
    this._resultadoIMC = this.imcService.calcularImc(this.DadosIMC)
    
    //Coloquei isso aqui abaixo porq  ue quando colocava no HTML um campo ion-label 
    //com o ngModel recebendo o resultado ele tava quebrando a página
    document.getElementById('ValorImc').innerHTML = this._resultadoIMC.toString()
  }

  ngOnInit() {}
  
}

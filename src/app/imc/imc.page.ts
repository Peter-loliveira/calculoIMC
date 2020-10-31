import { ImcService } from 'src/services/ImcService';
import { Imc } from "src/models/Imc";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-imc",
  templateUrl: "./imc.page.html",
  styleUrls: ["./imc.page.scss"],
})

export class ImcPage implements OnInit {
  private _resultadoIMC: number
  public DadosIMC = new Imc();

  constructor (private imcService: ImcService){ }
  ngOnInit() {}
  calcularImc(){
    const ValorImc = document.getElementById('ValorImc')
    this._resultadoIMC = this.imcService.calcularImc(this.DadosIMC)
    ValorImc.innerHTML = this._resultadoIMC.toString()
  }
}

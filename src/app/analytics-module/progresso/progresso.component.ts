import { Component, OnInit, ViewChild } from '@angular/core';
import { SubmissoesService } from '../submissoes.service';
import { Estatistica } from '../model/estatistica';
import { UIChart } from 'primeng/chart';
import Usuario from 'src/app/model/usuario';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  @ViewChild('chart') chart: UIChart;

  grafico;
  dados;

  constructor(private envioCodigoService: SubmissoesService) {
    this.grafico = {};
    this.dados = [0, 0, 0]

    /*this.envioCodigoService.listar().subscribe(resultados => {
      let estatistica = new Estatistica(resultados);
      let calculo = estatistica.calcularPorTipoErro();
      if (calculo.nameError != undefined) {
        this.dados[0] = calculo.nameError;
        this.chart.refresh();
      }
    });*/


    this.envioCodigoService.listarPorLogin(Usuario.getUsuarioLogado()).subscribe(resultados => {

      this.dados = this.prepararParaChart(new Estatistica(resultados).calcularPorTipoErro())
      let x = {
        data: this.dados,
        labels: ['NameError', 'ParseError', 'TypeError'],
        datasets: [
          {
            data: this.dados,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
      };

      this.grafico = Object.assign({}, x);
    }, err => {
      console.log(err);
    })
  }

  prepararParaChart(resultadosEstatisticos) {

    let dadosChart = [];


    if (resultadosEstatisticos["nameError"] != undefined) {
      dadosChart[0] = resultadosEstatisticos["nameError"];
    }

    dadosChart[1] = 0;
    dadosChart[2] = 0;

    return dadosChart;
  }

  ngOnInit() {
    this.grafico = {
      data: this.dados,
      labels: ['NameError', 'ParseError', 'TypeError'],
      datasets: [
        {
          data: this.dados,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

}

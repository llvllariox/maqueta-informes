import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label, } from 'ng2-charts';

@Component({
  selector: 'app-presupuesto-consumo',
  templateUrl: './presupuesto-consumo.component.html',
  styles: []
})
export class PresupuestoConsumoComponent implements OnInit {

//Grafico 1
public lineChartData: ChartDataSets[] = [
  { data: [1979, 1729.5, 1844.5, 1660.25, 1633.5, 1700, 1712.5], label: 'Real consumido' },
  { data: [1620, 1620, 1620, 1620, 1620, 1620, 1620], label: 'Presupuesto Mtto' },
];
public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
public lineChartOptions: any  = {
  responsive: true,
  maintainAspectRatio: false,
  scales : {
    yAxes: [{
      ticks: {
      beginAtZero: true,
          stepValue: 30,
          steps: 500,
        max : 2500,
      }
  }],
  }
};
public lineChartColors: Color[] = [
  {
    borderColor: 'rgba(251, 100, 50, 1)',
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  {
    borderColor: 'rgba(34, 80, 247, 1)',
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
];
public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = []

  // Grafico 2
  
  public canvasWidth = 343;
  public needleValue = 13;
  public centralLabel = '';
  public bottomLabel = '13%';
  public options = {
    hasNeedle: true,
    needleColor: 'black',
    needleUpdateSpeed: 1100,
    arcColors: ['rgb(255,84,84)','orange','yellow','rgb(61,204,91)','green'],
    arcDelimiters: [20,40,65,82],
    rangeLabel: ['0 HH', '360HH'],
    needleStartValue: 13,
}
//
  //Grafico 3

  public canvas2Width = 343;
  public needle2Value = 100;
  public central2Label = '';
  public bottom2Label = '120%';
  public options2 = {
    hasNeedle: true,
    needleColor: 'black',
    needleUpdateSpeed: 1100,
    arcColors: ['rgb(255,84,84)','orange','yellow','rgb(61,204,91)','green'],
    arcDelimiters: [20,40,65,82],
    rangeLabel: ['0 HH', '180HH'],
    needleStartValue: 100,
}
//
// Grafico 4
public canvas3Width = 343;
public needle3Value = 80;
public central3Label = '';
public bottom3Label = '80%';
public options3 = {
  hasNeedle: true,
  needleColor: 'black',
  needleUpdateSpeed: 1100,
  arcColors: ['rgb(255,84,84)','orange','yellow','rgb(61,204,91)','green'],
  arcDelimiters: [20,40,65,82],
  rangeLabel: ['0 HH', '180HH'],
  needleStartValue: 80,
}
//Grafico 5

public canvas4Width = 343;
public needle4Value = 100;
public central4Label = '';
public bottom4Label = '363%';
public options4 = {
  hasNeedle: true,
  needleColor: 'black',
  needleUpdateSpeed: 1100,
  arcColors: ['rgb(255,84,84)','orange','yellow','rgb(61,204,91)','green'],
  arcDelimiters: [20,40,65,82],
  rangeLabel: ['0 HH', '180HH'],
  needleStartValue: 100,
}


  ngOnInit() {
  }

}

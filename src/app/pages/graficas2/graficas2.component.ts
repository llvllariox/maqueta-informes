import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip
,MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graficas2',
  templateUrl: './graficas2.component.html',
  styles: []
})
export class Graficas2Component implements OnInit {

//Grafico 1
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public barChartLabels: Label[] = ['ARC', 'BasePOS', 'CTS', 'Famade', 'OnDemand', 'Integrity', 'Nóminas'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Cerrado de mes anterior' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ingreso mes anterior' },
    { data: [34, 12, 70, 50, 58, 37, 80], label: 'Cerrados de Julio' },
    { data: [58, 22, 34, 11, 7, 83, 37], label: 'Ingresos en Julio'}
  ];

  //
  //Grafico 2

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public pieChartLabels: Label[] = ['Acc-Analisis', 'Acc-Otro', 'TBK-Otro', 'Acc-Diseño', 'TBK-QA', 'TBK-Ambiente', 'Acc-Desarrollo', 'TBK-Ctrl Cambio'];
  public pieChartData: SingleDataSet = [300, 500, 100, 200, 120, 90, 76, 112];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
//
// Grafico 3
  // Doughnut
  public doughnutChartLabels: Label[] = ['Real            ','Pendiente   ', 'Presupuesto'];
  public doughnutChartData: MultiDataSet = [
    [0,0,900],
    [715,184]

  ];
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }
//
//Gráfico 4
public barhorChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
public barhorChartLabels: Label[] = ['Producción', 'Inc/Sop', 'Servicios', 'Prob/Man/Proy'];
public barhorChartType: ChartType = 'horizontalBar';
public barhorChartLegend = true;
public barhorChartPlugins = [];

public barhorChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81], label: 'Real' },
  { data: [28, 48, 40, 19], label: 'Presupuesto' },
];
//
// Gráfico 5
public barhor2ChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
//public barhor2ChartLabels: Label[] = ['SWF', 'Pend Asig', 'TBK', 'QA'];
public barhor2ChartType: ChartType = 'horizontalBar';
public barhor2ChartLegend = true;
public barhor2ChartPlugins = [];

public barhor2ChartData: ChartDataSets[] = [
  { data: [5], label: 'SWF' },
  { data: [17], label: 'Pend Asig' },
  { data: [0], label: 'TBK' },
  { data: [0], label: 'QA' }
];
//
// Gráfico 6
public barhor3ChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales : {
    xAxes: [{
      ticks: {
      beginAtZero: true,
          stepValue: 10,
          steps: 20,
        max : 4,
      }
  }],
  }
};
public barhor3ChartLabels: Label[] = ['Plan', 'Const', 'Diseño', 'Análisis'];
public barhor3ChartType: ChartType = 'horizontalBar';
public barhor3ChartLegend = true;
public barhor3ChartPlugins = [];

public barhor3ChartData: ChartDataSets[] = [
  { data:[1, 2, 1, 1], label: 'Total' },
];
//
// Gráfico 7
public barhor4ChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales : {
    xAxes: [{
      ticks: {
      beginAtZero: true,
          stepValue: 10,
          steps: 20,
        max : 4,
      }
  }],
  }
};
public barhor4ChartLabels: Label[] = ['Definición', 'Datos'];
public barhor4ChartType: ChartType = 'horizontalBar';
public barhor4ChartLegend = true;
public barhor4ChartPlugins = [];

public barhor4ChartData: ChartDataSets[] = [
  { data:[1, 2], label: 'Total' },
];
//
// Gráfico 8
public barhor5ChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
};
public barhor5ChartLabels: Label[] = ['Prob', 'Man', 'Proy'];
public barhor5ChartType: ChartType = 'horizontalBar';
public barhor5ChartLegend = true;
public barhor5ChartPlugins = [];

public barhor5ChartData: ChartDataSets[] = [
  { data:[2, 11, 4], label: 'Total' },
];
//
// Gráfico 9
public barhor6ChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
};
public barhor6ChartType: ChartType = 'horizontalBar';
public barhor6ChartLegend = true;
public barhor6ChartPlugins = [];

public barhor6ChartData: ChartDataSets[] = [
  { data:[1], label: 'Prob' },
  { data:[0], label: 'Man' },
  { data:[0], label: 'Proy' },
];
//


  ngOnInit() {
  }

}

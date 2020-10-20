import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip
,MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-correctivos',
  templateUrl: './correctivos.component.html',
  styles: []
})
export class CorrectivosComponent implements OnInit {

//Grafico 1
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public barChartLabels: Label[] = [''];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [31], label: 'Inc Mtto' },
    { data: [48], label: 'Inc Prod' },
    { data: [0], label: 'Canc' },
    { data: [337.5], label: 'Gestión'},
    { data: [216], label: 'Serv'},
    { data: [18], label: 'Doc'},
    { data: [167], label: 'Est'},
    { data: [25.5], label: 'Apoyo'},
    { data: [75], label: 'Sin Asig'},
  ];
  // Grafico 2
  // Doughnut
  public doughnutChartLabels: Label[] = ['Sin Asig','Detenido/Dat', 'Pend. Apro', 'En QA', 'En Curso', 'Cerrados'];
  public doughnutChartData: MultiDataSet = [
    [0,3,0,2,2,2]
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
  //Grafico 3

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
// Grafico 4
  // Doughnut
  public doughnut2ChartLabels: Label[] = ['Real','Pendiente', 'Presupuesto'];
  public doughnut2ChartData: MultiDataSet = [
    [0,0,720],
    [918,0]
  ];
  public doughnut2ChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };
  public doughnut2ChartType: ChartType = 'doughnut';

//Grafico 5

public pie2ChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
public pie2ChartLabels: Label[] = ['Críticos', 'Corporativos', 'Severidad', 'Normal'];
public pie2ChartData: SingleDataSet = [0, 1, 1, 7];
public pie2ChartType: ChartType = 'pie';
public pie2ChartLegend = true;
public pie2ChartPlugins = [];

//Gráfico 
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
public barhor2ChartLabels: Label[] = [' '];
public barhor2ChartType: ChartType = 'horizontalBar';
public barhor2ChartLegend = true;
public barhor2ChartPlugins = [];

public barhor2ChartData: ChartDataSets[] = [
  { data: [3], label: 'Inc Man' },
  { data: [4], label: 'Inc Prod' },
  { data: [0], label: 'Cancelación' },
];
//
// Gráfico 6
public barhor3ChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
};
public barhor3ChartLabels: Label[] = [' '];
public barhor3ChartType: ChartType = 'horizontalBar';
public barhor3ChartLegend = true;
public barhor3ChartPlugins = [];

public barhor3ChartData: ChartDataSets[] = [
  { data:[1], label: 'Inc Man' },
  { data:[1], label: 'Inc Prod' },
  { data:[0], label: 'Cancelación' },
];
//
// Gráfico 7
public barhor4ChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
};
public barhor4ChartLabels: Label[] = [' '];
public barhor4ChartType: ChartType = 'horizontalBar';
public barhor4ChartLegend = true;
public barhor4ChartPlugins = [];

public barhor4ChartData: ChartDataSets[] = [
  { data:[8], label: 'Serv' },
  { data:[5], label: 'Est' },
  { data:[1], label: 'Doc' },
  { data:[1], label: 'Apoyo' },
  { data:[0], label: 'Proy' },
];
//
// Gráfico 8
public barhor5ChartOptions: any = {
  responsive: true,
  maintainAspectRatio: false,
  scales : {
    xAxes: [{
      ticks: {
      beginAtZero: true,
          stepValue: 10,
          steps: 20,
        max : 6,
      }
  }],
  }
};
public barhor5ChartLabels: Label[] = [' '];
public barhor5ChartType: ChartType = 'horizontalBar';
public barhor5ChartLegend = true;
public barhor5ChartPlugins = [];

public barhor5ChartData: ChartDataSets[] = [
  { data:[6], label: 'Serv' },
  { data:[6], label: 'Est' },
  { data:[1], label: 'Doc' },
  { data:[4], label: 'Apoyo' },
  { data:[1], label: 'Proy' },
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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  // Doughnut
  // tslint:disable-next-line: no-input-rename
  @Input('chartLabels') public doughnutChartLabels: string[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('chartData') public doughnutChartData: number[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('chartType') public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}

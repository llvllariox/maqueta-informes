import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {


   graficos: any = {
      grafico1: {
      labels: ['ACCENTURE', 'SERVIEX', 'NN'],
      data:  [[24, 30, 46], [24, 30, 46]],
      type: 'doughnut',
      leyenda: 'Proveedores año 2019-2018'
    },
    grafico2: {
      labels: ['Presupuestado ', 'Incurrido'],
      data:  [123000100, 60400300],
      type: 'doughnut',
      leyenda: 'Presupuesto 2019'
    },
    grafico3: {
      labels: ['Transmision de Datos', 'Telefonia Fija','Consumo y Mantencion'],
      data:  [9, 5, 8],
      type: 'doughnut',
      leyenda: 'Distribucion por cuenta contable'
    },
    grafico4: {
      labels: ['Licencias Aplica', 'Tel. Moviles o Celulares','Servicios CAU'],
      data:  [30, 45,87],
      type: 'doughnut',
      leyenda: 'PPTO año'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonDataService } from 'src/app/services/json-data/json-data.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';
import {SelectItem} from 'primeng/api';

interface Fechas {
  name: string;
  code: string;
}

@Component({
  selector: 'app-historico2',
  templateUrl: './historico2.component.html',
  styles: []
})
export class Historico2Component implements OnInit {
  fechadesde: Date;
  fechahasta: Date;
  selectedValues: string[] = [];
  mostrar: boolean = false;
  fechas: SelectItem[];
  selectedFecha: Fechas;
  selectedRadio: string;
  activarfecha: boolean = true;
  activarcodigo: boolean = true;
  inputCodigo: string = '';
  tipoInforme: string = '';

  constructor(  public jsonDataService: JsonDataService,
                private route: ActivatedRoute,
                private sweetAlerService: SweetAlertService ) {

      this.fechas = [
        {label: 'Seleccione una fecha', value: null},
        {label: '06/07/2020', value: { id: 1, name: '06/07/2020', code: '1'}},
        {label: '29/06/2020', value: { id: 2, name: '29/06/2020', code: '2'}},
        {label: '22/06/2020', value: { id: 3, name: '22/06/2020', code: '3'}},
        {label: '15/06/2020', value: { id: 4, name: '15/06/2020', code: '4'}},
        {label: '08/06/2020', value: { id: 5, name: '08/06/2020', code: '5'}}
    ];

      this.selectedRadio = 'semana';
      this.tipoInforme = 'HI';
      this.activarcodigo = true;
      this.activarfecha = false;
      this.selectedFecha = null;

}

Buscar() {
  this.mostrar = false; 
  this.ClickRadio();
  this.mostrar = true;
}

ClickRadio() {
  console.log('El valor es', this.selectedRadio);

  if ( this.selectedRadio === 'semana') {
    this.tipoInforme = 'HI';
    this.activarcodigo = true;
    this.activarfecha = false;
    this.selectedFecha = null;

  } else if (this.selectedRadio === 'linea') {
    this.tipoInforme = 'LI';
    this.activarfecha = true;
    this.activarcodigo = false;
    this.inputCodigo = '';
  }
}

ngOnInit() {

}

}

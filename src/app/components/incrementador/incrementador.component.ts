import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje', { static: true }) txtPorcentaje: ElementRef;
  // @ViewChild('txtPorcentaje', null) txtPorcentaje: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {
    // console.log('Leyenda ', this.leyenda);
    // console.log('porcentaje ', this.porcentaje);
  }

  ngOnInit() {
    // console.log('Leyenda ', this.leyenda);
    // console.log('porcentaje ', this.porcentaje);
  }

  cambiarValor( valor: number ) {

    if ( this.porcentaje >= 100 && valor > 0 ) {
      return;
    }

    if ( this.porcentaje <= 0 && valor < 0 ) {
      return;
    }

    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje );
  }

  onChanges( newValue: number ) {

    // let elemHTML: any = document.getElementsByName('porcentaje')[0];

    console.log( this.txtPorcentaje );

    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 || newValue === null ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = Number (this.porcentaje);
    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );

    this.txtPorcentaje.nativeElement.focus();

  }

}

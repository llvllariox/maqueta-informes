import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';
import { JsonDataService } from 'src/app/services/json-data/json-data.service';


import { JsonServicesService } from 'src/app/services/service.index';
import { RootObject } from 'src/app/interfaces/inerface';

// import { JsonDataService } from '../../services/json-data/json-data.service';
// import { ActivatedRoute } from "@angular/router";
// import { SweetAlertService } from "../../services/sweet-alert/sweet-alert.service";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styles: []
})
export class SlideComponent implements OnInit {

  @Input() tipoInforme: string = '';

  jsonDataReqInf: any;
  JsonArray: any[] = [];
  icon = '';
  constructor(    public jsonDataService: JsonDataService,
                  private route: ActivatedRoute,
                  private sweetAlerService: SweetAlertService,
                  private jsonService: JsonServicesService ) {


    if (this.jsonDataService.jsonDataReqService !== undefined) {
      this.jsonDataReqInf = this.jsonDataService.getJsonDataReqService();

      console.log('El valor es ==========', this.tipoInforme);

      // if (this.tipoInforme === 'BO') {
      //   console.log('Entro aca!!!');
      //   this.JsonArray = this.jsonDataReqInf.Requerimientos.filter( a => {
      //   return a['Área'] === 'Segmento Backoffice';
      //   });
      // }

      // this.route.params.subscribe(params => {
      //   this.paramSeg = 'BO';
      //   // console.log('Obtiene', this.jsonDataReqInf);
      //   // console.log('constructor');
      //   console.log('segmento es: ');
      //   console.log(this.paramSeg);

      //   if (this.paramSeg === 'BO') {
      //     this.JsonArray = this.jsonDataReqInf.Requerimientos.filter( a => {
      //       return a['Área'] === 'Segmento Backoffice';
      //     });
      //   } else if (this.paramSeg === 'BE') {
      //     this.JsonArray = this.jsonDataReqInf.Requerimientos.filter(a => {
      //       return a['Área'] === 'Segmento Backend';
      //     });
      //   } else {
      //     this.JsonArray = this.jsonDataReqInf.Requerimientos.filter(a => {
      //       return a['Área'] === 'Plataforma de Integración';
      //     });
      //   }
      // });
    }
  }

  ngOnInit() {

    this.cargarSlides();

    console.log('El valor en el OnInit es ', this.tipoInforme);

    // if (this.tipoInforme === 'BO') {
    //   console.log('Entro aca!!!');
    //   this.JsonArray = this.jsonDataReqInf.Requerimientos.filter( a => {
    //   return a['Área'] === 'Segmento Backoffice';
    //   });
    // } else if (this.tipoInforme === 'BE') {
    //   this.JsonArray = this.jsonDataReqInf.Requerimientos.filter(a => {
    //     return a['Área'] === 'Segmento Backend';
    //   });
    // } else {
    //        this.tipoInforme = this.jsonDataReqInf.Requerimientos.filter(a => {
    //          return a['Área'] === 'Plataforma de Integración';
    //        });
    // }

  }

  cargarSlides() {
    console.log('Entro a cargarSlides!!!');
    if (this.jsonDataService.jsonDataReqService !== undefined) {
      console.log('No entro ACA!!');
      this.jsonDataReqInf = this.jsonDataService.getJsonDataReqService();

      console.log('El valor es ==========', this.tipoInforme);

      if (this.tipoInforme === 'BO') {
        console.log('Entro aca!!!');
        this.JsonArray = this.jsonDataReqInf.Requerimientos.filter( a => {
          console.log('el valor de A es ', a);
        return a['Área'] === 'Segmento Backoffice';
        });
      } else if (this.tipoInforme === 'BE') {
        this.JsonArray = this.jsonDataReqInf.Requerimientos.filter(a => {
          return a['Área'] === 'Segmento Backend';
        });
      } else if (this.tipoInforme === 'IN') {
             this.JsonArray = this.jsonDataReqInf.Requerimientos.filter(a => {
               return a['Área'] === 'Plataforma de Integración';
             });
      }
    }

    if (this.tipoInforme === 'HI') {
      console.log('Entro en el historico');
      this.jsonService.getJSONData1().subscribe((data: RootObject[]) => {
        this.JsonArray = data;
        // this.solicitudes = data;
        // this.otro.solicitudes = this.solicitudes;
        console.log(data[0]);
        // console.log('val1 ', this.solicitudes.length);
      });
    }

    if (this.tipoInforme === 'LI') {
      console.log('Entro en el historico x linea ');
      this.jsonService.getJSONDataLinea().subscribe((data: RootObject[]) => {
        this.JsonArray = data;
        // this.solicitudes = data;
        // this.otro.solicitudes = this.solicitudes;
        console.log(data[0]);
        // console.log('val1 ', this.solicitudes.length);
      });
    }

  }
}




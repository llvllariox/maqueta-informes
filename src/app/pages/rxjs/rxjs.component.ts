import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonDataService } from 'src/app/services/json-data/json-data.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {



  jsonDataReqInf: any;
    paramSeg = '';
    JsonArray: [] = [];
    icon = '';
    constructor(
      public jsonDataService: JsonDataService,
      private route: ActivatedRoute,
      private sweetAlerService: SweetAlertService) {

        if (this.jsonDataService.jsonDataReqService!== undefined) {
          this.jsonDataReqInf = this.jsonDataService.getJsonDataReqService();
          this.route.params.subscribe(params => {
            this.paramSeg ='BE';
            // console.log('Obtiene', this.jsonDataReqInf);
            // console.log('constructor');
            console.log("segmento es: ");
            console.log(this.paramSeg);
            
            if (this.paramSeg =='BO') {
              this.JsonArray = this.jsonDataReqInf.Requerimientos.filter(a => {
                return a['Área'] === 'Segmento Backoffice';
              });
            } else if (this.paramSeg =='BE') {
              this.JsonArray = this.jsonDataReqInf.Requerimientos.filter(a => {
                return a['Área'] === 'Segmento Backend';
              });
            } else {
              this.JsonArray = this.jsonDataReqInf.Requerimientos.filter(a => {
                return a['Área'] === 'Plataforma de Integración';
              });
            }
          });
        }

  
  }

  ngOnInit() {
  }

 

}

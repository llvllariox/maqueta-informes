import { Component, OnInit } from '@angular/core';

import { JsonServicesService } from 'src/app/services/service.index';
import { Requerimiento, Solicitud } from 'src/app/interfaces/interface1';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styles: []
})
export class SolicitudesComponent implements OnInit {

  otro: Requerimiento = {solicitudes: []};
  solicitudes: Solicitud[] = [];


  constructor(private jsonServicesService: JsonServicesService) {
    jsonServicesService.getJSONData().subscribe((data: Solicitud[]) => {
      this.solicitudes = data;
      this.otro.solicitudes = this.solicitudes;
      console.log(data[0]);
      console.log('val1 ', this.solicitudes.length);
    });

   }

  ngOnInit() {
  }

}

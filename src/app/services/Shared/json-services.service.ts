import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonServicesService {

  constructor(private http: HttpClient) { }

  getJSONData() {
    console.log('Desde el servicio!!!');
    return this.http.get('./assets/json/Solicitudes.json');
  }

  getJSONData1() {
    console.log('Desde el servicio!!!');
    return this.http.get('./assets/json/datos.json');
  }

  getJSONDataLinea() {
    console.log('Desde el servicio!!!');
    return this.http.get('./assets/json/datosLinea.json');
  }

}

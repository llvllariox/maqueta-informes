import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inf-actual',
  templateUrl: './inf-actual.component.html',
  styleUrls: ['./inf-actual.component.css']
})
export class InfActualComponent implements OnInit {


  mostrar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  buscar( ) {
    console.log('en buscar ', this.mostrar);
    this.mostrar = true;
  }

}

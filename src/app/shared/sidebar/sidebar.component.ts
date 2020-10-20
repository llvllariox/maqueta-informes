import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor( public _sidebar: SidebarService ) {

    // console.log('cosntructor ' + this._sidebar.menu.submenu );

   }

  ngOnInit() {
    // console.log('ngOnInit ' + this._sidebar.menu );
  }

}

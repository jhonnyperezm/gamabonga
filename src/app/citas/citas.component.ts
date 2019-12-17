import { Component, OnInit } from '@angular/core';

declare function init_plugins();


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: []
})
export class CitasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}

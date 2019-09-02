import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hospital } from './../../models/hospital.model';
import { Medico } from '../../models/medico.model';
import { Usuario } from './../../models/usuario.model';
import { URL_SERVICIOS } from './../../config/config';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  usuarios: Usuario[] = [];
  medicos: Medico[] = [];
  hospitales: Hospital[] = [];

  constructor(
    public http: HttpClient,
    public activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params => {
      let termino = params['termino'];
      this.buscar(termino);
    });
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    
    let url = URL_SERVICIOS + '/busqueda/todo/' + termino;
    this.http.get(url)
      .subscribe((resp: any) => {
        console.log("respuesta",resp);
        
        this.hospitales = resp.hospitales;
        
        
        this.medicos = resp.medicos;
        this.usuarios = resp.usuarios;
        console.log("sd",this.usuarios);
      });
  }



}

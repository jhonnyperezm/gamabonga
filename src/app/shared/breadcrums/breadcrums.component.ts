import { Router, ActivationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {
  titulo: string;

  constructor(private router: Router, private title: Title, private meta: Meta ) {

    this.getDataRoute().subscribe( data => {
      console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);

      const metaag: MetaDefinition = {
        name: 'descripcion',
        content: this.titulo
      };
      this.meta.updateTag(metaag);


    });
  }

  ngOnInit() {
  }

  getDataRoute() {
  return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd ),
      filter(( evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rjxs',
  templateUrl: './rjxs.component.html',
  styles: []
})
export class RjxsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {


   this.suscripcion = this.regresaObservable()
      .subscribe(
        numero => console.log('subs', numero),
        error => console.error('Error en el obs', error),
        () => console.log('El Observador termino!')
      );

  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalor = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador
        }
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalor);
        //   observer.complete();
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
        return true;
      })
    );


  }

}

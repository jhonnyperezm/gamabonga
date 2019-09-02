import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class SubirArchivoService {

  constructor() { }


  subirArchivo( archivo: File, tipo: string, id: string ) {

    return new Promise( (resolve, reject ) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
console.log("archivo",archivo);
console.log("archivo",archivo.name);


      formData.append( 'imagen', archivo, archivo.name );

      xhr.onreadystatechange = function() {

        if ( xhr.readyState === 4 ) {
          console.log('fghfgfgh', xhr);
          
          if ( xhr.status === 200 ) {
            console.log( 'Imagen subida' );
            resolve( JSON.parse( xhr.response ) );
          } else {
            console.log( 'Fallo la subida' );
            reject( xhr.response );
          }

        }
      };
      console.log("llega",tipo);
      console.log("llega",id);
      
      let url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;

      xhr.open('PUT', url, true );
      xhr.send( formData );

    });




  }

}

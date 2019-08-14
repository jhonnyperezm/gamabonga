import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuario: UsuarioService,
    public router: Router) {

  }

  canActivate() {
    if (this._usuario.estaLogueado()) {
      console.log('paso el gard');
      return true;
    } else
      console.log('Bloqueado por el gard');
      this.router.navigate(['/login']);
    return false;
  }

}

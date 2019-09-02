import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  canActivate() {
    if (this._usuarioService.usuario.role === 'ADMIN_ROLE') {
      return true;
    } else {
      // this.router.navigate(['/login']);
      this._usuarioService.logout();
      console.log('BLOQUEDADO GARDA');
      return false;
    }

  }
}

import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(public _usuarioService: UsuarioService, public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargarUsuario();
    this._modalUploadService.notificacion
    .subscribe( resp => this.cargarUsuario());
    console.log(this.usuarios);

  }
  mostrarModal( id: string ) {
    this._modalUploadService.mostrarModal('usuarios', id);

  }

  cargarUsuario() {

    this.cargando = true;
    this._usuarioService.cargarUsuarios(this.desde).subscribe(
      (data: any) => {
        console.log(data);
        this.totalRegistros = data.total;
        this.usuarios = data.usuarios;
      }
    );
    this.cargando = false;
  }
  cambiarDesde(valor: number) {
    let desde = this.desde + valor;
    console.log(desde);
    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarUsuario();
  }

  buscarUsuario(termino: string) {
    console.log(termino);
    if (termino.length <= 0) {
      this.cargarUsuario();
      return;
    }
    this.cargando = true;

    this._usuarioService.buscarUsuarios(termino)
      .subscribe((usuarios: Usuario[]) => {
        console.log(usuarios);
        this.usuarios = usuarios;

      });
    this.cargando = false;

  }
  borrarUsuario(usuario: Usuario) {
    console.log(usuario);
    if (usuario._id === this._usuarioService.usuario._id) {
      Swal.fire('No se puede borrar a si mismo', 'error');
      return;
    }
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta Seguro que sea eliminar a' + usuario.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result) {
        this._usuarioService.borrarUsuario(usuario._id)
          .subscribe(borrado => {
            console.log(borrado);
            this.cargarUsuario();
          });
      }

    });
  }
  guardarUsuario(usuario: Usuario) {
    this._usuarioService.actualizarUsuario(usuario).subscribe();
  }
}
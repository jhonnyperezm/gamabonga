import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../services/service.index';
import { Hospital } from './../../models/hospital.model';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];
  cargando: boolean;
  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospital();
    this._modalUploadService.notificacion.subscribe(() => this.cargarHospital());
  }

  cargarHospital() {
    this._hospitalService.cargarHospitales()
      .subscribe(hospitales => this.hospitales = hospitales);
  }

  buscarHospital(termino: string) {
    if (termino.length <= 0) {
      this.cargarHospital();
      return;
    }
    this._hospitalService.buscarHospital(termino)
      .subscribe(hospitales => this.hospitales = hospitales);
  }
  guardarHospital(hospital: Hospital) {
    this._hospitalService.actualizarHospital(hospital)
      .subscribe();
  }
  borrarHospital(hospital: Hospital) {
    this._hospitalService.borrarHospital(hospital._id)
      .subscribe(() => this.cargarHospital());
  }

  async crearHospital() {
    const { value: nombreHospital } = await Swal.fire({
      title: 'Crear Hospital',
      input: 'text',
      inputPlaceholder: 'Ingrese el nombre del hospital'
    });

    if (nombreHospital) {
      Swal.fire('Hospital Ingresado: ' + nombreHospital);
    }
    this._hospitalService.crearHospital(nombreHospital)
      .subscribe(() => this.cargarHospital());
  }
  actualizarImagen(hospital: Hospital) {
    console.log("sdd", hospital);

    this._modalUploadService.mostrarModal('hospitales', hospital._id);
  }

}

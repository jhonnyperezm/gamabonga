import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaComponent } from './cita/cita.component';
import { CITAS_ROUTES } from './pages.routes';

@NgModule({
  declarations: [CitaComponent],
  imports: [
    CommonModule,
    CITAS_ROUTES
  ]
})
export class CitasModule { }


import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './cita/cita.component';


const pagesRoutes: Routes = [


    { path: 'citas', component: CitaComponent, data: { titulo: 'Ajustes de Tema' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }


];


export const CITAS_ROUTES = RouterModule.forChild(pagesRoutes);

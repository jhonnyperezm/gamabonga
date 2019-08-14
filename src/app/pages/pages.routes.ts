import { LoginGuardGuard } from './../services/service.index';
import { RjxsComponent } from './rjxs/rjxs.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progreso' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RjxsComponent, data: { titulo: 'Rxjs' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)

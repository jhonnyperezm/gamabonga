import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'progress', component: ProgressComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)

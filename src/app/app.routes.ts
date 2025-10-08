import { Routes } from '@angular/router';
import { PlanViewerComponent } from './components/plan-viewer/plan-viewer';
import { HomeComponent } from './components/home/home';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent, title: 'Inicio' },
      { path: 'plan/:tipo', component: PlanViewerComponent, title: 'Plan de Pruebas' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./page/landing/landing').then((m) => m.Landing),
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./page/home/home').then((m) => m.Home),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

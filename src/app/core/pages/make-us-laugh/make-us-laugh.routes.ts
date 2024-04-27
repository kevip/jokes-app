import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./make-us-laugh.component') },
] as Routes;

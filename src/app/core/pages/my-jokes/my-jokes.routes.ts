import { Routes } from '@angular/router';

export default [
  { path: '', loadComponent: () => import('./my-jokes.component') }
] as Routes;

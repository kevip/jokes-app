import { Routes } from '@angular/router';

export default [
  { path: ':category', loadComponent: () => import('./jokes-category.component') },
] as Routes;

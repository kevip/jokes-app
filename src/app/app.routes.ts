import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./core/pages/home/home.routes'),
  },
  {
    path: 'category', loadChildren: () => import('./core/pages/jokes-category/jokes-category.routes'),
  }
];

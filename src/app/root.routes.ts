import { Routes } from '@angular/router';

export const ROOT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products').then((m) => m.PRODUCTS_ROUTES),
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users').then((m) => m.USERS_ROUTES),
  },
];

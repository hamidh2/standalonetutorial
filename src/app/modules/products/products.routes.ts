import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./list/list.component').then((x) => x.ListComponent),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./add/add.component').then((x) => x.AddComponent),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./edit/edit.component').then((x) => x.EditComponent),
  },
];

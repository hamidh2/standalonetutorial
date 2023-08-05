import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

export const USERS_ROUTES: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
];

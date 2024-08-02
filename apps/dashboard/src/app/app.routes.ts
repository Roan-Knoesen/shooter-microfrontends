import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shooter-card',
    loadChildren: () =>
      import('shooter-card/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'edit-shooter/:id',
    loadChildren: () =>
      import('edit-shooter/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'add-shooter',
    loadChildren: () =>
      import('add-shooter/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'shooter-card',
    pathMatch: 'full',
  },
];

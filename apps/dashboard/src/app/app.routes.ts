import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'shooter-card',
    loadChildren: () =>
      import('shooter-card/Routes').then((m) => m.remoteRoutes), //All of these microfrontends will be lazyloaded, meaning it will be loaded on demand when the route is activate
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
    redirectTo: 'shooter-card', //Because shooter card is set as the default location it will be rendered in the router-outlet, displaying the shooter-card content 
    pathMatch: 'full',
  },
];

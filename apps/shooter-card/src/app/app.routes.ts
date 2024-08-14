import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.routes').then((m) => m.remoteRoutes),
  },
];
//This setup allows the shooter-card microfrontend to be efficiently loaded only when needed, 
//reducing the initial load time and keeping the application modular.
  import { Route } from '@angular/router';
  import { AppComponent } from './app.component';

  export const appRoutes: Route[] = [
    {
      path: 'shooter-card',
      loadChildren: () =>
        import('shooter-card/Routes').then((m) => m.remoteRoutes),
    },
    {
      path: 'delete-shooter',
      loadChildren: () =>
        import('delete-shooter/Routes').then((m) => m.remoteRoutes),
    },
    {
      path: 'edit-shooter',
      loadChildren: () =>
        import('edit-shooter/Routes').then((m) => m.remoteRoutes),
    },
    {
      path: 'add-shooter',
      loadChildren: () =>
        import('add-shooter/Routes').then((m) => m.remoteRoutes),
    },
    {
      path: 'navbar',
      loadChildren: () => import('navbar/Routes').then((m) => m.remoteRoutes),
    },
    {
      path: '',
      component: AppComponent,
    },
  ];

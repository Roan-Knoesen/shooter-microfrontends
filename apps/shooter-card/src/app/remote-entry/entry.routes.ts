import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  {
    path: 'edit-shooter',
    loadChildren: () =>
      import('edit-shooter/Routes').then((m) => m.remoteRoutes),
  },
];

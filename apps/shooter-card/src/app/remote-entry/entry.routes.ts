import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
];
//This code is setting up a routing configuration where the RemoteEntryComponent will be the component 
//displayed when the user visits the base path of the application this configuration is associated with.
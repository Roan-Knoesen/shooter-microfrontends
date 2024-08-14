import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shooter-card',
  exposes: {
    './Routes': 'apps/shooter-card/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
//This configuration allows the shooter-card microfrontend to expose its routing configuration (entry.routes.ts) to other parts of the application 
//or other microfrontends via Module Federation. This is key to enabling independent deployment and integration of microfrontends in a modular architecture.
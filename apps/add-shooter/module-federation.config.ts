import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'add-shooter',
  exposes: {
    './Routes': 'apps/add-shooter/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

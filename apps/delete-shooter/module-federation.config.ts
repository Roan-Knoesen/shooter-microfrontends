import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'delete-shooter',
  exposes: {
    './Routes': 'apps/delete-shooter/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'edit-shooter',
  exposes: {
    './Routes': 'apps/edit-shooter/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

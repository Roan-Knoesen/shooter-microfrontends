import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'navbar',
  exposes: {
    './Routes': 'apps/navbar/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

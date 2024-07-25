import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shooter-card',
  exposes: {
    './Routes': 'apps/shooter-card/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;

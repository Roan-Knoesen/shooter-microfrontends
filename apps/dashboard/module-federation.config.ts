import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  remotes: [
    'navbar',
    'add-shooter',
    'edit-shooter',
    'delete-shooter',
    'shooter-card',
  ],
};

export default config;

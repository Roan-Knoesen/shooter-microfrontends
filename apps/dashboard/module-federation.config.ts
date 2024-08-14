import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  remotes: ['add-shooter', 'edit-shooter', 'shooter-card'], //List the different remotes(Microfrontends)
};

export default config;

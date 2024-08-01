import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  remotes: [
    'add-shooter',
    'edit-shooter',
    //'delete-shooter',  //not moving to a new page
    'shooter-card',
  ],
};

export default config;

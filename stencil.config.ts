import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sunmi-kefu',
  buildEs5: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
    },
  ],
};

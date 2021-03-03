import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sunmi-kefu',
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

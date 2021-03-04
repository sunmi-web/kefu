import { BaseAdaptor } from './BaseAdaptor';

export class LocalhostAdaptor extends BaseAdaptor {
  chatIds = {
    'zh-CN': {
      pc: '32c22cc0-309c-416f-a7e5-f6793a30df87',
      mobile: 'dc641cbc-10cb-438a-9875-56f8bf4694e8',
    },
    'en-US': {
      pc: '7b76d4ae-1af2-4bdc-b092-1fdb3af7f90f',
      mobile: 'cb0eee6c-eaaa-4a43-ac8e-304c0c623d1b',
    },
  };
}

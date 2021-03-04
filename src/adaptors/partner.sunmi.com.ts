import { BaseAdaptor } from './BaseAdaptor';

// Partner中文版：https://im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=56f99d32-b812-4ebb-8cae-2e894ed0a5f8
// Partner海外版：https://im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=9a9e3508-7bb9-42e5-8568-d0866bca7bfd
export class PartnerSunmiComAdaptor extends BaseAdaptor {
  chatIds = {
    'zh-CN': {
      pc: '56f99d32-b812-4ebb-8cae-2e894ed0a5f8',
      mobile: '',
    },
    'en-US': {
      pc: '9a9e3508-7bb9-42e5-8568-d0866bca7bfd',
      mobile: '',
    },
  };
}

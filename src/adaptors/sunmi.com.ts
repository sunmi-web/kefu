import { BaseAdaptor } from './BaseAdaptor';

export class SunmiComAdaptor extends BaseAdaptor {
  // 商米官网：https://im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=32c22cc0-309c-416f-a7e5-f6793a30df87
  // 商米海外官网：https://im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=7b76d4ae-1af2-4bdc-b092-1fdb3af7f90f
  // 商米手机官网-中文：https://im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=dc641cbc-10cb-438a-9875-56f8bf4694e8
  // 商米手机官网-海外：https://im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=cb0eee6c-eaaa-4a43-ac8e-304c0c623d1b

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

  static isMiniprogram = () => {
    if (window.localStorage.getItem('is-miniprogram') || window.location.search === '?U2FsdGVkX1') {
      window.localStorage.setItem('is-miniprogram', 'true');
      return true;
    } else {
      return false;
    }
  };
}

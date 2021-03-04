const Languages = {
  'zh-CN': '简体中文',
  'zh-TW': '繁体中文',
  'en-US': 'English',
  'ru': 'Русский',
  'ja': '日本語',
  'es': 'Español',
};

const OldLanguagesMap = {
  zh: 'zh-CN',
  tw: 'zh-TW',
  en: 'en-US',
  jp: 'ja',
  ru: 'ru',
  es: 'es',
};

type LanguageKeys = keyof typeof Languages;
type OldLanguageKeys = keyof typeof OldLanguagesMap;

const OldLanguageKeys = Object.keys(OldLanguagesMap);
const SupportedLanguages = Object.keys(Languages);

export class BaseAdaptor {
  static getPageLang = () => {
    const pathname = location.pathname;
    const pathLang = pathname.split('/')[1];
    const pageLang = OldLanguageKeys.includes(pathLang) ? pathLang : '';
    if (pageLang) {
      return OldLanguagesMap[pageLang as OldLanguageKeys];
    }
  };

  static getStorageLang = () => {
    const oldStorageLang = <OldLanguageKeys>window.localStorage.getItem('userLanguage');
    return OldLanguagesMap[oldStorageLang] ?? window.localStorage.getItem('lang');
  };

  static getNavigatorLang = () => {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorLanguage/language
    // const [langPrefix, langCountry] = navigator.language.split('-')
    // return [langPrefix, langCountry.toUpperCase()].join('-')
    return navigator.language;
  };

  static initLanguage = async () => {
    const pageLang = BaseAdaptor.getPageLang();
    const storageLang = BaseAdaptor.getStorageLang();
    const navigatorLang = BaseAdaptor.getNavigatorLang();
    const currentLang = (pageLang || storageLang || navigatorLang) as LanguageKeys;
    return currentLang;
  };

  static getDefaultLangSync = () => {
    const pageLang = BaseAdaptor.getPageLang();
    const navigatorLang = BaseAdaptor.getNavigatorLang();
    const defaultLang = pageLang || navigatorLang;
    // https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorLanguage/language
    const supportedLang = SupportedLanguages.find(l => l.toLowerCase() === defaultLang.toLowerCase());
    return (supportedLang ?? 'zh-CN') as LanguageKeys;
  };

  static chatIdToScriptURL = (chatId: string) => `https://im.7x24cc.com/phone_webChat.html?accountId=N000000027155&chatId=${chatId}`;

  chatIds = {
    'zh-CN': { pc: '', mobile: '' },
    'en-US': { pc: '', mobile: '' },
  };

  buttonTextLocales = { 'zh-CN': '免费咨询', 'zh-TW': '免費諮詢', 'en-US': 'Contact' };

  get scripts() {
    const lang = BaseAdaptor.getDefaultLangSync();
    const { pc, mobile } = this.chatIds[lang] ?? this.chatIds['en-US'];
    return {
      pc: BaseAdaptor.chatIdToScriptURL(pc),
      mobile: BaseAdaptor.chatIdToScriptURL(mobile),
    };
  }

  get buttonText() {
    const lang = BaseAdaptor.getDefaultLangSync();
    return this.buttonTextLocales[lang];
  }
}

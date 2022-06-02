import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Platform, NativeModules} from 'react-native';

import tranEn from './languages/en.json';
import tranKo from './languages/ko.json';

const resources = {
  en: {translation: tranEn},
  ko: {translation: tranKo},
};

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

console.log(Platform.OS);
console.log(deviceLanguage);

const userLanguage = 'en';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  //   lng: localStorage.getItem('language') || userLanguage || 'en',
  lng: userLanguage,
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

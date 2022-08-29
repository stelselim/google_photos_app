import RNLocalize from 'react-native-localize';
import {I18n} from 'i18n-js';
import {
  defaultLocale,
  translationGetters,
} from '../constant/translation_constants';

const locales = RNLocalize.getLocales();
const i18n = new I18n({
  en: translationGetters.en(),
  tr: translationGetters.tr(),
});

i18n.defaultLocale = defaultLocale;
i18n.locale = locales[0].languageCode;

export default i18n;

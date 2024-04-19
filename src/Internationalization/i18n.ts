import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { translate } from "./translation";

export const appLanguages = ["en", "fr", "ja"] as const;
export type AppLanguage = (typeof appLanguages)[number];

// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  //
  // i18next configuration is surprisingly fucked, I mean delicate
  // See this github issue: https://github.com/i18next/react-i18next/issues/475
  .init({
    supportedLngs: [...appLanguages],
    fallbackLng: "en",

    // Only use language part of language lookup codes
    // For instance, for "fr-FR" or "fr-BE", only use "fr"
    load: "languageOnly",

    debug: false,
    resources: translate,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

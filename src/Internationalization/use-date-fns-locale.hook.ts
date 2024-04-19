import { Locale, enUS, fr, ja } from "date-fns/locale";
import { AppLanguage } from "./i18n";
import { useCurrentLanguage } from "./use-current-language.hook";

export function useDateFnsLocale(): Locale {
  const lang = useCurrentLanguage();
  return dateFnLocales[lang];
}

const dateFnLocales: { [language in AppLanguage]: Locale } = {
  fr,
  en: enUS,
  ja,
};

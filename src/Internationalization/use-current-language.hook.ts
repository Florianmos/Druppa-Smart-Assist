import { appLanguages } from "@mgi-labs/mgi-id/dist/Components/Internationalization/i18n";
import { useTranslation } from "react-i18next";
import { AppLanguage } from "./i18n";
//import { AppLanguage, appLanguages } from "./i18n";

// Why do we need a custom hook?
// Because the i18next can't get their shit together, that's why.
// The situation is the following:
// - `i18n.languages` is the languages supported in this app, with the first element being the current language;
// - `i18n.language` is the *detected* language, NOT the current language.
// i18next sucks.
export function useCurrentLanguage(): AppLanguage {
  const { i18n } = useTranslation();
  // Return first language that is supported by our app
  const lang = i18n.languages.find(
    (lang) => appLanguages.indexOf(lang as AppLanguage) !== -1
  );
  if (!lang) {
    throw new Error("Could not find valid language in languages array of i18n");
  }
  return lang as AppLanguage;
}

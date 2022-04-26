import i18n from "i18next";
import uz from "./uz/uz.json";
import ru from "./ru/ru.json";
import en from "./en/en.json";
import { getLanguage, langCode } from "./config";
import { initReactI18next } from "react-i18next";

const languageDetector = {
    async: true,
    type: "languageDetector",
    detect: (callback) => {
        return getLanguage()
            .then((r) => callback(r))
            .catch(() => callback(langCode.ru));
    },
    init: () => { },
    cacheUserLanguage: () => { },
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        compatibilityJSON: "v3",
        fallbackLng: langCode.ru,
        react: { useSuspense: false },
        interpolation: { escapeValue: false },
        resources: {
            uz: { translation: uz },
            ru: { translation: ru },
            en: { translation: en },
        }
    })
export default i18n;
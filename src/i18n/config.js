import { langTypes } from "constants/langTypes";

export const langCode = { uz: "uz", ru: "ru", en: "en" };
export const getLanguage = async (langState) => {
    let lang;
    if (langState) {
        lang = langState;
    } else {
        lang = await localStorage.getItem('lang');
    }
    let result = langCode.uz;
    switch (lang) {
        case langTypes.uz: {
            result = langCode.uz;
            break;
        }
        case langTypes.ru: {
            result = langCode.ru;
            break;
        }
        case langTypes.en: {
            result = langCode.en;
            break;
        }
    }
    return result;
};


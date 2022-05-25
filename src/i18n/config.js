import { langTypes } from "constants/langTypes";
import { RusFlagIcon, UzFlagIcon, EnFlagIcon } from 'components/Buttons/style';
export const langCode = { uz: "uz", ru: "ru", en: "en" };
export const langList = [
    { value: 'uz', label: "O'zbek", flag: < UzFlagIcon / > },
    { value: 'ru', label: 'Русский', flag: < RusFlagIcon / > },
    { value: 'en', label: 'English', flag: < EnFlagIcon / > }
]
export const getLanguage = async(langState) => {
    let lang;
    if (langState) {
        lang = langState;
    } else {
        lang = localStorage.getItem('lang');
    }
    let result = langCode.uz;
    switch (lang) {
        case langTypes.uz:
            {
                result = langCode.uz;
                break;
            }
        case langTypes.ru:
            {
                result = langCode.ru;
                break;
            }
        case langTypes.en:
            {
                result = langCode.en;
                break;
            }
    }
    return result;
};
import Dropdown from 'components/Dropdown'
import { useCallback, useState } from 'react'
import { useTranslation } from "react-i18next";
import {
    Container, LeftSection, RightSection, Number, Drop, Logo, TerminalWrap,
    Wrap, Terminal
} from './style'
export const Header = () => {
    const { t, i18n } = useTranslation();
    const currentLang = localStorage.getItem('lang')
    const [lang, setLang] = useState(currentLang)
    const changeLang = useCallback((e) => {
        localStorage.setItem('lang', e)
        i18n.changeLanguage(e);
        setLang(e)
    }, [lang])
    const langList = [
        { value: 'uz', label: "O'zbek" },
        { value: 'ru', label: 'Русский' },
        { value: 'en', label: 'English' }
    ]
    return (
        <Container>
            <LeftSection>
                <TerminalWrap>
                    <Terminal>{t('terminal')}</Terminal>
                    <Number>№12345678</Number>
                </TerminalWrap>
                <Drop />
                <Wrap>
                    <Terminal>{t('support_service')}</Terminal>
                    <Number>+998 888 62 62</Number>
                </Wrap>
            </LeftSection>
            <Logo />
            <RightSection>
                <Dropdown
                    prefixText="" menu={langList} position="right"
                    defaultValue={lang} changeValue={changeLang} />
            </RightSection>
        </Container>
    )
}

import React from 'react'
import Search from '../Buttons/Search'
import UzbekFlag from '../Buttons/UzFlag'
import RussianFlag from '../Buttons/RuFlag'
import BritainFlag from '../Buttons/BrFlag'
import { useTranslation } from "react-i18next";
import {
    Container, LeftSection, RightSection, Number, Drop, Logo, TerminalWrap,
    Wrap, Terminal, IconWrap
} from './style'
export const Header = () => {
    const { t, i18n } = useTranslation();
    const changeLang = (e) => {
        localStorage.setItem('lang', e)
        i18n.changeLanguage(e);
    }
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
                <IconWrap>
                    <Search title={t('search')} />
                    <RussianFlag onClick={() => changeLang('ru')} title="Рус" />
                    <BritainFlag onClick={() => changeLang('en')} title="Англ" />
                    <UzbekFlag onClick={() => changeLang('uz')} title="O'zbek" />
                </IconWrap>
            </RightSection>
        </Container>
    )
}

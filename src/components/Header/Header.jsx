import React from 'react'
import Search from '../Buttons/Search'
import PhoneBtn from '../Buttons/Phone'
import UzbekFlag from '../Buttons/UzFlag'
import RussianFlag from '../Buttons/RuFlag'
import BritainFlag from '../Buttons/BrFlag'
import QuestionBtn from '../Buttons/Question'
import { useTranslation } from "react-i18next";
import { Container, LeftSection, RightSection, Payload, Wrap, IconWrap, Paragraph, SupportText, PhoneText } from './style'
export const Header = () => {
    const { t, i18n } = useTranslation();
    const changeLang = (e) => {
        localStorage.setItem('lang', e)
        i18n.changeLanguage(e);
    }
    return (
        <Container>
            <LeftSection>
                <Wrap>
                    <Paragraph>{t('terminal')}</Paragraph>
                    <Paragraph>№ 12345678</Paragraph>
                </Wrap>
                <IconWrap>
                    <QuestionBtn />
                    <PhoneBtn />
                </IconWrap>
                <Wrap>
                    <SupportText>{t('support_service')}</SupportText>
                    <PhoneText>988 88 62 62</PhoneText>
                </Wrap>
            </LeftSection>
            <Payload>PayLoad</Payload>
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

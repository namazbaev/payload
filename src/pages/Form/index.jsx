import { useState } from 'react'
import { useTranslation } from "react-i18next";
import Beeline from '../../components/Buttons/Beeline'
import {
    Container, Content, Aside, Main, TopSection, BottomSection, TextWrap, Text,
    Input, NumberList, Number, Footer, Button
} from './style'
const Form = () => {
    const [value, setValue] = useState('')
    const clickNum = (e) => setValue(value + String(e))
    const { t } = useTranslation();

    return (
        <Container>
            <Content>
                <Aside>
                    <TopSection>
                        {/* <Beeline hovered={false} /> */}
                    </TopSection>
                    <BottomSection>
                        <TextWrap>
                            <Text uppercase>{t('operator_name')}</Text>
                            <Text size="20px" spacing="1px" color='#fff'>Beeline</Text>
                        </TextWrap>
                        <TextWrap>
                            <Text uppercase>{t('enter_phone_number')}</Text>
                            <Text size="20px" spacing="1px" color='#fff'>10 {t('numbers')}</Text>
                        </TextWrap>
                        <TextWrap>
                            <Text uppercase>{t('comission')}</Text>
                            <Text size="20px" spacing="1px" color='#fff'>2 %</Text>
                        </TextWrap>
                        <TextWrap>
                            <Text uppercase>{t('maximum_payment')}</Text>
                            <Text size="20px" spacing="1px" color='#fff'>50 000 {t('rubl')}.</Text>
                        </TextWrap>
                    </BottomSection>
                </Aside>
                <Main>
                    <Input value={value} />
                    <NumberList>
                        <Number onClick={() => clickNum(1)}>1</Number>
                        <Number onClick={() => clickNum(2)}>2</Number>
                        <Number onClick={() => clickNum(3)}>3</Number>
                        <Number onClick={() => clickNum(4)}>4</Number>
                        <Number onClick={() => clickNum(1)}>5</Number>
                        <Number onClick={() => clickNum(1)}>6</Number>
                        <Number onClick={() => clickNum(1)}>7</Number>
                        <Number onClick={() => clickNum(1)}>8</Number>
                        <Number onClick={() => clickNum(1)}>9</Number>
                        <Number onClick={() => clickNum(1)}>C</Number>
                        <Number onClick={() => clickNum(1)}>0</Number>
                        <Number onClick={() => clickNum(1)}>x</Number>
                    </NumberList>
                    <Footer>
                        <Button isBack>назад</Button>
                        <Button>продолжить</Button>
                    </Footer>
                </Main>
            </Content>
        </Container>
    )
}
export default Form
import { benefits } from 'utils/json';
import Select from "components/Select";
import { Footer } from '../calculator/style';
import { Inputs } from 'styles/globalStyles';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import PNFL from 'assets/images/other/jshshir.jpg';
import { Placeholder } from 'components/Select/style';
import {
    Container, Header, Content, Title, Form, Info,
    FlexBox, CheckButton, Image, Flex
} from "./style";
import LinkButton from '../../../components/Buttons/LinkButton';


export default () => {
    const { t } = useTranslation();
    const [pinfl, setPinfl] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [benefit, setBenefit] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [issuedBy, setIssuedBy] = useState('')
    const [dateOfIssue, setDateOfIssue] = useState('')
    const [selectedType, setSelectedType] = useState('');
    const [passporSeria, setPassportSeria] = useState('');
    const [passporNumber, setPassportNumber] = useState('');
    const [additionalPhone, setAdditionalPhone] = useState('');
    const changeActive = type => setSelectedType(type);
    const onSelectBenf = useCallback((val) => setBenefit(val), [benefit]);
    return (
        <Container>
            <Header>
                <Title margin="0 0 24px 0" uppercase>информация о заявителя</Title>
            </Header>
            <Content>
                <Flex>
                <Form>
                    <FlexBox>
                            <Inputs basis="15%" marginRight="12px"
                                active={selectedType === 'passporSeria'}
                                onClick={() => changeActive('passporSeria')}>
                                {passporSeria === '' ? <Placeholder>Серия</Placeholder> : passporSeria}
                            </Inputs>
                            <Inputs basis="35%" marginRight="12px"
                                active={selectedType === 'passporNumber'}
                                onClick={() => changeActive('passporNumber')}>
                                {passporNumber === '' ? <Placeholder>Номер паспорта</Placeholder> : passporNumber}
                            </Inputs>
                            <Inputs basis="45%" marginRight="12px"
                                active={selectedType === 'pinfl'}
                                onClick={() => changeActive('pinfl')}>
                                {pinfl === '' ? <Placeholder>ПИНФЛ</Placeholder> : pinfl}
                            </Inputs>
                        <CheckButton>Проверить</CheckButton>
                    </FlexBox>
                    <FlexBox>
                        <Inputs basis="40%" marginRight="12px"
                                active={selectedType === 'dateOfIssue'}
                                onClick={() => changeActive('dateOfIssue')}>
                            {dateOfIssue === '' ? <Placeholder>Дата выдачи</Placeholder> : dateOfIssue}
                        </Inputs>
                        <Inputs active={selectedType === 'issuedBy'}
                                onClick={() => changeActive('issuedBy')}>
                            {issuedBy === '' ? <Placeholder>Кем выдан</Placeholder> : issuedBy}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs basis="33.3%" marginRight="12px"
                                active={selectedType === 'lastName'}
                                onClick={() => changeActive('lastName')}>
                            {lastName === '' ? <Placeholder>Фамилия</Placeholder> : lastName}
                        </Inputs>
                        <Inputs basis="33.3%" marginRight="12px"
                                active={selectedType === 'firstName'}
                                onClick={() => changeActive('firstName')}>
                            {firstName === '' ? <Placeholder>Имя</Placeholder> : firstName}
                        </Inputs>
                        <Inputs basis="33.3%"
                                active={selectedType === 'middleName'}
                                onClick={() => changeActive('middleName')}>
                            {middleName === '' ? <Placeholder>Отчество</Placeholder> : middleName}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs active={selectedType === 'address'}
                                onClick={() => changeActive('address')}>
                            {address === '' ? <Placeholder>Адрес</Placeholder> : address}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs marginRight="12px"
                                active={selectedType === 'phone'}
                                onClick={() => changeActive('phone')}>
                            {phone === '' ? <Placeholder>Телефон</Placeholder> : phone}
                        </Inputs>
                        <Inputs active={selectedType === 'additionalPhone'}
                                onClick={() => changeActive('additionalPhone')}>
                            {additionalPhone === '' ? <Placeholder>Дополнителный телефон</Placeholder> : additionalPhone}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs active={selectedType === 'email'}
                                onClick={() => changeActive('email')}>
                            {email === '' ? <Placeholder>Эл.почта</Placeholder> : email}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Select
                            menu={benefits}
                            defaultValue={benefit}
                            changeValue={onSelectBenf}
                            active={selectedType === 'benefit'}
                            onClick={() => changeActive('benefit')}
                        />
                    </FlexBox>
                </Form>
                <Info>
                    <Title size={20} uppercase align="center" margin="72px 0 0">
                        пинфл - персоналный идентификатор номер физического лица
                    </Title>
                    <Title margin="12px 0 12px 0" size={20} align="center">
                        Номер ПИНФЛ находится в вашем паспорте
                    </Title>
                    <Image src={PNFL} alt="pnfl image" />
                    </Info>
                </Flex>
                <Footer align="start">
                    <LinkButton margin="0 100px 0 0" path={-1} text={t('back')} />
                    <LinkButton path='/' text={t('main_page')} />
                </Footer>
            </Content>
        </Container>
    )
}
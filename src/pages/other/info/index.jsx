import { benefits } from 'utils/json';
import Select from "components/Select";
import { Footer } from '../calculator/style';
import { Inputs } from 'styles/globalStyles';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { http } from '../../../helper/useAxios';
import PNFL from 'assets/images/other/jshshir.jpg';
import { Placeholder } from 'components/Select/style';
import LinkButton from '../../../components/Buttons/LinkButton';
import {
    Container, Header, Content, Title, Form, Info,
    FlexBox, CheckButton, Image, Flex } from "./style";


export default () => {
    const { t } = useTranslation();
    const [benefit, setBenefit] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [obj, setObj] = useState({
        pinfl: '',
        email: '',
        phone: '',
        address: '',
        benefit: '',
        firstName: '',
        lastName: '',
        middleName: '',
        issuedBy: '',
        dateOfIssue: '',
        passporSeria: '',
        passporNumber: '',
        additionalPhone: ''
    })
    const getAllData = async () => {
        try {
            const response = await http.get('api/getAllData')
              .then((res) => {
                  setObj(res.data)
                  console.log(res.data)
              })
        } catch (e) {
            console.log(e);
            throw new Error("error.unknown");
        }
    }
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
                                {obj.passporSeria === '' ? <Placeholder>Серия</Placeholder> : obj.passporSeria}
                            </Inputs>
                            <Inputs basis="35%" marginRight="12px"
                                active={selectedType === 'passporNumber'}
                                onClick={() => changeActive('passporNumber')}>
                                {obj.passporNumber === '' ? <Placeholder>Номер паспорта</Placeholder> : obj.passporNumber}
                            </Inputs>
                            <Inputs basis="45%" marginRight="12px"
                                active={selectedType === 'pinfl'}
                                onClick={() => changeActive('pinfl')}>
                                {obj.pinfl === '' ? <Placeholder>ПИНФЛ</Placeholder> : obj.pinfl}
                            </Inputs>
                        <CheckButton>Проверить</CheckButton>
                    </FlexBox>
                    <FlexBox>
                        <Inputs basis="40%" marginRight="12px"
                                active={selectedType === 'dateOfIssue'}
                                onClick={() => changeActive('dateOfIssue')}>
                            {obj.dateOfIssue === '' ? <Placeholder>Дата выдачи</Placeholder> : obj.dateOfIssue}
                        </Inputs>
                        <Inputs active={selectedType === 'issuedBy'}
                                onClick={() => changeActive('issuedBy')}>
                            {obj.issuedBy === '' ? <Placeholder>Кем выдан</Placeholder> : obj.issuedBy}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs basis="33.3%" marginRight="12px"
                                active={selectedType === 'lastName'}
                                onClick={() => changeActive('lastName')}>
                            {obj.lastName === '' ? <Placeholder>Фамилия</Placeholder> : obj.lastName}
                        </Inputs>
                        <Inputs basis="33.3%" marginRight="12px"
                                active={selectedType === 'firstName'}
                                onClick={() => changeActive('firstName')}>
                            {obj.firstName === '' ? <Placeholder>Имя</Placeholder> : obj.firstName}
                        </Inputs>
                        <Inputs basis="33.3%"
                                active={selectedType === 'middleName'}
                                onClick={() => changeActive('middleName')}>
                            {obj.middleName === '' ? <Placeholder>Отчество</Placeholder> : obj.middleName}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs active={selectedType === 'address'}
                                onClick={() => changeActive('address')}>
                            {obj.address === '' ? <Placeholder>Адрес</Placeholder> : obj.address}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs marginRight="12px"
                                active={selectedType === 'phone'}
                                onClick={() => changeActive('phone')}>
                            {obj.phone === '' ? <Placeholder>Телефон</Placeholder> : obj.phone}
                        </Inputs>
                        <Inputs active={selectedType === 'additionalPhone'}
                                onClick={() => changeActive('additionalPhone')}>
                            {obj.additionalPhone === '' ? <Placeholder>Дополнителный телефон</Placeholder> : obj.additionalPhone}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs active={selectedType === 'email'}
                                onClick={() => changeActive('email')}>
                            {obj.email === '' ? <Placeholder>Эл.почта</Placeholder> : obj.email}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Select menu={benefits}
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
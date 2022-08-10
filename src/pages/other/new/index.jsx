import { regions } from 'utils/json';
import Select from "components/Select";
import { Form, Text, Wrap } from './style';
import { Inputs } from 'styles/globalStyles';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { http } from '../../../helper/useAxios';
import { Footer, Button } from '../calculator/style';
import { Placeholder } from '../../../components/Select/style';
import LinkButton from '../../../components/Buttons/LinkButton';
import { Header, Content, Container, Title, CheckButton, FlexBox } from "../info/style";
export default () => {
    const { t } = useTranslation();
    const [region, setRegion] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const changeActive = type => setSelectedType(type);
    const [obj, setObj] = useState({
        pinfl: '',
        birthday: '',
        lastName: '',
        issuedBy: '',
        firstName: '',
        middleName: '',
        dateOfIssue: '',
        licenseSerie: '',
        passporSeria: '',
        licenseNumber: '',
        passporNumber: '',
        licenseDateIssue: ''
    })
    const onSelectRegion = useCallback((val) => setRegion(val), [region]);

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
    return (
        <Container>
            <Header>
                <Title align="center" margin="0 0 24px 0" uppercase>добавить нового родственника</Title>
            </Header>
            <Content>
                <Form>
                    <FlexBox align="between">
                        <Wrap width="50%">
                            <Text>копировать данные из:</Text>
                        </Wrap>
                        <Wrap>
                            <Button margin="0 16px 0">Заявителя</Button>
                            <Button>Владельца</Button>
                        </Wrap>
                    </FlexBox>
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
                        <CheckButton>Получить</CheckButton>
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
                    <FlexBox align="center">
                        <Inputs active={selectedType === 'birthday'}
                                onClick={() => changeActive('birthday')}
                                basis="33.3%">
                            {obj.birthday === '' ? <Placeholder>Дата рождения</Placeholder> : obj.birthday}
                        </Inputs>
                    </FlexBox>
                    <Text margin="12px 0">информация о водительском удостоверении</Text>
                    <FlexBox align="center">
                        <Inputs active={selectedType === 'pinfl'}
                                onClick={() => changeActive('pinfl')} basis="70%">
                            {obj.pinfl === '' ? <Placeholder>ПИНФЛ</Placeholder> : obj.pinfl}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs basis="33.3%" marginRight="12px"
                                active={selectedType === 'licenseSerie'}
                                onClick={() => changeActive('licenseSerie')}>
                            {obj.licenseSerie === '' ? <Placeholder>Серия водитель удоств.</Placeholder> : obj.licenseSerie}
                        </Inputs>
                        <Inputs basis="33.3%" marginRight="12px"
                                active={selectedType === 'licenseNumber'}
                                onClick={() => changeActive('licenseNumber')}>
                            {obj.licenseNumber === '' ? <Placeholder>Номер водитель удоств.</Placeholder> : obj.licenseNumber}
                        </Inputs>
                        <Inputs basis="33.3%"
                                active={selectedType === 'licenseDateIssue'}
                                onClick={() => changeActive('licenseDateIssue')}>
                            {obj.licenseDateIssue === '' ? <Placeholder>Дата выдачи вод.удоств.</Placeholder> : obj.licenseDateIssue}
                        </Inputs>
                    </FlexBox>
                    <FlexBox align="center">
                        <Wrap width="70%">
                            <Select
                                menu={regions}
                                defaultValue={region}
                                changeValue={onSelectRegion}
                                active={selectedType === 'region'}
                                onClick={() => changeActive('region')} />
                        </Wrap>
                    </FlexBox>
                    <FlexBox align="center">
                        <Wrap width="70%">
                            <Select menu={regions}
                                defaultValue={region}
                                changeValue={onSelectRegion}
                                active={selectedType === 'region'}
                                onClick={() => changeActive('region')} />
                        </Wrap>
                    </FlexBox>
                    <Footer marginTop="36px" align="around">
                        <LinkButton margin="0 100px 0 0" path={-1} text={t('back')} />
                        <LinkButton path='/' text={t('add')} />
                    </Footer>
                </Form>
            </Content>
        </Container>
    )
}
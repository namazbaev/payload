import { regions } from 'utils/json';
import Select from "components/Select";
import { Form, Text, Wrap } from './style';
import { useState, useCallback } from 'react';
import { Inputs } from 'styles/globalStyles';
import { useNavigate } from 'react-router-dom';
import { Footer, Button } from '../calculator/style';
import { Header, Content, Container, Title, CheckButton, FlexBox } from "../info/style";
import { Placeholder } from '../../../components/Select/style';
export default () => {
    const navigate = useNavigate();
    const [pinfl, setPinfl] = useState('');
    const [licenseDateIssue, setLicenseDateIssue] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licenseSerie, setLicenseSerie] = useState('');
    const [birthday, setBirthday] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [issuedBy, setIssuedBy] = useState('')
    const [dateOfIssue, setDateOfIssue] = useState('')
    const [passporSeria, setPassportSeria] = useState('');
    const [passporNumber, setPassportNumber] = useState('');
    const [region, setRegion] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const changeActive = type => setSelectedType(type);
    const onSelectRegion = useCallback((val) => setRegion(val), [region]);
    return (
        <Container>
            <Header>
                <Title uppercase>добавить нового родственника</Title>
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
                        <CheckButton>Получить</CheckButton>
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
                    <FlexBox align="center">
                        <Inputs active={selectedType === 'birthday'}
                                onClick={() => changeActive('birthday')}
                                basis="33.3%">
                            {birthday === '' ? <Placeholder>Дата рождения</Placeholder> : birthday}
                        </Inputs>
                    </FlexBox>
                    <Text margin="12px 0">информация о водительском удостоверении</Text>
                    <FlexBox align="center">
                        <Inputs active={selectedType === 'pinfl'}
                                onClick={() => changeActive('pinfl')} basis="70%">
                            {pinfl === '' ? <Placeholder>ПИНФЛ</Placeholder> : pinfl}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs basis="33.3%" marginRight="12px"
                                active={selectedType === 'licenseSerie'}
                                onClick={() => changeActive('licenseSerie')}>
                            {licenseSerie === '' ? <Placeholder>Серия водитель удоств.</Placeholder> : licenseSerie}
                        </Inputs>
                        <Inputs basis="33.3%" marginRight="12px"
                                active={selectedType === 'licenseNumber'}
                                onClick={() => changeActive('licenseNumber')}>
                            {licenseNumber === '' ? <Placeholder>Номер водитель удоств.</Placeholder> : licenseNumber}
                        </Inputs>
                        <Inputs basis="33.3%"
                                active={selectedType === 'licenseDateIssue'}
                                onClick={() => changeActive('licenseDateIssue')}>
                            {licenseDateIssue === '' ? <Placeholder>Дата выдачи вод.удоств.</Placeholder> : licenseDateIssue}
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
                            <Select
                                menu={regions}
                                defaultValue={region}
                                changeValue={onSelectRegion}
                                active={selectedType === 'region'}
                                onClick={() => changeActive('region')} />
                        </Wrap>
                    </FlexBox>
                    <Footer marginTop="0" align="around">
                        <Button onClick={() => navigate(-1)} margin="0 0 0 48px">Назад</Button>
                        <Button>Добавить</Button>
                    </Footer>
                </Form>
            </Content>
        </Container>
    )
}
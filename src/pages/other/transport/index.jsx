import { Form, Text } from './style';
import Select from "components/Select";
import { Footer } from '../calculator/style';
import { Inputs } from 'styles/globalStyles';
import { useState, useCallback } from 'react';
import { carType, regions } from 'utils/json';
import { useTranslation } from 'react-i18next';
import { Placeholder } from '../../../components/Select/style';
import LinkButton from '../../../components/Buttons/LinkButton';
import { Header, Content, Container, Title, CheckButton, FlexBox } from "../info/style";
export default () => {
    const { t } = useTranslation();
    const [car, setCar] = useState('');
    const [pinfl, setPinfl] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [bodyNumber, setBodyNumber] = useState('');
    const [motorNumber, setMotorNumber] = useState('');
    const [chassisNumber, setChassisNumber] = useState('');
    const [yearOfRelease, setYearOfRelease] = useState('');
    const [markModel, setMarkModel] = useState('');
    const [capacityEngine, setCapacityEngine] = useState('');
    const [stateNumber, setStateNumber] = useState('');
    const [serieTechnical, setSerieTechnical] = useState('');
    const [numberTechnical, setNumberTechnical] = useState('');
    const [region, setRegion] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const changeActive = type => setSelectedType(type);
    const onSelectCar = useCallback((val) => setCar(val), [car]);
    const onSelectRegion = useCallback((val) => setRegion(val), [region]);
    return (
        <Container>
            <Header>
                <Title uppercase>транспортноe средство</Title>
            </Header>
            <Content>
                <Form>
                    <Text>укажите данные о транспортном средстве</Text>
                    <FlexBox marginTop="16px">
                        <Inputs marginRight="12px"
                                active={selectedType === 'stateNumber'}
                                onClick={() => changeActive('stateNumber')}>
                            {stateNumber === '' ? <Placeholder>Гос.Номер</Placeholder> : stateNumber}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'serieTechnical'}
                                onClick={() => changeActive('serieTechnical')}>
                            {serieTechnical === '' ? <Placeholder>Серия и тех.паспорта</Placeholder> : serieTechnical}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'numberTechnical'}
                                onClick={() => changeActive('numberTechnical')}>
                            {numberTechnical === '' ? <Placeholder>Номер и тех.паспорта</Placeholder> : numberTechnical}
                        </Inputs>
                        <CheckButton>Проверить</CheckButton>
                    </FlexBox>
                    <FlexBox>
                        <Inputs marginRight="12px"
                                active={selectedType === 'markModel'}
                                onClick={() => changeActive('markModel')}>
                            {markModel === '' ? <Placeholder>Марка/Модель</Placeholder> : markModel}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'capacityEngine'}
                                onClick={() => changeActive('capacityEngine')}>
                            {capacityEngine === '' ? <Placeholder>Объем двигателя</Placeholder> : capacityEngine}
                        </Inputs>
                        <Inputs active={selectedType === 'yearOfRelease'}
                                onClick={() => changeActive('yearOfRelease')}>
                            {yearOfRelease === '' ? <Placeholder>Год выпуска</Placeholder> : yearOfRelease}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs marginRight="12px"
                                active={selectedType === 'bodyNumber'}
                                onClick={() => changeActive('bodyNumber')}>
                            {bodyNumber === '' ? <Placeholder>Номер кузова</Placeholder> : bodyNumber}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'chassisNumber'}
                                onClick={() => changeActive('chassisNumber')}>
                            {chassisNumber === '' ? <Placeholder>Номер шасси</Placeholder> : chassisNumber}
                        </Inputs>
                        <Inputs
                                active={selectedType === 'motorNumber'}
                                onClick={() => changeActive('motorNumber')}>
                            {motorNumber === '' ? <Placeholder>Номер двигателя</Placeholder> : motorNumber}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Select
                            menu={carType}
                            defaultValue={car}
                            changeValue={onSelectCar}
                            active={selectedType === 'car'}
                            onClick={() => changeActive('car')}
                        />
                    </FlexBox>
                    <FlexBox>
                        <Select
                            menu={regions}
                            defaultValue={region}
                            changeValue={onSelectRegion}
                            active={selectedType === 'region'}
                            onClick={() => changeActive('region')} />
                    </FlexBox>
                    <Text margin="24px 0">информация о владельца тс</Text>
                    <FlexBox align="center">
                        <Inputs basis="70%" active={selectedType === 'pinfl'}
                                onClick={() => changeActive('pinfl')}>
                            {pinfl === '' ? <Placeholder>ПИНФЛ</Placeholder> : pinfl}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs marginRight="12px"
                                active={selectedType === 'lastName'}
                                onClick={() => changeActive('lastName')}>
                            {lastName === '' ? <Placeholder>Фамилия</Placeholder> : lastName}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'firstName'}
                                onClick={() => changeActive('firstName')}>
                            {firstName === '' ? <Placeholder>Имя</Placeholder> : firstName}
                        </Inputs>
                        <Inputs active={selectedType === 'middleName'}
                                onClick={() => changeActive('middleName')}>
                            {middleName === '' ? <Placeholder>Отчество</Placeholder> : middleName}
                        </Inputs>
                    </FlexBox>
                    <Footer marginTop="100px" align="start">
                        <LinkButton margin="0 100px 0 0" path={-1} text={t('back')} />
                    </Footer>
                </Form>
            </Content>
        </Container>
    )
}
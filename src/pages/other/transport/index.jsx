import { Form, Text, Fixed } from './style';
import Select from "components/Select";
import { Footer } from '../calculator/style';
import { Inputs } from 'styles/globalStyles';
import { useState, useCallback, useEffect } from 'react';
import { carType, regions } from 'utils/json';
import { useTranslation } from 'react-i18next';
import { Placeholder } from '../../../components/Select/style';
import LinkButton from '../../../components/Buttons/LinkButton';
import { Header, Content, Container, Title, CheckButton, FlexBox } from "../info/style";
import Keyboard from '../../../components/Keyboard';
export default () => {
    const { t } = useTranslation();
    const [car, setCar] = useState('');
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const [region, setRegion] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const changeActive = type => setSelectedType(type);
    const onSelectCar = useCallback((val) => setCar(val), [car]);
    const onSelectRegion = useCallback((val) => setRegion(val), [region]);
    const removeChar = () => {
        if (selectedType === types.stateNumber) {
            if (obj.stateNumber === '') return;
            const value = obj.stateNumber.slice(0, -1);
            setObj((prev) => ({ ...prev, stateNumber: value }))
            value.length === 0 ? setText('') : setText(value)
        }
        if (selectedType === types.serieTechnical) {
            if (obj.serieTechnical === '') return;
            const value = obj.serieTechnical.slice(0, -1);
            setObj((prev) => ({ ...prev, serieTechnical: value }))
            value.length === 0 ? setText('') : setText(value)
        }
    };
    const [obj, setObj] = useState({
        pinfl: '',
        show: '',
        lastName: '',
        firstName: '',
        markModel: '',
        middleName: '',
        bodyNumber: '',
        motorNumber: '',
        stateNumber: '',
        selectedType: '',
        chassisNumber: '',
        yearOfRelease: '',
        capacityEngine: '',
        serieTechnical: '',
        numberTechnical: '',
    })
    const types = {
        stateNumber: 'stateNumber',
        serieTechnical: 'serieTechnical',
        numberTechnical: 'numberTechnical'
    };
    useEffect( () => {
        if (selectedType === types.stateNumber) {
            if (obj.stateNumber.length !== 5) {
                if (obj.stateNumber.length >= 5) return;
                setObj((prev) => ({ ...prev, stateNumber: text }))
            } else {
                setText('')
            }
        }
        if (selectedType === types.serieTechnical) {
            if (obj.stateNumber.length > 0) {
                setText('')
            }
            if (obj.serieTechnical.length !== 10) {
                if (obj.serieTechnical.length >= 10) return;
                setObj((prev) => ({ ...prev, serieTechnical: text }))
            } else {
                setText('')
            }
        }
        if (selectedType === types.numberTechnical) {
            if (obj.numberTechnical.length >= 13) return;
            setObj((prev) => ({ ...prev, numberTechnical: text }))
        }
    }, [text]);
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
                                onClick={() => {
                                    setShow(!show);
                                    changeActive('stateNumber');
                                }}>
                            {obj.stateNumber === '' ? <Placeholder>Гос.Номер</Placeholder> : obj.stateNumber}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'serieTechnical'}
                                onClick={() => {
                                    setShow(!show);
                                    changeActive('serieTechnical');
                                }}>
                            {obj.serieTechnical === '' ? <Placeholder>Серия и тех.паспорта</Placeholder> : obj.serieTechnical}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'numberTechnical'}
                                onClick={() => changeActive('numberTechnical')}>
                            {obj.numberTechnical === '' ? <Placeholder>Номер и тех.паспорта</Placeholder> : obj.numberTechnical}
                        </Inputs>
                        <CheckButton>Проверить</CheckButton>
                    </FlexBox>
                    <FlexBox>
                        <Inputs marginRight="12px"
                                active={selectedType === 'markModel'}
                                onClick={() => changeActive('markModel')}>
                            {obj.markModel === '' ? <Placeholder>Марка/Модель</Placeholder> : obj.markModel}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'capacityEngine'}
                                onClick={() => changeActive('capacityEngine')}>
                            {obj.capacityEngine === '' ? <Placeholder>Объем двигателя</Placeholder> : obj.capacityEngine}
                        </Inputs>
                        <Inputs active={selectedType === 'yearOfRelease'}
                                onClick={() => changeActive('yearOfRelease')}>
                            {obj.yearOfRelease === '' ? <Placeholder>Год выпуска</Placeholder> : obj.yearOfRelease}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs marginRight="12px"
                                active={selectedType === 'bodyNumber'}
                                onClick={() => changeActive('bodyNumber')}>
                            {obj.bodyNumber === '' ? <Placeholder>Номер кузова</Placeholder> : obj.bodyNumber}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'chassisNumber'}
                                onClick={() => changeActive('chassisNumber')}>
                            {obj.chassisNumber === '' ? <Placeholder>Номер шасси</Placeholder> : obj.chassisNumber}
                        </Inputs>
                        <Inputs
                                active={selectedType === 'motorNumber'}
                                onClick={() => changeActive('motorNumber')}>
                            {obj.motorNumber === '' ? <Placeholder>Номер двигателя</Placeholder> : obj.motorNumber}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Select
                            menu={carType}
                            defaultValue={car}
                            changeValue={onSelectCar}
                            active={selectedType === 'car'}
                            placeholder={t('please_select_carType')}
                            onClick={() => changeActive('car')}
                        />
                    </FlexBox>
                    <FlexBox>
                        <Select
                            menu={regions}
                            defaultValue={region}
                            changeValue={onSelectRegion}
                            active={selectedType === 'region'}
                            placeholder={t('please_select_region')}
                            onClick={() => changeActive('region')} />
                    </FlexBox>
                    <Text margin="24px 0">информация о владельца тс</Text>
                    <FlexBox align="center">
                        <Inputs basis="70%" active={selectedType === 'pinfl'}
                                onClick={() => changeActive('pinfl')}>
                            {obj.pinfl === '' ? <Placeholder>ПИНФЛ</Placeholder> : obj.pinfl}
                        </Inputs>
                    </FlexBox>
                    <FlexBox>
                        <Inputs marginRight="12px"
                                active={selectedType === 'lastName'}
                                onClick={() => changeActive('lastName')}>
                            {obj.lastName === '' ? <Placeholder>Фамилия</Placeholder> : obj.lastName}
                        </Inputs>
                        <Inputs marginRight="12px"
                                active={selectedType === 'firstName'}
                                onClick={() => changeActive('firstName')}>
                            {obj.firstName === '' ? <Placeholder>Имя</Placeholder> : obj.firstName}
                        </Inputs>
                        <Inputs active={selectedType === 'middleName'}
                                onClick={() => changeActive('middleName')}>
                            {obj.middleName === '' ? <Placeholder>Отчество</Placeholder> : obj.middleName}
                        </Inputs>
                    </FlexBox>
                    <Footer marginTop="100px" align="start">
                        <LinkButton margin="0 100px 0 0" path={-1} text={t('back')} />
                    </Footer>
                    <Fixed show={show}>
                        <Keyboard setKey={setText} removeChar={removeChar} />
                    </Fixed>
                </Form>
            </Content>
        </Container>
    )
}
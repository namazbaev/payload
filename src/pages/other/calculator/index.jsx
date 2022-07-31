// import Select from "components/BaseSelect";
import Select from "components/Select";
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import LinkButton from 'components/Buttons/LinkButton';
import { carType, regions, insrYear, benefits, insrAccidents } from 'utils/json';
import {
    Content, Title, Wrapper, LeftSection, RightSection, FlexBox,
    Text, FlexItemLeft, FlexItemRight, Div, ButtonWrap, RadioButton, Footer
} from "./style"

export default () => {
    const { t } = useTranslation();
    const [car, setCar] = useState('');
    const [region, setRegion] = useState('');
    const [benefit, setBenefit] = useState('');
    const [selected, setSelected] = useState(null);
    const [insurance, setInsurance] = useState('');
    const [insAccident, setInsAccident] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const changeActive = type => setSelectedType(type);
    const onSelect = useCallback((val) => {
        setSelectedType(val)
        if (selectedType === 'benefit') {
            setBenefit(val)
        }
        if (selectedType === 'region') {
            setRegion(val)
        }
        if (selectedType === 'car') {
            setCar(val)
        }
        if (selectedType === 'insurance') {
            setInsurance(val)
        }
    },[car, region, benefit, insurance])
    const onSelectCar = useCallback((val) => setCar(val), [car]);
    const onSelectRegion = useCallback((val) => setRegion(val), [region]);
    const onSelectBenft = useCallback((val) => setBenefit(val), [benefit]);
    const onSelectInsr = useCallback((val) => setInsurance(val), [insurance]);
    const onSelectInsAccident = useCallback((val) => setInsAccident(val), [insAccident]);
    return (
        <Content>
            <Wrapper>
                <LeftSection>
                    <Title margin="0 0 24px 0">КАЛКУЛЯТОР ОСАГО</Title>
                    <Div margin="48px 0 0 0">
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Водит.огранич:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <ButtonWrap>
                                    <RadioButton active={selected === true} onClick={() => setSelected(true)}>Ограничено</RadioButton>
                                    <RadioButton active={selected === false} onClick={() => setSelected(false)}>Не ограничен</RadioButton>
                                </ButtonWrap>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Вид ТС:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Select menu={carType}
                                    defaultValue={car}
                                    changeValue={onSelectCar}
                                    active={selectedType === 'car'}
                                    onClick={() => changeActive('car')}
                                />
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Территория:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Select menu={regions}
                                    defaultValue={region}
                                    changeValue={onSelectRegion}
                                    active={selectedType === 'region'}
                                    onClick={() => changeActive('region')}
                                />
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Период страхования:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Select menu={insrYear}
                                    defaultValue={insurance}
                                    changeValue={onSelectInsr}
                                    active={selectedType === 'insurance'}
                                    onClick={() => changeActive('insurance')} />
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Льготы:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Select menu={benefits}
                                    defaultValue={benefit}
                                    changeValue={onSelectBenft}
                                    active={selectedType === 'benefit'}
                                    onClick={() => changeActive('benefit')} />
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Страховые случии:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Select menu={insrAccidents}
                                    defaultValue={insAccident}
                                    changeValue={onSelectInsAccident}
                                    active={selectedType === 'insAccident'}
                                    onClick={() => changeActive('insAccident')}
                                />
                            </FlexItemRight>
                        </FlexBox>
                    </Div>
                </LeftSection>
                <RightSection>
                    <Title>Результаты</Title>
                    <Div margin="48px 0 0 0">
                        <FlexBox marginBottom="13px">
                            <FlexItemLeft align="center">
                                <Text>К оплате:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text align="end" size="20px">168 000,00 сум</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox marginBottom="13px">
                            <FlexItemLeft align="center">
                                <Text>Премия:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color align="end" size="20px">168 000,00 сум</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox marginBottom="13px">
                            <FlexItemLeft align="center">
                                <Text>Страховая сумма:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color align="end" size="20px">40 000 000,00 сум</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox marginBottom="13px">
                            <FlexItemLeft align="center">
                                <Text>Вид ТС(Тb):</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color align="end" size="20px">0.1</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox marginBottom="13px">
                            <FlexItemLeft align="center">
                                <Text>Территория:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color align="end" size="20px">1.4</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox marginBottom="13px">
                            <FlexItemLeft align="center">
                                <Text>Период страхования:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color align="end" size="20px">1</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox marginBottom="13px">
                            <FlexItemLeft align="center">
                                <Text>Льготы:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color align="end" size="20px">1</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox marginBottom="13px">
                            <FlexItemLeft align="center">
                                <Text>Страховые случии:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color align="end" size="20px">1</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft align="center">
                                <Text>Ограниченое водителей:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color align="end" size="20px">3</Text>
                            </FlexItemRight>
                        </FlexBox>
                    </Div>
                </RightSection>
            </Wrapper>
            <Footer>
                <LinkButton path={-1} text={t('back')} />
                <LinkButton path='/' text={t('main_page')} />
                <LinkButton path='/' text={t('next')} color='#00C35A' />
            </Footer>
        </Content>
    )
}
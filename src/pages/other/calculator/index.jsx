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
    const [selectedType, setSelectedType] = useState('');
    const [obj, setObj] = useState({
        car: '',
        region: '',
        benefit: '',
        insurance: '',
        insAccident: '',
        selectedType: ''
    })
    const changeActive = type => setSelectedType(type);
    const onSelect = useCallback((val) => {
        setSelectedType(val)
        if (selectedType === 'benefit') {
            setObj((prev) => ({ benefit: val }))
        }
        if (selectedType === 'region') {
            setObj((prev) => ({ region: val }))
        }
        if (selectedType === 'car') {
            setObj((prev) => ({ car: val }))
        }
        if (selectedType === 'insurance') {
            setObj((prev) => ({ insurance: val }))
        }
    },[car, region, benefit, insurance])
    const onSelectCar = useCallback((val) => setCar(val), [obj.car]);
    const onSelectRegion = useCallback((val) => setObj((prev) => ({region: val})), [obj.region]);
    const onSelectBenft = useCallback((val) => setBenefit(val), [obj.benefit]);
    const onSelectInsr = useCallback((val) => setInsurance(val), [obj.insurance]);
    const onSelectInsAccident = useCallback((val) => setInsAccident(val), [obj.insAccident]);
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
                                    defaultValue={obj.car}
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
                                    defaultValue={obj.region}
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
                                    changeValue={onSelectInsr}
                                    defaultValue={obj.insurance}
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
                                    defaultValue={obj.benefit}
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
                                    defaultValue={obj.insAccident}
                                    changeValue={onSelectInsAccident}
                                    active={selectedType === 'insAccident'}
                                    onClick={() => changeActive('insAccident')} />
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
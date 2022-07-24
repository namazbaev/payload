import Select from "components/BaseSelect";
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { carType, regions, insrYear, benefits, insrAccidents } from 'utils/json';
import {
    Content, Title, Wrapper, LeftSection, RightSection, FlexBox, Button,
    Text, FlexItemLeft, FlexItemRight, Div, ButtonWrap, RadioButton, Footer
} from "./style"

export default () => {
    const navigate = useNavigate();
    const [car, setCar] = useState('');
    const [region, setRegion] = useState('');
    const [benefit, setBenefit] = useState('');
    const [selected, setSelected] = useState(null);
    const [insurance, setInsurance] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const changeActive = type => setSelectedType(type);
    const onSelectCar = useCallback((val) => setCar(val), [car]);
    const onSelectRegion = useCallback((val) => setRegion(val), [region]);
    const onSelectBenft = useCallback((val) => setBenefit(val), [benefit]);
    const onSelectInsr = useCallback((val) => setInsurance(val), [insurance]);
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
                                <Select
                                    menu={carType}
                                    defaultValue={car}
                                    changeValue={onSelectCar}
                                    active={selectedType === 'select'}
                                    onClick={() => changeActive('select')}
                                />
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Территория:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Select
                                    menu={regions}
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
                                <Select
                                    menu={insrYear}
                                    defaultValue={insurance}
                                    changeValue={onSelectInsr}
                                    active={selectedType === 'insurance'}
                                    onClick={() => changeActive('insurance')}
                                />
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Льготы:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Select
                                    menu={benefits}
                                    defaultValue={benefit}
                                    changeValue={onSelectBenft}
                                    active={selectedType === 'benefit'}
                                    onClick={() => changeActive('benefit')}
                                />
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft>
                                <Text>Страховые случии:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Select
                                    menu={insrAccidents}
                                    defaultValue={benefit}
                                    changeValue={onSelectBenft}
                                    active={selectedType === 'benefit'}
                                    onClick={() => changeActive('benefit')}
                                />
                            </FlexItemRight>
                        </FlexBox>
                    </Div>
                </LeftSection>
                <RightSection>
                    <Title>Результаты</Title>
                    <Div margin="48px 0 0 0">
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>К оплате:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text size="26px">168 000,00 сум</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>Премия:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color>168 000,00 сум</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>Страховая сумма:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color>40 000 000,00 сум</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <br />
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>Вид ТС(Тb):</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color>0.1</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>Территория:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color>1.4</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>Период страхования:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color>1</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>Льготы:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color>1</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>Страховые случии:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color>1</Text>
                            </FlexItemRight>
                        </FlexBox>
                        <FlexBox>
                            <FlexItemLeft align="right">
                                <Text>Огранич.водителей:</Text>
                            </FlexItemLeft>
                            <FlexItemRight>
                                <Text color>3</Text>
                            </FlexItemRight>
                        </FlexBox>
                    </Div>
                </RightSection>
            </Wrapper>
            <Footer>
                <Button onClick={() => navigate(-1)}>назад</Button>
                <Button onClick={() => navigate('/')}>на главный</Button>
                <Button onClick={() => navigate('/custom-url')}>продолжить</Button>
            </Footer>
        </Content>
    )
}
import { Form, Text, Wrap } from './style';
import Select from "components/BaseSelect";
import { useState, useCallback } from 'react';
import { carType, regions } from 'utils/json';
import { useNavigate } from 'react-router-dom';
import { Footer, Button } from '../calculator/style';
import { Header, Content, Container, Title, Input, CheckButton, FlexBox } from "../info/style";
export default () => {
    const navigate = useNavigate();
    const [car, setCar] = useState('');
    const [region, setRegion] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const changeActive = type => setSelectedType(type);
    const onSelectCar = useCallback((val) => setCar(val), [car]);
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
                            <Button margin="0 36px 0">Заявителя</Button>
                            <Button>Владельца</Button>
                        </Wrap>
                    </FlexBox>
                    <FlexBox>
                        <Input borderSize={2} basis="15%" maxLength={2} marginRight="12px" placeholder="Серия паспорта" />
                        <Input borderSize={2} basis="30%" type='number' maxLength={7} marginRight="12px" placeholder="Номер паспорта" />
                        <Input borderSize={2} basis="45%" type='number' maxLength={14} marginRight="12px" placeholder="ПИНФЛ" />
                        <CheckButton>Получить</CheckButton>
                    </FlexBox>
                    <FlexBox>
                        <Input readOnly={true} basis="50%" marginRight="12px" placeholder="Дата выдачи" />
                        <Input readOnly={true} placeholder="Кем выдан" />
                    </FlexBox>
                    <FlexBox>
                        <Input readOnly={true} basis="33.3%" marginRight="12px" placeholder="Фамилия" />
                        <Input readOnly={true} basis="33.3%" marginRight="12px" placeholder="Имя" />
                        <Input readOnly={true} basis="33.3%" placeholder="Отчество" />
                    </FlexBox>
                    <FlexBox align="center">
                        <Input readOnly={true} basis="33.3%" placeholder="Дата рождения" />
                    </FlexBox>
                    <Text margin="24px 0">информация о водительском удостоверении</Text>
                    <FlexBox align="center">
                        <Input readOnly={true} basis="70%" placeholder="ПИНФЛ" />
                    </FlexBox>
                    <FlexBox>
                        <Input readOnly={true} basis="33.3%" marginRight="12px" placeholder="Серия водитель удоств." />
                        <Input readOnly={true} basis="33.3%" marginRight="12px" placeholder="Номер водитель удоств." />
                        <Input readOnly={true} basis="33.3%" placeholder="Дата выдачи водитель удоств." />
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
                    <Footer align="start">
                        <Button onClick={() => navigate(-1)} margin="0 0 0 48px">Назад</Button>
                    </Footer>
                </Form>
            </Content>
        </Container>
    )
}
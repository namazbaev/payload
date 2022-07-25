import { Form, Text } from './style';
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
                <Title uppercase>транспортноe средство</Title>
            </Header>
            <Content>
                <Form>
                    <Text>укажите данные о транспортном средстве</Text>
                    <FlexBox marginTop="16px">
                        <Input borderSize={2} marginRight="12px" placeholder="Гос.Номер" />
                        <Input borderSize={2} marginRight="12px" placeholder="Серия и тех.паспорта" />
                        <Input borderSize={2} marginRight="12px" placeholder="Номер и тех.паспорта" />
                        <CheckButton>Проверить</CheckButton>
                    </FlexBox>
                    <FlexBox>
                        <Input readOnly={true} marginRight="12px" placeholder="Марка/Модель" />
                        <Input readOnly={true} basis="50%" marginRight="12px" placeholder="Объем двигателя" />
                        <Input readOnly={true} basis="50%" placeholder="Год выпуска" />
                    </FlexBox>
                    <FlexBox>
                        <Input readOnly={true} marginRight="12px" placeholder="Номер кузова" />
                        <Input readOnly={true} marginRight="12px" placeholder="Номер шасси" />
                        <Input readOnly={true} placeholder="Номер двигателя" />
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
                        <Input readOnly={true} basis="70%" placeholder="ПИНФЛ" />
                    </FlexBox>
                    <FlexBox>
                        <Input readOnly={true} marginRight="12px" placeholder="Фамилия" />
                        <Input readOnly={true} marginRight="12px" placeholder="Имя" />
                        <Input readOnly={true} placeholder="Отчество" />
                    </FlexBox>
                    <Footer align="start">
                        <Button onClick={() => navigate(-1)} margin="0 0 0 48px">Назад</Button>
                    </Footer>
                </Form>
            </Content>
        </Container>
    )
}
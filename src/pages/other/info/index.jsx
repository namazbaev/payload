import { benefits } from 'utils/json';
import Select from "components/BaseSelect";
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PNFL from 'assets/images/other/jshshir.jpg';
import { Button, Footer } from '../calculator/style';
import {
    Container, Header, Content, Title, Form, Info,
    Input, FlexBox, CheckButton, Image, Flex
} from "./style";


export default () => {
    const navigate = useNavigate();
    const [benefit, setBenefit] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const changeActive = type => setSelectedType(type);
    const onSelectBenf = useCallback((val) => setBenefit(val), [benefit]);
    return (
        <Container>
            <Header>
                <Title uppercase>информация о заявителя</Title>
            </Header>
            <Content>
                <Flex>
                <Form>
                    <FlexBox>
                        <Input borderSize={2} basis="15%" maxLength={2} marginRight="12px" placeholder="Серия паспорта" />
                        <Input borderSize={2} basis="30%" type='number' maxLength={7} marginRight="12px" placeholder="Номер паспорта" />
                        <Input borderSize={2} basis="45%" type='number' maxLength={14} marginRight="12px" placeholder="ПИНФЛ" />
                        <CheckButton>Проверить</CheckButton>
                    </FlexBox>
                    <FlexBox>
                        <Input readOnly={true} basis="40%" maxLength={2} marginRight="12px" placeholder="Дата выдачи" />
                        <Input readOnly={true} placeholder="Кем выдан" />
                    </FlexBox>
                    <FlexBox>
                        <Input readOnly={true} basis="33.3%" marginRight="12px" placeholder="Фамилия" />
                        <Input readOnly={true} basis="33.3%" marginRight="12px" placeholder="Имя" />
                        <Input readOnly={true} basis="33.3%" placeholder="Отчество" />
                    </FlexBox>
                    <FlexBox><Input readOnly={true} placeholder="Адрес" /></FlexBox>
                    <FlexBox>
                        <Input type="tel" borderSize={2} marginRight="12px" placeholder="Телефон" />
                        <Input type="tel" borderSize={2} placeholder="Дополнителный телефон" />
                    </FlexBox>
                    <FlexBox><Input borderSize={2} placeholder="Эл.почта" /></FlexBox>
                    <FlexBox>
                        <Select
                            menu={benefits}
                            defaultValue={benefit}
                            changeValue={onSelectBenf}
                            active={selectedType === 'benefit'}
                            onClick={() => changeActive('benefit')}
                        />
                    </FlexBox>
                </Form>
                <Info>
                    <Title size={20} uppercase color align="center" margin="72px 0 0">
                        пинфл - персоналный идентификатор номер физического лица
                    </Title>
                    <Title margin="12px 0 12px 0" size={20} align="center">
                        Номер ПИНФЛ находится в вашем паспорте
                    </Title>
                    <Image src={PNFL} alt="pnfl image" />
                    </Info>
                </Flex>
                <Footer align="start">
                    <Button onClick={() => navigate(-1)} margin="0 48px">Назад</Button>
                    <Button onClick={() => navigate('/')}>на главный</Button>
                </Footer>
            </Content>
        </Container>
    )
}
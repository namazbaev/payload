import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Container, IconSection, More, Icon, Title, BackDrop, Description, Button } from './style.js';
const Popup = ({ status, active, setActive }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const closePopup = () => {
        navigate('/');
        setActive(false)
    }
    const content = {
        title: status ? t('popup_success_title') : t('popup_error_title'),
        description: status ? t('popup_success_desc') : t('popup_error_desc')
    }
    return (
        <BackDrop active={active}>
            <Container active={active ? active : ''}>
                <IconSection>
                    <Icon isSuccess={status} />
                </IconSection>
                <Title>{content.title}</Title>
                <More>
                    <Description>
                        {content.description}
                    </Description>
                </More>
                <Button onClick={closePopup}>{t('main_page')}</Button>
            </Container>
        </BackDrop>
    )
}
export default Popup
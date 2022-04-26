import { LinkTo } from "styles/globalStyles"
import { useTranslation } from "react-i18next"
import { useLocation } from 'react-router-dom'
import LinkButton from "components/Buttons/LinkButton"
import { Container, Content, CardImage, Wrap, Footer } from "./style"
export default ({ data }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const content = data.map(({ path, img, name }) =>
        <LinkTo key={path} to={`${name}`}>
            <Content>
                <CardImage prop={location.pathname} img={img} />
            </Content>
        </LinkTo>)
    return (
        <Container>
            <Wrap>{content}</Wrap>
            <Footer>
                <LinkButton path={-1} text={t('back')} />
                <LinkButton path="/" text={t('main_page')} />
            </Footer>
        </Container>
    )
}
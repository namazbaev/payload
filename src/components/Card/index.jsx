import { LinkTo } from "styles/globalStyles"
import { useTranslation } from "react-i18next"
import LinkButton from "components/Buttons/LinkButton"
import { Container, Content, Wrap, Footer } from "./style"
export default ({ data }) => {
    const { t } = useTranslation();
    const content = data.map(({ path, img, name }) => <LinkTo key={path} to={`${name}`}><Content img={img} /></LinkTo>)
    return (
        <Container>
            <Wrap>
                {content}
            </Wrap>
            <Footer>
                <LinkButton path="/" text={t('back')} />
                <LinkButton path="/" text={t('main_page')} />
            </Footer>
        </Container>
    )
}
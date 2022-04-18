import { LinkTo } from "styles/globalStyles"
import { useTranslation } from "react-i18next"
import LinkButton from "components/Buttons/LinkButton"
import { Container, Content, Wrap, Footer } from "./style"
export default ({ data }) => {
    const { t } = useTranslation();
    return (
        <Container>
            <Wrap>
                {data.map(({ path, img }) => <LinkTo key={path} to={path}><Content img={img} /></LinkTo>)}
            </Wrap>
            <Footer>
                <LinkButton path="/" text={t('back')} />
                <LinkButton path="/" text={t('main_page')} />
            </Footer>
        </Container>
    )
}
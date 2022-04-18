import { providers } from "utils/json"
import { LinkTo } from "styles/globalStyles"
import { Container, Content, Wrap, Footer } from "./style"
import LinkButton from "components/Buttons/LinkButton"
export default ({ size }) => {
    return (
        <Container>
            <Wrap>
                {providers.map(({ path, img }) => <LinkTo key={path} to={path}><Content size={size} img={img} /></LinkTo>)}
            </Wrap>
            <Footer>
                <LinkButton path="/" text="Orqaga" />
                <LinkButton path="/" text="Bosh sahifa" />
            </Footer>
        </Container>
    )
}
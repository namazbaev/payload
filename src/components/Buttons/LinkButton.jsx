import { LinkBtn, Text } from "./style";
import { LinkTo } from "styles/globalStyles";

export default ({ text, path }) => (
    <LinkTo to={path}>
        <LinkBtn>
            <Text>{text}</Text>
        </LinkBtn>
    </LinkTo>
)
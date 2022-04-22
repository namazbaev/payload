import { LinkBtn, Text } from "./style";
import { LinkTo } from "styles/globalStyles";

export default ({ text, path, color, disabled, hoveredColor, state, ...props }) => (
    <LinkTo to={path} state={state}>
        <LinkBtn disabled={disabled} color={color} hoveredColor={hoveredColor} {...props}>
            <Text>{text}</Text>
        </LinkBtn>
    </LinkTo>
)
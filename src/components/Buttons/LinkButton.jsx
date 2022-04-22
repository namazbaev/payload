import { LinkBtn, Text } from "./style";
import { LinkTo } from "styles/globalStyles";

export default ({ text, path, color, disabled, onClick, hoveredColor, state, ...props }) => (
    <LinkBtn disabled={disabled} onClick={onClick} color={color} hoveredColor={hoveredColor} {...props}>
        <LinkTo to={path} state={state}>
            <Text>{text}</Text>
        </LinkTo>
    </LinkBtn>
)
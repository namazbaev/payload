import { LinkBtn, Text } from "./style";
import { LinkTo } from "styles/globalStyles";

export default ({ text, path, color, length, onClick, hoveredColor, state, ...props }) => (
    <LinkBtn disabled={length} onClick={onClick} color={color} hoveredColor={hoveredColor} {...props}>
        <LinkTo to={path} length={length} state={state} {...props}>
            <Text>{text}</Text>
        </LinkTo>
    </LinkBtn>
)
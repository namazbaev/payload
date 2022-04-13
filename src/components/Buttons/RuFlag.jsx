import { RusFlagIcon } from './style';
import { IconButton, IconText } from '../Header/style';
export default ({ title, ...props }) => (
    <IconButton {...props}>
        <RusFlagIcon /> {' '} <IconText>{title}</IconText>
    </IconButton>
);
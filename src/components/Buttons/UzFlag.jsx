import { UzFlagIcon } from './style';
import { IconButton, IconText } from '../Header/style';
export default ({ title, ...props }) => (
    <IconButton {...props}>
        <UzFlagIcon /> {' '} <IconText>{title}</IconText>
    </IconButton>
);
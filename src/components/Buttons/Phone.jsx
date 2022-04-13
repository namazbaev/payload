import { PhoneIcon } from './style';
import { IconButton } from '../Header/style';
export default ({ title, ...props }) => (
    <IconButton {...props}>
        <PhoneIcon /> {' '} {title}
    </IconButton>
);
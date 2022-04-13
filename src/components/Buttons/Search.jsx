import { Icon } from 'styles/Icons'
import img from "assets/icons/search-icon.svg";
import { IconButton, IconText } from 'components/Header/style';
export default ({ title, ...props }) => (
    <IconButton {...props}>
        <Icon src={img} /> {' '} <IconText>{title}</IconText>
    </IconButton>
);

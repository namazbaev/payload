import { Icon } from '../../styles/Icons'
import { IconButton, IconText } from '../Header/style';
import img from "../../assets/icons/great-britain-flag.svg";
export default ({ title, ...props }) => (
    <IconButton {...props}>
        <Icon src={img} /> {' '} <IconText>{title}</IconText>
    </IconButton>
);
import { Icon } from '../../styles/Icons'
import { IconButton, IconText } from '../Header/style';
// import img from "../../assets/images/beeline.svg";
export default ({ title, hovered, ...props }) => (
    <IconButton align="center" hovered={hovered ? 0 : 1} background="#E8E8E8" radius="20px" width="150px" height="90px" {...props}>
        {/* <Icon width="130px" height="90px" src={img} /> {' '} <IconText>{title}</IconText> */}
    </IconButton>
);
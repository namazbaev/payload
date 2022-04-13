import { QuestionIcon } from './style';
import { IconButton } from 'components/Header/style';
export default ({ title, ...props }) => (
    <IconButton {...props}>
        <QuestionIcon />{' '}{title}
    </IconButton>
);
import { IconButton } from './style'
export default ({ title, ...props }) => (
    <IconButton {...props}>{title}</IconButton>
)
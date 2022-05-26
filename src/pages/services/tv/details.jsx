import { useParams } from 'react-router-dom';
export default () => {
    const { name } = useParams();
    return (
        <div> {name}</div>
    )
}
import { useParams } from 'react-router-dom';
export default ({ match }) => {
    const { name } = useParams();
    console.log('match', match);
    return (
        <div>providers {name}</div>
    )
}
import { useParams } from 'react-router-dom';
export default ({ match }) => {
    const { name } = useParams();
    console.log(444);
    return (
        <div>asdadas {name}</div>
    )
}
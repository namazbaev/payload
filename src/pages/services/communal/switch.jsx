import { Gas } from './gas';
import { ColdWater } from './cold_water';
import { Electricity } from './electricity';
import { useParams } from 'react-router-dom';
const SwitchCommunals = () => {
	const params = useParams();
	const { name } = params;
	const switchComponent = {
		gas: <Gas />,
		coldwater: <ColdWater />,
		electricity: <Electricity />,
	};
	return switchComponent[name];
};
export default SwitchCommunals;

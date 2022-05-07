import Qiwi from "./qiwi";
import Payeer from "./payeer";
import Depozit from "./depozit";
import Perfect from "./perfect";
import Webmoney from "./webmoney";
import Yoomoney from "./yoomoney";
import { useParams } from 'react-router-dom';
const SwitchWallet = () => {
    const params = useParams();
    const { name } = params
    const switchComponent = {
        qiwi: <Qiwi />,
        payeer: <Payeer />,
        depozit: <Depozit />,
        perfect: <Perfect />,
        webmoney: <Webmoney />,
        yoomoney: <Yoomoney />
    }
    return switchComponent[name]
}
export default SwitchWallet
import { Operator } from "./style"
import Ucell from 'assets/icons/ucell1.svg';
import Mobiuz from 'assets/icons/mobiuz.svg';
import Humans from 'assets/icons/humans1.svg';
import Beeline from 'assets/icons/beeline.svg';
import Uzmobile from 'assets/icons/uzmobile1.svg';
import Perfectum from 'assets/icons/perfectum1.svg';
export default () => (
    <>
        <Operator img={Humans} />
        <Operator img={Mobiuz} />
        <Operator img={Ucell} />
        <Operator img={Uzmobile} />
        <Operator img={Beeline} />
        <Operator img={Perfectum} size="110%" />
    </>
)
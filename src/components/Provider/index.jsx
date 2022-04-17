import { Container, Content } from "./style"
import Comnet from 'assets/images/providers/comnet.svg'
import Tps from 'assets/images/providers/tps.svg'
import Netco from 'assets/images/providers/netco.svg'
import Koinot from 'assets/images/providers/koinot.svg'
import Beeline from 'assets/images/providers/beeline.svg'
import Gals from 'assets/images/providers/gals.svg'
import Nano from 'assets/images/providers/nano.svg'
import Istv from 'assets/images/tv/istv.svg'
import Evo from 'assets/images/providers/evo.svg'
import UzCloud from 'assets/images/providers/uzcloud.svg'
import Turon from 'assets/images/providers/turon.svg'
import Silver from 'assets/images/providers/silver.svg'
import Sarkor from 'assets/images/providers/sarkor.svg'
import Citynet from 'assets/images/providers/citynet.svg'
import Uztelecom from 'assets/images/providers/uztelecom.svg'
import Sola from 'assets/images/providers/sola.svg'
import Dgt from 'assets/images/providers/dgt.svg'
import Link from 'assets/images/providers/link.svg'
import Spectr from 'assets/images/providers/spectr.svg'
import FreeLink from 'assets/images/providers/freelink.svg'
import LinkButton from 'components/Buttons/LinkButton'

export default ({ size, img }) => {
    return (
        <Container>
            <Content size={size} img={Comnet} />
            <Content size={size} img={Citynet} />
            <Content size={size} img={Uztelecom} />
            <Content size={size} img={Nano} />
            <Content size={size} img={Turon} />
            <Content size={size} img={Sarkor} />
            <Content size={size} img={Tps} />
            <Content size={size} img={Istv} />
            <Content size={size} img={Gals} />
            <Content size={size} img={Netco} />
            <Content size={size} img={Sola} />
            <Content size={size} img={FreeLink} />
            <Content size={size} img={Evo} />
            <Content size={size} img={Dgt} />
            <Content size={size} img={Link} />
            <Content size={size} img={Spectr} />
            <Content size={size} img={Beeline} />
            <Content size={size} img={Koinot} />
            <Content size={size} img={Silver} />
            <Content size={size} img={UzCloud} />
            {/* <LinkButton text="Orqaga" /> */}
        </Container>
    )
}
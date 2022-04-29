import Istv from 'assets/images/tv/istv.svg'
import Tps from 'assets/images/providers/tps.svg'
import Evo from 'assets/images/providers/evo.svg'
import Dgt from 'assets/images/providers/dgt.svg'
import Gals from 'assets/images/providers/gals.svg'
import Nano from 'assets/images/providers/nano.svg'
import Sola from 'assets/images/providers/sola.svg'
import Link from 'assets/images/providers/link.svg'
import Netco from 'assets/images/providers/netco.svg'
import Turon from 'assets/images/providers/turon.svg'
import Comnet from 'assets/images/providers/comnet.svg'
import Koinot from 'assets/images/providers/koinot.svg'
import Silver from 'assets/images/providers/silver.svg'
import Sarkor from 'assets/images/providers/sarkor.svg'
import Spectr from 'assets/images/providers/spectr.svg'
import UzCloud from 'assets/images/providers/uzcloud.svg'
import Citynet from 'assets/images/providers/citynet.svg'
import Beeline from 'assets/images/providers/beeline.svg'
import FreeLink from 'assets/images/providers/freelink.svg'
import Uztelecom from 'assets/images/providers/uztelecom.svg'

import UZA from 'assets/images/tv/uza.svg'
import ITV5IMG from 'assets/images/tv/itv5.svg'
import Megogo from 'assets/images/tv/megogo.svg'
import AllPlay from 'assets/images/tv/allplay.svg'
import Kinopro from 'assets/images/tv/kinopro.svg'
import KinoXit from 'assets/images/tv/kinoxit.svg'
import Mediabay from 'assets/images/tv/mediabay.svg'
import Smartcom from 'assets/images/tv/smartcom.svg'
import Cinerama from 'assets/images/tv/cinerama.svg'
import Rizanova from 'assets/images/tv/rizanova.svg'
import HamkorTV from 'assets/images/tv/hamkor_tv.svg'
import KinoPoisk from 'assets/images/tv/kinopoisk.svg'
import AllMovies from 'assets/images/tv/allmovies.svg'
import Kinopokaz from 'assets/images/tv/kinopokaz.svg'
import Uzdigital from 'assets/images/tv/uzdigital.svg'
import UztelecomIPTV from 'assets/images/tv/uztelecom_iptv.svg'

import UcellLogo from 'assets/icons/ucell1.svg';
import MobiuzLogo from 'assets/icons/mobiuz.svg';
import HumansLogo from 'assets/icons/humans1.svg';
import BeelineLogo from 'assets/icons/beeline.svg';
import UzmobileLogo from 'assets/icons/uzmobile1.svg';
import PerfectumLogo from 'assets/icons/perfectum1.svg';
import VodafoneLogo from 'assets/images/operators/vodafone.svg';
import MegafonLogo from 'assets/images/operators/megafon.svg';
import AirtelLogo from 'assets/images/operators/airtel.svg';
import KcellLogo from 'assets/images/operators/kcell.svg';
import Humo from 'assets/images/cards/humo1.svg';
import UzCard from 'assets/images/cards/uzcard.svg';
import { ALLMOVIES, ITV5, ALLPLAY, BEELINEPR, CINERAMA, CITYNET, COMNET, DGT, EVO, FREELINK, FREELINKPR, GALS, HAMKORTV, ISTV, ISTVPR, KINOPOISK, KINOPOKAZ, KINOPRO, KINOXIT, KOINOTTV, LINKTELECOM, MEDIABAY, MEGOGO, NANOTELECOM, NETCO, NETCOPR, RIZANOVA, SARKORTELECOM, SILVERTELECOM, SMARTCOM, SOLA, SPECTRIT, TPS, TURONTELECOM, UZCLOUD, UZDIGITAL, UZTEECOM_IPTV, UZTELECOM } from './route'
import { Delete } from 'pages/card/details/style'
export const tv = [
    { path: UZA, name: "UZA", img: UZA },
    { path: ISTV, name: "Istv", img: Istv },
    { path: ITV5, name: "ITV5", img: ITV5IMG },
    { path: NETCO, name: "netco", img: Netco },
    { path: MEGOGO, name: "megogo", img: Megogo },
    { path: ALLPLAY, name: "allPlay", img: AllPlay },
    { path: KINOPRO, name: "Kinopro", img: Kinopro },
    { path: KINOXIT, name: "KinoXit", img: KinoXit },
    { path: SMARTCOM, name: "Smartcom", img: Smartcom },
    { path: MEDIABAY, name: "Mediabay", img: Mediabay },
    { path: RIZANOVA, name: "mizanova", img: Rizanova },
    { path: CINERAMA, name: "Cinerama", img: Cinerama },
    { path: HAMKORTV, name: "Hamkor TV", img: HamkorTV },
    { path: FREELINK, name: "Free Link", img: FreeLink },
    { path: ALLMOVIES, name: "allmovies", img: AllMovies },
    { path: KINOPOKAZ, name: "kinopokaz", img: Kinopokaz },
    { path: UZDIGITAL, name: "Uzdigital", img: Uzdigital },
    { path: KINOPOISK, name: "KinoPoisk", img: KinoPoisk },
    { path: TURONTELECOM, name: "Turon Telecom", img: Turon },
    { path: UZTEECOM_IPTV, name: "Uztelecom-IPTV", img: UztelecomIPTV },
]
export const providers = [
    { path: TPS, size: '160px 100px', name: "tps", img: Tps },
    { path: EVO, size: '160px 100px', name: "evo", img: Evo },
    { path: DGT, size: '160px 100px', name: "dgt", img: Dgt },
    { path: GALS, size: '160px 100px', name: "gals", img: Gals },
    { path: SOLA, size: '160px 100px', name: "sola", img: Sola },
    { path: ISTVPR, size: '160px 100px', name: "istv", img: Istv },
    { path: NETCOPR, size: '160px 100px', name: "netco", img: Netco },
    { path: COMNET, size: '160px 100px', name: "comnet", img: Comnet },
    { path: CITYNET, size: '160px 100px', name: "citynet", img: Citynet },
    { path: UZCLOUD, size: '160px 100px', name: "uzcloud", img: UzCloud },
    { path: SPECTRIT, size: '160px 100px', name: "spectr-it", img: Spectr },
    { path: BEELINEPR, size: '160px 100px', name: "beeline", img: Beeline },
    { path: KOINOTTV, size: '160px 100px', name: "koinot-tv", img: Koinot },
    { path: SILVERTELECOM, size: '160px 100px', name: "name", img: Silver },
    { path: FREELINKPR, size: '160px 100px', name: "free-link", img: FreeLink },
    { path: LINKTELECOM, size: '160px 100px', name: "link-telecom", img: Link },
    { path: UZTELECOM, size: '160px 100px', name: "uztelecom", img: Uztelecom },
    { path: NANOTELECOM, size: '160px 100px', name: "nano-telecom", img: Nano },
    { path: TURONTELECOM, size: '160px 100px', name: "turon-telecom", img: Turon },
    { path: SARKORTELECOM, size: '160px 100px', name: "sarkor-telecom", img: Sarkor }
]
export const mobileoperators = [
    { code: [33], path: UZA, size: 'auto', name: "humans", img: HumansLogo },
    { code: [97, 88], path: UZA, size: 'auto', name: "mobiuz", img: MobiuzLogo },
    { code: [93, 94], path: UZA, size: 'auto', name: "ucell", img: UcellLogo },
    { code: [99, 95], path: UZA, size: 'auto', name: "uztelecom", img: UzmobileLogo },
    { code: [90, 91], path: UZA, size: 'auto', name: "beeline", img: BeelineLogo },
    { code: [98], path: UZA, size: 'auto', name: "perfectum", img: PerfectumLogo },
    { code: [31], path: UZA, size: 'auto', name: "vodafone", img: VodafoneLogo },
    { code: [30], path: UZA, size: 'auto', name: "megafon", img: MegafonLogo },
    { code: [25], path: UZA, size: 'auto', name: "airtel", img: AirtelLogo },
    { code: [96], path: UZA, size: 'auto', name: "kcell", img: KcellLogo },
]
export const cards = [
    { name: "humo", img: Humo },
    { name: "uzcard", img: UzCard },
]
export const keyboard = [];
for (let i = 1; i < 10; i++)
    keyboard.push({ key: i })
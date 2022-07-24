import Main from 'pages/home';
import PayPhone from 'pages/pay';
import QRCode from 'pages/result';
import CardPay from 'pages/card/pay';
import { Wallets } from 'pages/wallet';
import { TVS } from 'pages/services/tv';
import CardDetails from 'pages/card/details';
import SwitchWallet from 'pages/wallet/switch';
import TVDetails from 'pages/services/tv/details';
import { Communals } from 'pages/services/communal';
import { Providers } from 'pages/services/providers';
import PRDetails from 'pages/services/providers/details';
import MobDetails from 'pages/services/operators/details';
import { MobileOperator } from 'pages/services/operators';
import {
    TV,
    PAY,
    QRCODE,
    WALLET,
    CARDPAY,
    PROVIDERS,
    COMMUNALS,
    TVDETAILS,
    CARD_DETAILS,
    MOBILEOPERATOR,
    WALLET_DETAILS,
    PROVIDERDETAILS,
    MOBILEOPERATORS,
    COMMUNALS_DETAILS,
} from './route';
import SwitchCommunals from 'pages/services/communal/switch';

export const routes = [{
    path: '/',
    Component: Main,
    title: 'Home',
},
{
    path: TV,
    Component: TVS,
    title: 'TV',
},
{
    path: PROVIDERS,
    Component: Providers,
    title: 'Providers',
},
{
    path: MOBILEOPERATOR,
    Component: MobileOperator,
    title: 'MobileOperator',
},
{
    path: TVDETAILS,
    Component: TVDetails,
    title: 'tvItem',
},
{
    path: MOBILEOPERATORS,
    Component: MobDetails,
    title: 'MobDetails',
},
{
    path: PROVIDERDETAILS,
    Component: PRDetails,
    title: 'PRDetails',
},
{
    path: PAY,
    Component: PayPhone,
    title: 'Pay',
},
{
    path: CARD_DETAILS,
    Component: CardDetails,
    title: 'CardDetails',
},
{
    path: CARDPAY,
    Component: CardPay,
    title: 'CardPay',
},
{
    path: WALLET,
    Component: Wallets,
    title: 'Wallets',
},
{
    path: WALLET_DETAILS,
    Component: SwitchWallet,
    title: 'SwitchWallet',
},
{
    path: COMMUNALS,
    Component: Communals,
    title: 'Communals',
},
{
    path: COMMUNALS_DETAILS,
    Component: SwitchCommunals,
    title: 'SwitchCommunals',
},
{
    path: QRCODE,
    Component: QRCode,
    title: 'QRCode',
},
];
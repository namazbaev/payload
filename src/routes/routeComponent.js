import Main from "pages/home";
import { TVS } from "pages/TV";
import PayPhone from "pages/pay";
import CardPay from 'pages/card/pay';
import { Wallets } from "pages/wallet";
import TVDetails from "pages/TV/details";
import { Providers } from "pages/providers";
import CardDetails from 'pages/card/details';
import PayToDetails from "pages/pay/details";
import SwitchWallet from "pages/wallet/switch";
import PRDetails from 'pages/providers/details';
import MobDetails from 'pages/operators/details';
import { MobileOperator } from "pages/operators";
import {
    TV,
    PAY,
    WALLET,
    CARDPAY,
    PROVIDERS,
    TVDETAILS,
    CARD_DETAILS,
    MOBILEOPERATOR,
    WALLET_DETAILS,
    PAY_TO_DETAILS,
    PROVIDERDETAILS,
    MOBILEOPERATORS
} from "./route";

export const routes = [{
        path: '/',
        Component: Main,
        title: 'Home'
    },
    {
        path: TV,
        Component: TVS,
        title: 'TV'
    },
    {
        path: PROVIDERS,
        Component: Providers,
        title: 'Providers'
    },
    {
        path: MOBILEOPERATOR,
        Component: MobileOperator,
        title: 'MobileOperator'
    },
    {
        path: TVDETAILS,
        Component: TVDetails,
        title: 'tvItem'
    },
    {
        path: MOBILEOPERATORS,
        Component: MobDetails,
        title: 'MobDetails'
    },
    {
        path: PROVIDERDETAILS,
        Component: PRDetails,
        title: 'PRDetails'
    },
    {
        path: PAY,
        Component: PayPhone,
        title: 'Pay'
    },
    {
        path: CARD_DETAILS,
        Component: CardDetails,
        title: 'CardDetails'
    },
    {
        path: CARDPAY,
        Component: CardPay,
        title: 'CardPay'
    },
    {
        path: WALLET,
        Component: Wallets,
        title: 'Wallets'
    },
    {
        path: WALLET_DETAILS,
        Component: SwitchWallet,
        title: 'SwitchWallet'
    },
    {
        path: PAY_TO_DETAILS,
        Component: PayToDetails,
        title: 'PayToDetails'
    },
]
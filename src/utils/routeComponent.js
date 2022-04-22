import Main from "pages/home";
import { TVS } from "pages/TV";
import PayPhone from "pages/pay";
import TVDetails from "pages/TV/details";
import { Providers } from "pages/providers";
import PRDetails from 'pages/providers/details';
import MobDetails from 'pages/operators/details';
import { MobileOperator } from "pages/operators";
import { TV, PAY, TVDETAILS, PROVIDERS, PROVIDERDETAILS, MOBILEOPERATOR, MOBILEOPERATORS } from "./route";

export const routes = [
    {
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
]
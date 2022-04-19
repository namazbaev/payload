import Main from "pages/home";
import { TVS } from "pages/TV";
import TVDetails from "pages/TV/details";
import PRDetails from 'pages/providers/details'
import { TV, TVDETAILS, PROVIDERS, PROVIDERDETAILS } from "./route";
import { Providers } from "pages/providers";

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
        path: TVDETAILS,
        Component: TVDetails,
        title: 'tvItem'
    },
    {
        path: PROVIDERDETAILS,
        Component: PRDetails,
        title: 'PRDetails'
    },
]
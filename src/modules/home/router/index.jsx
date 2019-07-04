import asyncComponent from './../../../common/asyncComponent';

const Home = asyncComponent(() => import('./../../home'));

export const HomeRouter = [
    {path:"/", exact: true ,name:"Home",component:Home},
]
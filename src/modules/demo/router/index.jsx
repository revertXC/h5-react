import asyncComponent from './../../../common/asyncComponent';

const Demo = asyncComponent(() => import('./../../demo'));

export const DemoRouter = [
    {path:"/", exact: true ,name:"Demo",component:Demo},
]
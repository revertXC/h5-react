import asyncComponent from '../../../common/asyncComponent/index';

const Test1 = asyncComponent(() => import('./../test1'));
const Test2 = asyncComponent(() => import('./../test2'));

export const TestRouter = [
    {path:"/t1" ,name:"Test1",component:Test1},
    {path:"/t2" ,name:"Test2",component:Test2},
]
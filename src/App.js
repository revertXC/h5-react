import React from 'react';
import './App.less';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {DemoRouter} from './modules/demo/router';
import {TestRouter} from './modules/test/router';

function App() {

  const routerDatas = [...DemoRouter, ...TestRouter];

  return (
    <div className="App">
      <BrowserRouter>
          <div>
              {
                  routerDatas && routerDatas.map(item =>
                      <Link key={`link${item.path}`} to={item.path}>{item.name}</Link>
                  )
              }
              {
                  routerDatas && routerDatas.map(item =>
                      <Route key={`RouteStr${item.path}`} exact={item.exact} path={item.path} component={item.component}/>
                  )
              }
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

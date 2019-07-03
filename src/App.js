import React from 'react';
import './App.less';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import {HomeRouter} from './components/home/router';
import {TestRouter} from './components/test/router';


function App() {

  const routerDatas = [...HomeRouter, ...TestRouter];

  return (
    <div className="App">
      <BrowserRouter>
          {
            routerDatas && routerDatas.map(item =>
                <Link key={`link${item.path}`} to={item.path}>{item.name}</Link>
            )
          }
          {
              routerDatas && routerDatas.map(item =>
                  <Route key={`Route${item.path}`} exact={item.exact} path={item.path} component={item.component}/>
              )
          }
      </BrowserRouter>
    </div>
  );
}

export default App;

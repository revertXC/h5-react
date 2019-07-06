import React from 'react';
import './App.less';
import { HashRouter, Route, Link } from 'react-router-dom';
// import {DemoRouter} from './modules/demo/router';
import {HomeRouter} from './modules/home/router';
import {ImgLibRouter} from './modules/imgLib/router';
import {UploadRouter} from './modules/upload/router';

function App() {

  const routerDatas = [...HomeRouter, ...ImgLibRouter, ...UploadRouter];

  return (
    <div className="App">
      <HashRouter>
          <div className="App">
              {
                  routerDatas && routerDatas.map(item =>
                      <Route key={`RouteStr${item.path}`} exact={item.exact} path={item.path} component={item.component}/>
                  )
              }
          </div>
      </HashRouter>
    </div>
  );
}

export default App;

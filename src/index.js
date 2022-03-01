import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { Route,BrowserRouter, Redirect } from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar.js';
import Testpage from './components/Testpage.js'
import Signpage from './components/signpage/Signpage.js';
import Debuggerpage from './components/debuggerpage/Debugger.js';
import Calendar from './components/Calendar/Calendar.js'
import Test2 from './components/Test2.js'

import axios from 'axios';

import {
  RecoilRoot,
} from 'recoil'

axios.post('/ssr/userinfo')
.then( (result) => {
  if(result.data === 'Session expired') {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Route exact path='/'> <Redirect to = 'sign'/> </Route>
          <Route path='/sign'> <Signpage/> </Route>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  else {
    // console.log(result)
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <RecoilRoot>
            <Sidebar userinfo = { result.data } />
            <Route exact path='/'> <Redirect to = 'main'/> </Route>
            <Route exact path='/sign'> <Redirect to = 'main'/> </Route>
            <Route path='/main'> <Testpage/> </Route>
            <Route path='/debugger'> <Debuggerpage/> </Route>
            <Route path='/calendar'> <Calendar/> </Route>
            <Route path='/test2'> <Test2/> </Route>
            <Route exact path='/sign'> <Signpage/> </Route>
          </RecoilRoot>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
})
.catch( console.log )

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Sidebar userinfo = { userinfo } menu = { menu } />
//       <Route exact path='/'> <Redirect to = 'main'/> </Route>
//       <Route path='/main'> <Testpage/> </Route>
//       <Route path='/test1'> <div> 1 </div> </Route>
//       <Route path='/test2'> <div> 2 </div> </Route>
//       <Route path='/test3'> <div> 3 </div> </Route>
//       <Route exact path='/sign'> <Signpage/> </Route>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

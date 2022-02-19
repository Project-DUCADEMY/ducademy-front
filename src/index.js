import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import { Route,BrowserRouter, Redirect } from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar';
import Testpage from './components/Testpage'
import Signpage from './components/signpage/Signpage';

import userinfo from './assets/dummy/userinfo.js'
import menu from './assets/dummy/menu.js'

import axios from 'axios';

axios.post( 
  '/ssr/userinfo', 
  {
  }
)
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
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Sidebar userinfo = { userinfo } menu = { menu } />
          <Route exact path='/'> <Redirect to = 'main'/> </Route>
          <Route exact path='/sign'> <Redirect to = 'main'/> </Route>
          <Route path='/main'> <Testpage/> </Route>
          <Route path='/test1'> <div> 1 </div> </Route>
          <Route path='/test2'> <div> 2 </div> </Route>
          <Route path='/test3'> <div> 3 </div> </Route>
          <Route exact path='/sign'> <Signpage/> </Route>
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
reportWebVitals();

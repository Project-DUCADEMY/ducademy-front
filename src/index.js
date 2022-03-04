import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import AppRouter from './AppRouter.js';

import {
  RecoilRoot,
} from 'recoil'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter/>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);


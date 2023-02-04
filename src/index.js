import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reducer, { initialState } from './reducer';
import { StateProvider } from './components/StateProvider';


ReactDOM.render(
  <React.StrictMode>
   <StateProvider initialState={initialState} reducer={reducer}>
      <App /> 
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
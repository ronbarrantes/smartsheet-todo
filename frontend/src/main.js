import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';


// import reducer from './reducer';
import App from './component/app';
// import thunk from './lib/redux-thunk.js';
// import { persist } from './lib/redux-persist.js';
// import reporter from './lib/redux-reporter';

// const store = createStore(reducer, applyMiddleware(thunk, persist(['student']), reporter));

// let container = document.createElement('div')
// document.body.appendChild(container)

ReactDOM.render(
  // <Provider store={store}>
  <App />
  // </Provider>
  , document.getElementById('root'));
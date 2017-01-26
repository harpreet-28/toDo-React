import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

var Main = require('./components/Main');
//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<Main />, document.querySelector('.container'));

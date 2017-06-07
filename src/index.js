import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import './index.css';
/* import App from './components/App'; */
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router';
import {BrowserRouter} from 'react-router-dom'

import routes from './routes';


const store = createStore(allReducers, applyMiddleware(thunk, promise, createLogger));

ReactDOM.render(<Provider store={store}><Router history={BrowserRouter} routes={routes}/></Provider>,
 document.getElementById('root'));
registerServiceWorker();

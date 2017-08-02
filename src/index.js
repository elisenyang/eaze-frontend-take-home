import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { connect } from 'react-redux';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><MuiThemeProvider><App /></MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();

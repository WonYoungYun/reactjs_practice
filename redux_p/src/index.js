import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Apps';

import {createStore} from 'redux';
import reducers from './reducers';

import {Provider} from 'react-redux';

const store = createStore(reducers);//Store 만들기


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
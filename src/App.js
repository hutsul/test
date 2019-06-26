import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router'

import history from './utils/history';
import store from './utils/store'
import Routes from './routes';

import './styles/index.scss';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes/>
            </Router>
        </Provider>
    );
}

export default App;


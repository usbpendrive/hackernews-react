import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import setGlobalStyles from 'styles/globals';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from 'store';

setGlobalStyles();

const renderApp = () => {
    const initialState = {};
    const store = configureStore(initialState);

    store.dispatch({ type: '@hnReader/@@INIT' });

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root'),
    );

    serviceWorker.unregister();
};


renderApp();

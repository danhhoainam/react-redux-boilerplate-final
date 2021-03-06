import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

// make browser render all elements more consistently
import 'normalize.css/normalize.css';
// application's styles
import './styles/styles.scss';
// datepicker's styles - airbnb react-dates
import 'react-dates/lib/css/_datepicker.css';

import { login, logout } from './actions/auth';

import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user));
        
        // render the main page
        renderApp();

        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});


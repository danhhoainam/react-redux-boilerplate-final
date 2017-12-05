import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from './../components/DashboardPage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// create manual history instead of BrowserRouter history
// they are the same
export const history = createHistory();

// router for all links
// Route for server-side rendering
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;


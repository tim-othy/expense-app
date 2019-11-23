import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';


export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path={"/"} component={LoginPage} exact={true} />
        <Route path={"/dashboard"} component={ExpenseDashboardPage} /> 
        <Route path={"/create"} component={AddExpensePage} />
        <Route path={"/edit/:id"} component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;

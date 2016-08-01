/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute, Redirect  } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import App from './container/App';
import HomePage from './components/home/HomePage';
import SchedulePage from './components/schedule/SchedulePage';
import ManageSchedulePage from './components/schedule/ManageSchedulePage.jsx';
import ReportPage from './components/report/ReportPage';
import SurveyResponsePage from './components/survey/SurveyResponsePage';



import {loadSchedules} from './actions/scheduleActions';
import {loadSurveys} from './actions/surveyActions';
import {loadReports} from './actions/reportActions';

import {loadUsers} from './actions/userActions';

const store = configureStore();
store.dispatch(loadUsers());
store.dispatch(loadSchedules());
store.dispatch(loadSurveys());
store.dispatch(loadReports());

render(
    <Provider store = {store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="schedules" component={SchedulePage} />
                <Route path="schedules/manage" component={ManageSchedulePage} />
                <Route path="report" component={ReportPage} />
            </Route>
            <Route path="surveys" component={SurveyResponsePage} />
        </Router>
    </Provider>, document.getElementById('app')
);

// <Router history={browserHistory} routes={routes} />

/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import App from './container/App';
import HomePage from './components/home/HomePage';
import SchedulePage from './components/schedule/SchedulePage';
import ManageSchedulePage from './components/schedule/ManageSchedulePage.jsx';
import ReportPage from './components/report/ReportPage';
import SurveyPage from './components/survey/SurveyPage';
import ManageSurveyPage from './components/survey/ManageSurveyPage';

import {loadSchedules} from './actions/scheduleActions';


const store = configureStore();
//store.dispatch(loadSchedules());

render(
    <Provider store = {store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage} />
                <Route path="schedules" component={SchedulePage} />
                <Route path="schedules/manage" component={ManageSchedulePage} />
                <Route path="report" component={ReportPage} />
                <Route path="survey" component={ManageSurveyPage} />
            </Route>
            <Route path="/survey/:id" component={SurveyPage} />
        </Router>
    </Provider>, document.getElementById('app')
);

// <Router history={browserHistory} routes={routes} />

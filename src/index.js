/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';
import {loadTemplates} from './actions/templateActions';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import App from './container/App';
import HomePage from './components/home/HomePage';
import SchedulePage from './components/schedule/SchedulePage';
import ReportPage from './components/report/ReportPage';
import TemplatesPage from './components/template/TemplatesPage';
import ManageTemplatePage from './components/template/ManageTemplatePage';
import SurveyResponsePage from './components/survey/SurveyResponsePage';
import SurveyConfirmationPage from './components/survey/SurveyConfirmationPage';



const store = configureStore();
store.dispatch(loadTemplates());

render(
    <Provider store = {store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                    <IndexRoute component={HomePage} />
                    <Route path="schedule" component={SchedulePage} />
                    <Route path="report" component={ReportPage} />
                    <Route path="templates" component={TemplatesPage} />
                </Route>
                <Route path="/survey/:id" component={SurveyResponsePage} />
            <Route path="template/:id" component={ManageTemplatePage} />
            <Route path="surveyConfirmationPage" component={SurveyConfirmationPage} />
        </Router>
    </Provider>, document.getElementById('app')
);

// <Router history={browserHistory} routes={routes} />

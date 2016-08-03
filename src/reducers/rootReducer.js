import { combineReducers } from 'redux';
import schedules from './scheduleReducer';
import reports from './reportReducer';
import surveys from './surveyReducer';
import templates from './templateReducer';
import users from './userReducer';
import surveyResponse from './responseReducer';
import numAjaxRequestsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    schedules,
    reports,
    surveys,
    templates,
    users,
    surveyResponse,
    numAjaxRequestsInProgress
});

export default rootReducer;

import { combineReducers } from 'redux';
import schedules from './scheduleReducer';
import reports from './reportReducer';
import surveys from './surveyReducer';
import templates from './templateReducer';
import numAjaxRequestsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    schedules,
    reports,
    surveys,
    templates,
    numAjaxRequestsInProgress
});

export default rootReducer;
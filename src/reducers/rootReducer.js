import { combineReducers } from 'redux';
import schedules from './scheduleReducer';
import surveys from './surveyReducer';
import templates from './templateReducer';
import numAjaxRequestsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    schedules,
    surveys,
    templates,
    numAjaxRequestsInProgress
});

export default rootReducer;
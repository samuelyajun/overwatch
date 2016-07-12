import { combineReducers } from 'redux';
import schedules from './scheduleReducer';
import surveys from './surveyReducer';
import templates from './templateReducer';
import users from './userReducer';
import numAjaxRequestsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    schedules,
    surveys,
    templates,
    users,
    numAjaxRequestsInProgress
});

export default rootReducer;

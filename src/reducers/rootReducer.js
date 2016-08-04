import { combineReducers } from 'redux';
import schedules from './scheduleReducer';

import scheduleToUpdate from './updateScheduleReducer';
import reports from './reportReducer';
import surveys from './surveyReducer';
import templates from './templateReducer';
import users from './userReducer';
import surveyResponse from './responseReducer';
import numAjaxRequestsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    scheduleToUpdate,
    schedules,
    reports,
    surveys,
    templates,
    users,
    surveyResponse,
    numAjaxRequestsInProgress
});

export default rootReducer;

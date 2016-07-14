import * as types from './actionTypes';
import ScheduleApi from '../api/mockScheduleApi';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadSchedulesSuccess(schedules) {
    return {type: types.LOAD_SCHEDULES_SUCCESS, schedules};
}

export function createScheduleSuccess(schedule) {
   console.log('In createScheduleSuccess');
    return {type: types.CREATE_SCHEDULE_SUCCESS, schedule};
}

export function updateScheduleSuccess(schedule) {
    return {type: types.UPDATE_SCHEDULE_SUCCESS, schedule};
}

export function loadSchedules() {
    return function(dispatch) {
        console.log('In loadSchedules() in scheduleActions');
        return ScheduleApi.getAllSchedules().then((schedules) => {
            dispatch(loadSchedulesSuccess(schedules));
        }).catch((error) => {
            throw(error);
        });
    };
}

export function saveSchedule(schedule) {
  console.log('In scheduleActions');
  return function (dispatch, getState) {
    dispatch(initiateAjaxRequest());
    return ScheduleApi.saveSchedule(schedule).then(schedule => {
      schedule.id ? dispatch(updateScheduleSuccess(schedule)) :
        dispatch(createScheduleSuccess(schedule));
    }).catch(error => {
      dispatch(ajaxRequestError(error));
      throw(error);
    });
  };
}

/*export function loadSchedules() {
    return dispatch => {
        dispatch(initiateAjaxRequest());
        return ScheduleApi.getAllSchedules().then(schedules => {
            dispatch(loadSchedulesSuccess(schedules));
        }).catch(error => {
            throw (error);
        });
    };
}*/

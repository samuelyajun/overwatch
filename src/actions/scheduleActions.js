import * as types from './actionTypes';
import ScheduleApi from '../api/mockScheduleApi';

export function loadSchedulesSuccess(schedules) {
    return {type: types.LOAD_SCHEDULES_SUCCESS, schedules};
}

export function createScheduleSuccess(schedule) {
    return {type: types.CREATE_SCHEDULE_SUCCESS, schedule};
}

export function updateScheduleSuccess(schedule) {
    return {type: types.LOAD_SCHEDULE_SUCCESS, schedule};
}

export function loadSchedules() {
    return function(dispatch) {
        return ScheduleApi.getAllSchedules().then((schedules) => {
            dispatch(loadSchedulesSuccess(schedules));
        }).catch((error) => {
            throw(error);
        });
    };
}

export function saveSchedule(schedule) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return ScheduleApi.saveSchedule(schedule).then(schedule => {
      schedule.id ? dispatch(updateScheduleSuccess(schedule)) :
        dispatch(createScheduleSuccess(schedule));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

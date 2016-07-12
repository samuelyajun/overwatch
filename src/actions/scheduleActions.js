import * as types from './actionTypes';
import ScheduleApi from '../api/mockScheduleApi';

export function loadSchedulesSuccess(schedules) {
    return {type: types.LOAD_SCHEDULES_SUCCESS, schedules};
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

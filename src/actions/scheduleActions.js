import * as types from './actionTypes';
import * as Urls from '../constants/urlConstants';
import ScheduleApi from '../api/mockScheduleApi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadSchedulesSuccess(schedules) {
    return {type: types.LOAD_SCHEDULES_SUCCESS, schedules};
}

export function createScheduleSuccess(schedule) {
    return {type: types.CREATE_SCHEDULE_SUCCESS, schedule};
}

export function updateScheduleSuccess(schedule) {
    return {type: types.UPDATE_SCHEDULE_SUCCESS, schedule};
}

export function loadSchedules() {
    return function(dispatch) {
        return fetch(Urls.BASE_SCHEDULE_URL).then((response) => {
            response.json().then(json => {
                let scheduleArray = Object.assign([], json._embedded.schedules);
                dispatch(loadSchedulesSuccess(scheduleArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function createSchedule(schedule) {
    const request = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(schedule)
    };

    return function (dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch(Urls.BASE_SCHEDULE_URL, request).then((response) => {
            response.json().then((postedSchedule) => {
                dispatch(createScheduleSuccess(postedSchedule));
            });
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });
        // return ScheduleApi.saveSchedule(schedule).then(schedule => {
        //   schedule.id ? dispatch(updateScheduleSuccess(schedule)) :
        //     dispatch(createScheduleSuccess(schedule));
        // }).catch(error => {
        //   dispatch(ajaxRequestError(error));
        //   throw(error);
        // });
    };
}

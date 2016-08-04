import * as types from './actionTypes';
import * as Urls from '../constants/urlConstants';
import ScheduleApi from '../api/mockScheduleApi';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';


export function loadSchedulesSuccess(schedules) {
    return {type: types.LOAD_SCHEDULES_SUCCESS, schedules};
}

export function getScheduleByIdSuccess(schedule) {

    return {type: types.GET_SCHEDULE_BY_ID_SUCCESS, schedule};
}

export function createScheduleSuccess(schedule) {
    return {type: types.CREATE_SCHEDULE_SUCCESS, schedule};
}

export function updateScheduleSuccess(schedule) {
    return {type: types.UPDATE_SCHEDULE_SUCCESS, schedule};
}

export function loadSchedules() {
    return function(dispatch) {
        return fetch(`/schedule/schedules?projection=scheduleDetails`).then((response) => {
            dispatch(initiateAjaxRequest());
            console.log("load schedules", response)
            response.json().then(json => {
                let scheduleArray = Object.assign([], json._embedded.schedules);
                console.log("load schedules", scheduleArray)
                dispatch(loadSchedulesSuccess(scheduleArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function getScheduleById(scheduleId) {
    return function(dispatch) {
       dispatch(initiateAjaxRequest());
        return fetch(`/schedule/schedules/${scheduleId}?projection=scheduleDetails`).then((response) => {
            console.log('Returned response is ' , response);
            response.json().then(json => {
                let schedule = Object.assign({}, json);
                dispatch(getScheduleByIdSuccess(schedule));
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
                dispatch(loadSchedules());

            });
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });
    };
}

export function updateSchedule(schedule) {
   console.log("schedule action update request schedule:",schedule);
    const request = {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(schedule)
    };

    return function (dispatch) {
      console.log("http update request:",request.body);
        dispatch(initiateAjaxRequest());
        return fetch('/schedule/schedules/' + schedule.id, request).then((response) => {
            response.json().then((updatededSchedule) => {
              console.log("response from server:",updatededSchedule);
                dispatch(updateScheduleSuccess(updatededSchedule));
            });
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });

    };
}

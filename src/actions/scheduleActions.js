import * as types from './actionTypes';
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
        return fetch(`/schedule/schedules`).then((response) => {
            response.json().then(json => {
                let scheduleArray = Object.assign([], json._embedded.schedules);
                dispatch(loadSchedulesSuccess(scheduleArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function getScheduleById(id) {
   console.log('id in getScheduleById() is ', id);
    return function(dispatch) {
       console.log('between 2 returns');
        return fetch(`/schedule/schedules/${id}`).then((response) => {
            console.log('Returned response is ' , response);
            response.json().then(json => {
                let schedule = Object.assign({}, json);
                console.log('Retrieved schedule ', schedule);
                dispatch(getScheduleByIdSuccess(schedule));
            });
        }).catch((error) => {
            console.log('getScheduleById() error is ', error);
            throw(error);
        });
    };
  }

   /*debugger;
   return dispatch => {
   fetch(`/schedule/schedules`, (response) => {
     if(response.status == 200){
       dispatch(getScheduleByIdSuccess(response.json)); // Use a normal function to set the received state
     }else {
       console.log('Error occured');
     }
   })
 }*/



    /*return function(dispatch) {
        return fetch(`/schedule/schedules/${id}`).then((response) => {
            console.log('Returned response is ' , response);
            //response.json().then(json => {
            //    let schedule = Object.assign({}, json);
            //    console.log('Retrieved schedule ', schedule);
            //    dispatch(getScheduleByIdSuccess(schedule));
            });
        }).catch((error) => {
            console.log('getScheduleById() error is ', error);
            throw(error);
        });
    };*/


    /*return function(dispatch) {
        return fetch(`/schedule/schedules/${id}`, (response) => {
            console.log('Returned response is ' , response);
            if(response.status == 200){
              dispatch(getScheduleByIdSuccess(response.json)); // Use a normal function to set the received state
            }
         })
     };*/



export function saveSchedule(schedule) {
  console.log('Schedule in saveSchedule() in scheduleActions ', schedule);
  return function (dispatch) {
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

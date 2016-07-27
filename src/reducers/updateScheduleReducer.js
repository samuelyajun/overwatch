import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scheduleReducer(state = initialState.schedules, action) {

    console.log('In updatescheduleReducer');
    switch (action.type) {

        case types.GET_SCHEDULE_BY_ID_SUCCESS:
        console.log('In GET_SCHEDULE_BY_ID_SUCCESS in scheduleReducer()', action.schedule);
        return action.schedule;

        default:
        return state;
    }
}

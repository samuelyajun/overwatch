import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scheduleReducer(state = initialState.scheduleToUpdate, action) {
    switch (action.type) {
        case types.GET_SCHEDULE_BY_ID_SUCCESS:
            return action.schedule;

        default:
            return state;
    }
}

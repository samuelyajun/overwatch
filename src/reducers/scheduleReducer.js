import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function scheduleReducer(state = initialState.schedules, action) {
    switch(action.type) {
        case actionTypes.LOAD_SCHEDULES_SUCCESS:
            return action.schedules;
        default:
            return state;
    }
}
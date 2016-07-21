import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function scheduleReducer(state = initialState.schedules, action) {
    switch (action.type) {

        case types.LOAD_SCHEDULES_SUCCESS:
        return action.schedules;

        case types.GET_SCHEDULE_BY_ID_SUCCESS:
        console.log('In GET_SCHEDULE_BY_ID_SUCCESS in scheduleReducer()');
        return action.schedule;

        case types.CREATE_SCHEDULE_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.schedule)
        ];

        case types.UPDATE_SCHEDULE_SUCCESS:
        return [
          ...state.filter(schedule => schedule.id !== action.schedule.id),
          Object.assign({}, action.schedule)
        ];

        default:
        return state;
    }
}

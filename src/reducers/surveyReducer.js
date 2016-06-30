import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.surveys, action) {
    switch(action.type) {
        case actionTypes.LOAD_SURVEYS_SUCCESS:
            return action.surveys;
        default:
            return state;
    }
}
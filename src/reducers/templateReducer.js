import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function templateReducer(state = initialState.templates, action) {
    switch(action.type) {
        case actionTypes.LOAD_TEMPLATES_SUCCESS:
            return action.templates;
        default:
            return state;
    }
}
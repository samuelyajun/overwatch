import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function surveyReducer(state = initialState.surveys, action) {
    switch(action.type) {

        case actionTypes.LOAD_SURVEYS_SUCCESS:
            return action.surveys;

        case actionTypes.CREATE_SURVEY_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.survey)
            ];

        case actionTypes.SAVE_SURVEY_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.survey)
            ];
        default:
            return state;
    }
}
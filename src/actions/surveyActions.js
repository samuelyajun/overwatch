import * as types from './actionTypes';
import surveyApi from '../api/mockSurveyApi';
import {initiateAjaxRequest, ajaxRequestError} from './ajaxStatusActions';

export function loadSurveysSuccess(surveys) {
    return { type: types.LOAD_SURVEYS_SUCCESS, surveys};
}

export function loadSurveys() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return surveyApi.getAllSurveys().then(surveys => {
            dispatch(loadSurveysSuccess(surveys));
        }).catch(error => {
            throw(error);
        });
    };
}

//export function saveSurvey(survey) {
//    return function(dispatch, getState) {
//        dispatch(initiateAjaxRequest());
//        return surveyApi.saveSurvey(survey).then(savedSurvey => {
//            survey.id ? dispatch(updateSurveySuccess(savedSurvey)) :
//             dispatch(createSurveySuccess(savedSurvey));
//        }).catch(error => {
//            dispatch(ajaxRequestError(error));
//            throw(error);
//        });
//    };
//}
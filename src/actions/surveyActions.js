import * as types from './actionTypes';
import {initiateAjaxRequest, ajaxRequestError} from './ajaxStatusActions';

export function loadSurveysSuccess(surveys) {
    return { type: types.LOAD_SURVEYS_SUCCESS, surveys};
}

/*export function createSurveysSuccess(survey) {
    return { type: types.CREATE_SURVEY_SUCCESS, survey};
}*/

/*
export function createSurveySuccess(survey) {
    return {
        type: types.CREATE_SURVEY_SUCCESS,
        survey
    };
}
*/

export function loadSurveys() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch(`survey/surveys?projection=inlineSurveyDetail`).then((response) => {
            response.json().then(surveyResponseJson => {
                console.log(surveyResponseJson);
                let surveyArray = Object.assign([], surveyResponseJson._embedded.surveys);
                dispatch(loadSurveysSuccess(surveyArray));
            });
        }).catch((error) => {
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
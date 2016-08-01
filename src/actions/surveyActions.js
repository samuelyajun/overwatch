import * as types from './actionTypes';
import * as Urls from '../constants/urlConstants';
import {initiateAjaxRequest, ajaxRequestError} from './ajaxStatusActions';

export function loadSurveysSuccess(surveys) {
    return { type: types.LOAD_SURVEYS_SUCCESS, surveys};
}

export function saveSurveySuccess(survey) {
    return { type: types.SAVE_SURVEY_SUCCESS, survey};
}


export function loadSurveys() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch(`survey/surveys?projection=inlineSurveyDetail`).then((response) => {
            response.json().then(surveyResponseJson => {
                let surveyArray = Object.assign([], surveyResponseJson._embedded.surveys);
                dispatch(loadSurveysSuccess(surveyArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function saveSurvey(surveyResponse) {
    console.log("SaveSurvey reached");

    const request = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(surveyResponse)
    };
    console.log(surveyResponse);

    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch(Urls.SAVE_SURVEY_URL, request).then((response) => {
            response.json().then((postedSurveyResponse) => {
                dispatch(saveSurveySuccess(postedSurveyResponse));
            });
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });
    }
}

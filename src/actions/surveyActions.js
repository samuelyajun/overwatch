import * as types from './actionTypes';
import {initiateAjaxRequest, ajaxRequestError} from './ajaxStatusActions';

export function loadSurveysSuccess(surveys) {
    return { type: types.LOAD_SURVEYS_SUCCESS, surveys};
}

export function saveSurveyResponseSuccess(survey) {
    return { type: types.SAVE_SURVEY_RESPONSE_SUCCESS, survey};
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


export function saveSurveyResponse(survey) {
    return (dispatch, getState) => {
        dispatch(initiateAjaxRequest());
        return fetch(saveSurveyResponseSuccess, {
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(survey)
        }).then(function(res){
            console.log(res);
            dispatch(saveSurveyResponseSuccess(survey));
        }).catch(function(res){ console.log(res)});
    };
}

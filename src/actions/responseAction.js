import * as types from './actionTypes';
import {initiateAjaxRequest, ajaxRequestError} from './ajaxStatusActions';

export function saveSurveyResponseSuccess(surveyResponse) {
    return { type: types.SAVE_SURVEY_RESPONSE_SUCCESS, surveyResponse};
}

export function saveSurveyResponse(surveyResponse) {
    console.log("SaveSurvey reached");
    console.log("SurveyResponse in ACTION", surveyResponse);
    const request = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(surveyResponse)
    };
    return (dispatch) => {
        console.log(request);
        dispatch(initiateAjaxRequest());
        return fetch(`response/surveyResponses`, request).then((response) => {
            response.json().then((postedSurveyResponse) => {
                dispatch(saveSurveyResponseSuccess(postedSurveyResponse));
                console.log(postedSurveyResponse);
            });
        }).catch((error) => {
            dispatch(ajaxRequestError(error));
            throw(error);
        });
    }
}
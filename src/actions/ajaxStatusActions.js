import * as actionTypes from './actionTypes';

export function initiateAjaxRequest() {
  console.log('In initiateAjaxRequest in ajaxStatusActions');
    return {
        type: actionTypes.INITIATE_AJAX_REQUEST
    };
}

export function ajaxRequestError() {
    return {
        type: actionTypes.AJAX_REQUEST_ERROR
    };
}

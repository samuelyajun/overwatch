import * as types from './actionTypes';

import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadReportsSuccess(reports) {
    return {type: types.LOAD_REPORTS_SUCCESS, reports};
}

export function generateReportSuccess(report) {
    return {type: types.GENERATE_REPORT_SUCCESS, report};
}

export function loadReports() {
    return function(dispatch) {
        return fetch(`/report/reports`).then((response) => {
            response.json().then(json => {
                let reportArray = Object.assign([], json._embedded.reports);
                dispatch(loadReportsSuccess(reportArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}
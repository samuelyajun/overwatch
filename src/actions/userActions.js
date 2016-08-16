import * as types from './actionTypes';
// import UserApi from '../api/mockUserApi';
import HateoasUtils from '../utils/hateoasUtils';
import { initiateAjaxRequest, ajaxRequestError } from './ajaxStatusActions';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
    return function(dispatch) {
        dispatch(initiateAjaxRequest());
        return fetch('/schedule/users/?size=1000').then((response) => {
            response.json().then((json) => {
                let userArray = HateoasUtils.getObjects(json);
                dispatch(loadUsersSuccess(userArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

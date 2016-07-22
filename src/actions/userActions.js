import * as types from './actionTypes';
import UserApi from '../api/mockUserApi';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
    return function(dispatch) {
        return UserApi.getAllUsers().then((users) => {
            dispatch(loadUsersSuccess(users));
        }).catch((error) => {
            throw(error);
        });
    };
}

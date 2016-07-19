import * as types from './actionTypes';
// import UserApi from '../api/mockUserApi';
import ObjectParser from '../utils/objectParser';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
    return function(dispatch) {
        return fetch('/schedule/users').then((response) => {
            response.json().then((json) => {
                let userArray = ObjectParser.getObjects(json);
                console.log(userArray);
                dispatch(loadUsersSuccess(userArray));
            });
        }).catch((error) => {
            throw(error);
        });
    };
}

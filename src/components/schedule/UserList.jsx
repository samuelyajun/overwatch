import React, {PropTypes} from 'react';

const UserList = (users) => {
    return (
        <div>
            {
                users.map((user) => {
                    return (
                        <UserListRow />
                    );
                })
            }
        </div>
    );
}

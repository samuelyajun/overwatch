import React, {PropTypes} from 'react';
import ScrollableCheckboxGroup from '../common/ScrollableCheckboxGroup.jsx';

const UserCheckboxGroup = ({users, onClick}) => {

    let formattedUsers = [];
    users.forEach((user) => {
        formattedUsers.push({id: user.id, name: user.firstName + ' ' + user.lastName});
    });

    return(
        <ScrollableCheckboxGroup
            options={formattedUsers}
            onClick={onClick}
        />
    );
};

UserCheckboxGroup.propTypes = {
    users: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default UserCheckboxGroup;

import React, {PropTypes} from 'react';
import UserCheckboxGroup from './UserCheckboxGroup.jsx';
import RespondentList from './RespondentList.jsx';

const UserForm = ({users, respondents, updateUsers, updateRole}) => {

    const schedulePanel = {
        backgroundColor:'#999999',
        borderColor: '#999999',
        color: '#ffffff'
    };

    return (
    <div>
        <div className="panel-heading" style={schedulePanel}><h4>2. Select Recipients</h4></div>
                <div className="panel-body">
                    <div className="col-md-3">
                        <UserCheckboxGroup users={users}
                            onClick={updateUsers}
                        />
                    </div>
                    <div className="col-md-9">
                        <RespondentList
                            respondents={respondents}
                            onChange={updateRole}
                        />
                    </div>
                </div>
                <div>{updateUsers}</div>
    </div>
    );

};

UserForm.propTypes = {
  users: PropTypes.array,
  respondents: PropTypes.array,
  updateUsers: PropTypes.func,
  updateRole: PropTypes.func
};

export default UserForm;

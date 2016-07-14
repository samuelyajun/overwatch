import React from 'react';
import * as scheduleActions from '../../actions/scheduleActions';

const scheduleOuterDiv = {
    marginTop: '75px'
};

class ManageSchedulePage extends React.Component {

    render() {
        return (
            <div style={scheduleOuterDiv}>
                <h1>List of Schedules</h1>
                {scheduleActions.getAllSchedules}
            </div>
        );
    }
}

export default ManageSchedulePage;

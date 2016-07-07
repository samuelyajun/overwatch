import React from 'react';
import Header from '../common/Header';
import ScheduleForm from "./ScheduleForm.jsx";

const scheduleOuterDivStyle = {
    marginTop: '75px'
};

class SchedulePage extends React.Component {
    render() {
        return (
            <div style={scheduleOuterDivStyle}>
                <h1>Schedule Page</h1>
                <ScheduleForm />
            </div>
        );
    }
}

export default SchedulePage;

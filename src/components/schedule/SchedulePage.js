import React from 'react';
import Header from '../common/Header';
import ScheduleForm from './ScheduleForm.jsx';

const scheduleOuterDivStyle = {
    marginTop: '75px',
    marginBottom:'50px'
};

class SchedulePage extends React.Component {
    render() {
        return (
            <div className="container" style={scheduleOuterDivStyle}>
                <h1>Schedule Survey</h1>
                <ScheduleForm />
            </div>
        );
    }
}

export default SchedulePage;

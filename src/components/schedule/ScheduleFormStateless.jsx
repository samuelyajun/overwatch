import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../common/Button.jsx';

const ScheduleFormStateless = ({startDate, everything }) => {
	console.log("everything",everything);
    return (
        <div>
            <h3>Schedule to update:</h3> 
            <p>start date: {startDate}</p>
            <p>id: {everything.id }</p>
            <p>frequency: {everything.frequency }</p>
            <p>templateName: {everything.templateName }</p>
        </div>
    );
};

ScheduleFormStateless.propTypes = {
};

export default ScheduleFormStateless;
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../common/Button.jsx';

const ScheduleFormStatless = ({startDate }) => {
	console.log("date",startDate);
    return (
        <div>
            <h1>Schedule to update start date: {startDate}</h1>
        </div>
    );
};

ScheduleFormStatless.propTypes = {
};

export default ScheduleFormStatless;
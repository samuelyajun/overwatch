import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../common/Button.jsx';

const ScheduleFormStateless = ({startDate }) => {
	console.log("date",startDate);
    return (
        <div>
            <h1>Schedule to update start date: {startDate}</h1>
        </div>
    );
};

ScheduleFormStateless.propTypes = {
    startDate: PropTypes.object
};

export default ScheduleFormStateless;
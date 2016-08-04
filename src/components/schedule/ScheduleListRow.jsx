import React, {PropTypes} from 'react';
import { browserHistory, Route, Link } from 'react-router';
import Button from '../common/Button.jsx';


const ScheduleListRow = ({schedule, onUpdate}) => {

    let submitButtonClass = 'btn btn-default';
    let submitButtonType = 'Update';

    let updateButtonStyle = {
        textAlign: 'center'
    };

    let alignMiddleStyle = {
        verticalAlign: 'middle'
    };

    return (
        <tr>
            <td style = {alignMiddleStyle} input type = "submit" name = "submitButton" value = {schedule} className={submitButtonClass} onClick={onUpdate}> Update </td>
            <td style = {alignMiddleStyle}>{schedule.templateName}</td>
            <td style = {alignMiddleStyle}>{schedule.client}</td>
            <td style = {alignMiddleStyle}>{schedule.project}</td>
            <td style = {alignMiddleStyle}>{schedule.frequency}</td>
            <td style = {alignMiddleStyle}>{schedule.startDate}</td>
            <td style = {alignMiddleStyle}>{schedule.endDate}</td>
        </tr>
    );
};

ScheduleListRow.propTypes = {
    schedule: PropTypes.object.isRequired
};

export default ScheduleListRow;
//<td style = {alignMiddleStyle} input type = "submit" name = "submitButton" value = {schedule} className={submitButtonClass} onClick={onUpdate}> Update </td>
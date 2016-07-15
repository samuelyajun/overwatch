import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Button from '../common/Button.jsx';

const ScheduleListRow = ({schedule}) => {

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
            <td style = {updateButtonStyle} >
                <Button label = {submitButtonType} buttonClassName = {submitButtonClass} type='button'/>
            </td>
            <td style = {alignMiddleStyle}>{schedule.survey}</td>
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

import React, {PropTypes} from 'react';
import { browserHistory, Route, Link } from 'react-router';
import Button from '../common/Button.jsx';


const ScheduleListRow = ({schedule, onUpdate}) => {


    let submitButtonClass = 'btn';

    let btnUpdate = {
        textAlign: 'center',
        color: '#ffffff',
        background: '#999999'
    };

    let alignMiddleStyle = {
        verticalAlign: 'middle'
    };

    return (
        <tr>
            <td style = {alignMiddleStyle}>{schedule.templateName}</td>
            <td style = {alignMiddleStyle}>{schedule.client}</td>
            <td style = {alignMiddleStyle}>{schedule.project}</td>
            <td style = {alignMiddleStyle}>{schedule.frequency}</td>
            <td style = {alignMiddleStyle}>{schedule.startDate}</td>
            <td style = {alignMiddleStyle}>{schedule.endDate}</td>
            <td style = {alignMiddleStyle}> 
                <Button type={'button'} buttonClassName={submitButtonClass} style = {btnUpdate} onClick={onUpdate} label={'Update'}/> 
            </td>
        </tr>
    );
};

ScheduleListRow.propTypes = {
    schedule: PropTypes.object.isRequired,
    onUpdate: PropTypes.func
};

export default ScheduleListRow;

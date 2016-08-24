import React, {PropTypes} from 'react';
import { browserHistory, Route, Link } from 'react-router';
import Button from '../common/Button.jsx';


const ScheduleListRow = ({schedule, onUpdate}) => {

(function(){console.log("XXXXXXXXXXXXXXXXXXXXXXXXX",schedule.id)})()
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
            <td style = {alignMiddleStyle}>{schedule.clientName}</td>
            <td style = {alignMiddleStyle}>{schedule.project}</td>
            <td style = {alignMiddleStyle}>{schedule.frequency}</td>
            <td style = {alignMiddleStyle}>{schedule.startDate}</td>
            <td style = {alignMiddleStyle}>{schedule.endDate}</td>
            <td style = {alignMiddleStyle}> 
                <Button type={'button'} value={schedule.id} buttonClassName={submitButtonClass} style = {btnUpdate} onClick={onUpdate} label={'Update'}/>
            </td>
        </tr>
    );
};

ScheduleListRow.propTypes = {
    schedule: PropTypes.object,
    onUpdate: PropTypes.func
};

export default ScheduleListRow;

// {/*<td style = {alignMiddleStyle}> <button value = {submitButtonType} className={submitButtonClass} onClick={onUpdate}> Update</button> </td>*/}

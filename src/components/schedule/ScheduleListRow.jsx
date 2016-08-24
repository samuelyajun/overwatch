import React, {PropTypes} from 'react';
import { browserHistory, Route, Link } from 'react-router';
import Button from '../common/Button.jsx';


const ScheduleListRow = ({templateName, clientName, project, frequency, startDate, endDate, onUpdate}) => {


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
            <td style = {alignMiddleStyle}>{templateName}</td>
            <td style = {alignMiddleStyle}>{clientName}</td>
            <td style = {alignMiddleStyle}>{project}</td>
            <td style = {alignMiddleStyle}>{frequency}</td>
            <td style = {alignMiddleStyle}>{startDate}</td>
            <td style = {alignMiddleStyle}>{endDate}</td>
            <td style = {alignMiddleStyle}> 
                <Button type={'button'} buttonClassName={submitButtonClass} style = {btnUpdate} onClick={onUpdate} label={'Update'}/>
            </td>
        </tr>
    );
};

ScheduleListRow.propTypes = {
    templateName: PropTypes.string.isRequired,
    clientName: PropTypes.string,
    project: PropTypes.string,
    frequency: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    onUpdate: PropTypes.func
};

export default ScheduleListRow;

// {/*<td style = {alignMiddleStyle}> <button value = {submitButtonType} className={submitButtonClass} onClick={onUpdate}> Update</button> </td>*/}

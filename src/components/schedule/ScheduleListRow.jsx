import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Button from '../common/Button.jsx';

const ScheduleListRow = ({schedule}) => {

    let submitButtonClass = 'btn btn-default';
    let submitButtonType = 'Update';



    return (
        <tr>
            <td>
                <Button type = {submitButtonType} buttonClassName = {submitButtonClass}/>
            </td>
            <td>{schedule.survey}</td>
            <td>{schedule.client}</td>
            <td>{schedule.project}</td>
            <td>{schedule.frequency}</td>
            <td>{schedule.startDate}</td>
            <td>{schedule.endDate}</td>
        </tr>
    );
};

ScheduleListRow.propTypes = {
    schedule: PropTypes.object.isRequired
};

export default ScheduleListRow;

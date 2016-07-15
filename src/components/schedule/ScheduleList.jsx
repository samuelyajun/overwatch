import React, {PropTypes} from 'react';
import ScheduleListRow from './ScheduleListRow.jsx';

const ScheduleList = ({schedules}) => {
    return (
        <table className = "table table-hover">
            <thead>
            <tr>
                <th></th>
                <th>Survey Type</th>
                <th>Client</th>
                <th>Project</th>
                <th>Frequency</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
            </thead>
            <tbody>
                {
                    schedules.map(schedule =>
                        <ScheduleListRow key = {schedule.id} schedule={schedule}/>
                    )
                }
            </tbody>
        </table>
    );
};

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired
};

export default ScheduleList;

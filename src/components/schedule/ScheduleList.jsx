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
                    schedules.map(schedule => {
                        return (
                            <ScheduleListRow key={schedule.id} schedule={cleanSchedules(schedule)}/>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

function cleanSchedules(schedule){
    console.log(schedule);
    let newScheduleFrequency = schedule.frequency.toLowerCase().replace("_", " ");
    //regex changes the first letter of each word to upper case
    newScheduleFrequency = newScheduleFrequency.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
    schedule.frequency = newScheduleFrequency;
    return schedule;
}

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired
};

export default ScheduleList;

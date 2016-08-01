import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScheduleListRow from './ScheduleListRow.jsx';

const ScheduleList = ({schedules, onUpdate}) => {
    
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
                            <ScheduleListRow key={schedule.id} schedule={schedule} onUpdate={onUpdate}/>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

function cleanSchedules(schedule){
    let clientAttribute = "";
    let projectAttribute = "";
    let projectAttributes = schedule.respondents[0].allowedAttributes;
    for (let attribute of projectAttributes) {
        if(attribute.attributeTypes.name === "Client"){
            clientAttribute = attribute.attributeValue;
        }
        if(attribute.attributeTypes.name === "Project"){
            projectAttribute = attribute.attributeValue;
        }
    }
    let newScheduleFrequency = schedule.frequency.toLowerCase().replace("_", " ");
    //regex changes the first letter of each word to upper case
    newScheduleFrequency = newScheduleFrequency.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
   // schedule.frequency = newScheduleFrequency;
    //schedule.client = clientAttribute;
    //schedule.project = projectAttribute;
    return schedule;
}

ScheduleList.propTypes = {
    schedules: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        schedules: state.schedules
    };
}

export default connect(mapStateToProps, null)(ScheduleList);

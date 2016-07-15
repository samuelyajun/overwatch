import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
import ScheduleList from './ScheduleList.jsx';

const scheduleOuterDiv = {
    marginTop: '75px'
};

class ManageSchedulePage extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    scheduleRow(schedule, index){
        return (<div> key={index}>{schedule.survey}</div>);
    }

    render() {
        //const {schedules} = this.props;

        const schedules = [
            {
                id: '1',
                survey: 'End of Sprint',
                client: 'Catalyst',
                project: 'Overwatch',
                frequency: 'One Week',
                startDate: '01/01/2016',
                endDate: '',
                days: ['MONDAY', 'THURSDAY']
            },
            {
                id: '2',
                survey: 'End of Sprint',
                client: 'Catalyst',
                project: 'Talent Review',
                frequency: 'Three Weeks',
                startDate: '01/01/2016',
                endDate: '',
                days: ['SUNDAY']
            },
            {
                id: '3',
                survey: 'End of Sprint',
                client: 'Catalyst',
                project: 'Android Tri-Met',
                frequency: 'One Time',
                startDate: '01/01/2016',
                endDate: '',
                days: ['WEDNESDAY']
            }
        ];

        return (
            <div style={scheduleOuterDiv}>
                <h1>List of Schedules</h1>
                <ScheduleList schedules={schedules}/>
            </div>
        );
    }
}

ManageSchedulePage.propTypes = {
    schedules: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        schedules: state.schedules
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedulePage);

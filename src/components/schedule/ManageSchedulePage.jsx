import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
import ScheduleList from './ScheduleList.jsx';
import UpdateSchedule from './UpdateSchedule.jsx'
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';


const scheduleOuterDiv = {
    marginTop: '75px'
};

class ManageSchedulePage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
           schedule: Object.assign({}, props.schedule)
        };

        this.onClickUpdate = this.onClickUpdate.bind(this);
        this.updateScheduleState = this.updateScheduleState.bind(this);
    }

  updateScheduleState(event) {
    const field = event.target.name;
    let schedule = this.state.schedule;
    schedule[field] = event.target.value;
    return this.setState({schedule: schedule});
  }

  onClickUpdate(event) {
    event.persist();
    console.log('event.target.name');
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);

    browserHistory.push('/schedules/update/' + event.currentTarget.value.id);
  }


  scheduleRow(schedule, index){
      return (<div> key={index}>{schedule.survey}</div>);
  }

    render() {
        const schedules = this.props.schedules;

        let alignCenterStyle = {
            textAlign: 'center'

        };
        return (
            <div style={scheduleOuterDiv}>
                <h1 style={alignCenterStyle}>List of Schedules</h1><br></br><br></br>
                <ScheduleList schedules={schedules}
                              onUpdate={this.onClickUpdate}/>
            </div>
        );
    }
}

ManageSchedulePage.propTypes = {
    schedules: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Pulling in the React Router context, so router is available via this.context.router
ManageSchedulePage.contextTypes = {
    router: PropTypes.object.isRequired
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

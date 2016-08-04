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

const alignCenterStyle = {
    textAlign: 'center'
};

class ManageSchedulePage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.onClickUpdate = this.onClickUpdate.bind(this);
    }

    onClickUpdate(event) {
        event.persist();
        browserHistory.push('/schedules/update/' + event.currentTarget.value.id);
    }


    scheduleRow(schedule, index){
      return (<div> key={index}>{schedule.templateURI}</div>);
    }

    render() {
        const {schedules} = this.props;
        return (
            <div className="container" style={scheduleOuterDiv}>
                <h1 style={alignCenterStyle}>List of Schedules</h1><br></br><br></br>
                <ScheduleList schedules = {schedules} onUpdate={this.onClickUpdate}/>
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

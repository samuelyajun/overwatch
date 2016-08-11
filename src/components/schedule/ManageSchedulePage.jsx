import React, {PropTypes} from 'react';
import ScheduleList from './ScheduleList.jsx';
import UpdateSchedule from './UpdateSchedule.jsx';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';
import UserCheckboxGroup from './UserCheckboxGroup.jsx';
import RespondentList from './RespondentList.jsx';
import UserForm from './UserSelection.jsx';
import SurveyScheduleDate from './SurveyScheduleDate.jsx';
import AttributesComponent from './AttributesComponent.jsx';
import Button from '../common/Button.jsx';
//redux imports
import * as userActions from '../../actions/userActions';
import * as scheduleActions from '../../actions/scheduleActions';
import * as surveyActions from '../../actions/surveyActions';
import * as templateActions from '../../actions/templateActions';
import toastr from 'toastr';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ScheduleUtils from '../../utils/scheduleUtils';


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

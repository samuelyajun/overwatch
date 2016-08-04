import React from 'react';
import Header from '../common/Header';
import UpdateScheduleForm from "./UpdateScheduleForm.jsx";
import * as scheduleActions from '../../actions/scheduleActions';
import { bindActionCreators } from 'redux';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';

import HateoasUtils from '../../utils/hateoasUtils';
import ScheduleUtils from '../../utils/scheduleUtils';
import ScheduleForm from './ScheduleFormStateless.jsx';
import {connect} from 'react-redux';

const scheduleOuterDivStyle = {
    marginTop: '75px'
};

class UpdateSchedule extends React.Component {
  constructor(props, context) {
      super(props, context);
  }

  componentWillMount() {
    this.props.actions.getScheduleById(this.props.params.id);
  }

render() {
        const {schedule} = this.props;
          return (
            <div>
              {(schedule)?
                <div style={scheduleOuterDivStyle}>
                     <h1>Update schedule</h1>
                     <ScheduleForm startDate={this.props.schedule.startDate} everything={this.props.schedule} />
                 </div>:
                  <div style={scheduleOuterDivStyle}>
                    <h1>Update schedule</h1>
                    <p>Searching for schedule...</p>
                  </div>
              }                 
           </div>
           );
        } 
}

function mapStateToProps(state, ownProps) {

  const scheduleId = ownProps.params.id;   // from the path `/schedules/:id

  return {
     schedule: state.scheduleToUpdate,
     scheduleId: scheduleId
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSchedule);

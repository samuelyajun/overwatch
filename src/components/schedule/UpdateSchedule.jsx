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

  // componentWillMount() {
  //    this.props.actions.getScheduleById(this.props.scheduleId);
  // }

render() {
        console.log("PROPS SCHEDULE IN UPDate schedule Page", this.props.schedule);
        const {schedule} = this.props;
          return (
            <div>
              {(schedule)?
                <div style={scheduleOuterDivStyle}>
                     <h1>Update schedule</h1>
                     <ScheduleForm />
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

function getScheduleById(schedules, id) {
  const schedule = schedules.filter(schedule => schedule.id == id);
 // console.log('schedule.length is ' , schedule.length);
  //console.log('Updating Schedule ...' , schedule[0]);
  if (schedule.length) return schedule[0]; //since filter returns an array, have to grab the first.
  return null;
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

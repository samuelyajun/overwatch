import React from 'react';
import Header from '../common/Header';
import UpdateScheduleForm from "./UpdateScheduleForm.jsx";
import * as scheduleActions from '../../actions/scheduleActions';
import { bindActionCreators } from 'redux';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';

import HateoasUtils from '../../utils/hateoasUtils';
import ScheduleUtils from '../../utils/scheduleUtils';


import {connect} from 'react-redux';

const scheduleOuterDivStyle = {
    marginTop: '75px'
};

class UpdateSchedule extends React.Component {

  constructor(props, context) {
      super(props, context);
  }

    render() {
            const {schedule} = this.props;
            console.log("schedule in UpdateSchedule", schedule);
            console.log("schedule.user ", schedule.user);
            return (
              <div>
                   <div style={scheduleOuterDivStyle}>
                       <h1>Update schedule</h1>
                       <UpdateScheduleForm schedule={schedule}/>
                   </div>
            </div>
          );
    }
  }

    function getScheduleById(schedules, id) {
      const schedule = schedules.filter(schedule => schedule.id == id);
      console.log('schedule.length is ' , schedule.length);
      console.log('Updating Schedule ...' , schedule[0]);
      if (schedule.length) return schedule[0]; //since filter returns an array, have to grab the first.
      return null;
    }


    function mapStateToProps(state, ownProps) {

      const scheduleId = ownProps.params.id;   // from the path `/schedules/:id

    let schedule = {
         id: '',
         survey: '',
         frequency: '',
         startDate: '',
         endDate: '',
         days: [],
         respondents: []
      }

      if(scheduleId && state.schedules.length > 0) {
             schedule = getScheduleById(state.schedules, scheduleId);
             console.log('Looked up schedule by scheduleId ', schedule);
         }

      return {
        schedule: schedule,
        schedules: state.schedules
      };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(scheduleActions, dispatch)
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(UpdateSchedule);

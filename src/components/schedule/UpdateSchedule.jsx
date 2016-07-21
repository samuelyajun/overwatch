import React from 'react';
import Header from '../common/Header';
import UpdateScheduleForm from "./UpdateScheduleForm.jsx";
import * as scheduleActions from '../../actions/scheduleActions';
import { bindActionCreators } from 'redux';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';

import {connect} from 'react-redux';

const scheduleOuterDivStyle = {
    marginTop: '75px'
};

class UpdateSchedule extends React.Component {

  constructor(props, context) {
      super(props, context);

      this.state = {
        //schedule: Object.assign({}, this.props.schedule)
        schedule: Object.assign({}, this.props.actions.getScheduleById(this.props.scheduleId))
      };

    }

    render() {
        return (
            <div style={scheduleOuterDivStyle}>
                <h1>Update schedule</h1>
                <UpdateScheduleForm schedule={this.state.schedule}/>
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

      console.log('State.schedules length' , state.schedules.length);
      console.log('ownprops is ' , ownProps);
      const scheduleId = ownProps.params.id;   // from the path `/schedules/:id`
      console.log('scheduleId is ', ownProps.params.id);


      let schedule = {
          id: '',
          username: '',
          survey: '',
          frequency: '',
          startDate: '',
          endDate: '',
          days: [],
          respondents: [
               {
                 "allowedAttributes": [
                   {
                     "value": "",
                     "attributeTypes": {
                     "name": ""
                     }
                   }
                 ],
                 "user": {
                   "email": "",
                   "firstName": "",
                   "lastName": ""
                 }
               }
             ]
      };      

      return {
        schedule: schedule,
        scheduleId: scheduleId,
        schedules: state.schedules
      };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(scheduleActions, dispatch)
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(UpdateSchedule);

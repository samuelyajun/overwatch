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
      console.log('this.props.scheduleId is ', this.props.scheduleId);
      console.log('this.props.schedule is ', this.props.schedule);
      console.log('in the constructor. this.props is ', this.props);

      //this.props.schedule = Object.assign({}, this.props.actions.getScheduleById(this.props.scheduleId));
      //this.state.schedule = this.props.schedule;
      //this.state.schedule = Object.assign({}, this.props.actions.getScheduleById(this.props.scheduleId));
      /*let schedule = {
           id: '',
           survey: '',
           frequency: '',
           startDate: '',
           endDate: '',
           days: [],
           respondents: []
        }*/

        //this.state = {schedule:schedule};

      //  const newSchedule = Object.assign({}, this.props.actions.getScheduleById(this.props.scheduleId));

        /*this.state =  {
           schedule: Object.assign({}, this.props.actions.getScheduleById(this.props.scheduleId))
        }*/

      /*  this.state =  {
           schedule: this.props.actions.getScheduleById(this.props.scheduleId)
        }

        console.log('Completed the call. And this.state.schedule is ', this.state.schedule);
        //console.log('Completed the call. And this.state.newSchedule is ', this.state.newSchedule);
      /*if(newSchedule.id != null){
        console.log('newSchedule.id is not null');
         this.setState({schedule:newSchedule});
       }*/
      /*this.state = {
        schedule: Object.assign({}, this.props.schedule)
      }*/
  }

  componentWillMount() {
     this.props.actions.getScheduleById(this.props.scheduleId);
    /*this.state =  {
       schedule: Object.assign({}, this.props.actions.getScheduleById(this.props.scheduleId))
     }*/
  }


  checkSchedule() {
    console.log('props.schedule.id value ',  typeof this.props.schedule.id);
    if (parseInt(this.props.schedule.id) > 0) {
      return (
        <div>
             <div style={scheduleOuterDivStyle}>
                 <h1>Update schedule</h1>
                 <UpdateScheduleForm schedule={this.props.schedule}/>
             </div>
       </div>
    );
  }
  //else {
    return(
      <div>
        <div style={scheduleOuterDivStyle}>
            <h1>Update schedule</h1>
            <p>Searching for schedule...</p>
        </div>
      </div>
    )
  //}
}


render() {

        console.log("schedule in UpdateSchedule", this.props.schedule);
        //console.log("schedule.user ", schedule.user);
        if (this.props.schedule.length > 0) {
        //if(1 == 2) {
          return (
            <div>
                 <div style={scheduleOuterDivStyle}>
                     <h1>Update schedule</h1>
                     <UpdateScheduleForm schedule={this.props.schedule}/>
                 </div>
           </div>
           );
        } else {
          return(
            <div>
              <div style={scheduleOuterDivStyle}>
                  <h1>Update schedule</h1>
                  <p>Searching for schedule...</p>
              </div>
            </div>
          )
        }
}
}

    /*render() {
            //const {schedule} = this.props;
            console.log("schedule in UpdateSchedule", schedule);
            //console.log("schedule.user ", schedule.user);
            return (
              <div>
                   <div style={scheduleOuterDivStyle}>
                       <h1>Update schedule</h1>
                       <UpdateScheduleForm schedule={this.state.schedule}/>
                   </div>
            </div>
          );
    }
  }*/

    function getScheduleById(schedules, id) {
      const schedule = schedules.filter(schedule => schedule.id == id);
      console.log('schedule.length is ' , schedule.length);
      console.log('Updating Schedule ...' , schedule[0]);
      if (schedule.length) return schedule[0]; //since filter returns an array, have to grab the first.
      return null;
    }


    function mapStateToProps(state, ownProps) {
      console.log('state in mapStateToProps() ZZZZZZZ' , state);

      const scheduleId = ownProps.params.id;   // from the path `/schedules/:id

    /*let schedule = {
         id: '',
         survey: '',
         frequency: '',
         startDate: '',
         endDate: '',
         days: [],
         respondents: []
      }

      /*if(scheduleId && state.schedules.length > 0) {
             schedule = getScheduleById(state.schedules, scheduleId);
             console.log('Looked up schedule by scheduleId ', schedule);
             /*for(var i = 0; i < schedule.respondents.length; i++) {
               schedule.respondents.user = "/schedule/schedules/${scheduleId}?projection=scheduleDetails"
             }
         }*/

         /*if(scheduleId) {
           schedule = scheduleActions.getScheduleById(scheduleId)
         }*/
     console.log('In mapStateToProp => state.scheduleToUpdate is ', state.scheduleToUpdate);
      return {
         schedule: state.scheduleToUpdate,
      //  schedules: state.schedules,
        scheduleId: scheduleId
      };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(scheduleActions, dispatch)
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(UpdateSchedule);

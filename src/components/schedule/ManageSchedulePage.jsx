import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';
import ScheduleList from './ScheduleList.jsx';
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

  /*componentWillReceiveProps(nextProps) {
   if (this.props.schedule.id != nextProps.schedule.id) {
     // Necessary to populate form when existing schedule is loaded directly.
     this.setState({schedule: Object.assign({}, nextProps.schedule)});
   }
 }*/



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

    browserHistory.push('/schedules/' + event.currentTarget.value.id);
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

/*function getScheduleById(schedules, id) {
  const schedule = schedules.filter(schedule => schedule.id == id);
  if (schedule.length) return schedule[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
    console.log('ownProps is' , ownProps.params.id);
    const scheduleId = ownProps.params.id;

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

    if (scheduleId && state.schedules.length > 0) {
      schedule = getScheduleById(state.schedules, scheduleId);
    }

    return {
      schedule: schedule,
      schedules: state.schedules
    };

}*/


function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedulePage);

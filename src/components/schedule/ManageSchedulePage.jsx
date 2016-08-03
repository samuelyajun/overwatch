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

        this.state = {
           schedule: Object.assign({}, props.schedule)
        };

        this.onClickUpdate = this.onClickUpdate.bind(this);
        this.updateScheduleState = this.updateScheduleState.bind(this);
        this.cleanSchedules = this.cleanSchedules.bind(this);
    }

    // componentWillMount(){
    //     this.props.actions.loadSchedules();
    // }

  updateScheduleState(event) {
    const field = event.target.name;
    let schedule = this.state.schedule;
    schedule[field] = event.target.value;
    return this.setState({schedule: schedule});
  }

  onClickUpdate(event) {
    event.persist();
    browserHistory.push('/schedules/update/' + event.currentTarget.value.id);
  }


  scheduleRow(schedule, index){
      return (<div> key={index}>{schedule.templateURI}</div>);
  }

cleanSchedules(schedules){
    let newSchedules=[];
    const cleanedSchedules = Object.assign([], schedules);
  
  //console.log("cleanedSchedules ALL",schedules)
  cleanedSchedules.map(schedule => {
    const cleanedSchedule = Object.assign({}, schedule);
//console.log("cleanedSchedules",schedule)
    let clientAttribute = "";
    let projectAttribute = "";
    let projectAttributes = schedule.respondents[0].allowedAttributes;
    console.log("projectAttributes",projectAttributes)
    let newScheduleFrequency = schedule.frequency.toLowerCase().replace("_", " ");

    //regex changes the first letter of each word to upper case
    newScheduleFrequency = newScheduleFrequency.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});

    for (let attribute of projectAttributes) {

        if(attribute.attributeType.name === "CLIENT"){

            clientAttribute = attribute.attributeValue;
        }
        if(attribute.attributeType.name === "PROJECT"){
            projectAttribute = attribute.attributeValue;
        }
    }

    cleanedSchedule.frequency = newScheduleFrequency;
    cleanedSchedule.client = clientAttribute;
    cleanedSchedule.project = projectAttribute;
   // console.log (cleanedSchedule);
    newSchedules.push(cleanedSchedule);
    })
    console.log(newSchedules);
    return newSchedules;
}

    render() {
        const {schedules} = this.props;
        const cleanedSchedules = this.cleanSchedules(schedules);

        return (
            <div style={scheduleOuterDiv}>
                <h1 style={alignCenterStyle}>List of Schedules</h1><br></br><br></br>
                <ScheduleList schedules = {cleanedSchedules} onUpdate={this.onClickUpdate}/>
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
    console.log(state.schedules);
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

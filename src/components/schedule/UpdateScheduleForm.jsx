import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';
import CheckboxGroup from '../common/CheckboxGroup.jsx';
import toastr from 'toastr';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';

class UpdateScheduleForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        /*this.state = {
        schedule: Object.assign({}, props.schedule),
        errors: {},
        saving: false
        };*/

        const errorSurveyRequired = 'Survey is required';
        const errorUsernameRequired = 'Username is required';
        const errorStartDateRequired = 'Start date is required';
        const errorEndDatePreviousToStartDate = 'End date must occur after start date';
        const errorDaysRequired = 'A day is required';

        const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        this.days = daysOfTheWeek;

        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.updateDays = this.updateDays.bind(this);
        this.validateStartDate = this.validateStartDate.bind(this);
        this.validateSeven = this.validateSeven.bind(this);
        this.getFrequencyValue = this.getFrequencyValue.bind(this);

        this.state = {
            schedule: Object.assign({}, props.schedule),


            /*schedule: {
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
          },*/

            isFormValid: 'true',

            errors: {
              username: {
                required: '',
                length: ''
              },
              survey: {
                required: ''
              },
              startDate: {
                required: ''
              },
              endDate: {
                afterStart: '',
                sevenDays: ''
              },
              days: {
                required: ''
              }
            }
        };

        this.state.schedule.frequency = this.getFrequencyValue;
        console.log('Frequency value ', this.state.schedule.frequency);

        console.log('Test to see attribute value ', this.state.schedule.respondents[0].allowedAttributes[2].attributeValue);
        console.log('Test to see survey name ' , this.state.schedule.survey);
        console.log('Test to see frequency ' , this.state.schedule.frequency);
        console.log('Frequency value' , this.getFrequencyValue);

    }

    /*componentWillReceiveProps(nextProps) {
       if (this.props.schedule.id != nextProps.schedule.id) {
         // Necessary to populate form when existing course is loaded directly.
         this.setState({schedule: Object.assign({}, nextProps.schedule)});
       }
    }*/

    onClickSubmit() {

        let startDateIsValid = this.validateStartDate();
        let endDateIsValid = this.validateEndDate();
        let daysAreValid = this.validateDays();

        if( startDateIsValid &&
            endDateIsValid &&
            daysAreValid
        ){
            this.props.actions.saveSchedule(this.state.schedule);

            toastr.options.positionClass = 'toast-top-full-width';
            toastr.success('Schedule submitted!');

            setTimeout(function() {
                browserHistory.push("/schedules/manage");
            }, 1000);
        }
        else{
            toastr.options.positionClass = 'toast-top-full-width';
            toastr.error('Validation errors');
        }
    }



    onUpdate(event) {
        const property = event.target.name;
        let val = event.target.value;
        let schedule = Object.assign({}, this.state.schedule);
        let errors = Object.assign({},this.state.errors);

        schedule[property] = event.target.value;

        this.setState({errors: errors});
        return this.setState({schedule});
    }

    updateDays(event) {
        let isChecked = event.target.checked;
        let schedule = Object.assign({}, this.state.schedule);
        let days = schedule['days'];
        let name = event.target.name;

        if (isChecked) {
            days.push(name);
        } else {
            let dayIndex = days.indexOf(name);
            if (dayIndex != -1) {
                days.splice(dayIndex, 1);
            }
        }

        schedule['days'] = days;
        return this.setState({schedule});
    }

    validateStartDate(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;

        if(this.state.schedule.startDate === ''){
            errors.startDate.required = 'Start date is required';
            isValid = false;
        }
        else{
            errors.startDate.required = '';
            isValid = true;
        }

        this.setState({errors});
        return isValid;
    }

    validateSeven(){
        let isValid = true;
        let startDate = new Date(this.state.schedule.startDate);
        let endDate = new Date(this.state.schedule.endDate);
        let diff = endDate.getTime() - startDate.getTime();
        diff = diff / (1000 * 60 * 60 *24);

        if (diff < 7){
            isValid = false;
        }

        return isValid;
    }

    validateEndDate(){
        let errors = Object.assign({},this.state.errors);
        let startDate = this.state.schedule.startDate;
        let endDate = this.state.schedule.endDate;
        let isValid = true;

        if(startDate !== '' && endDate !== '' && startDate > endDate){
            errors.endDate.afterStart = 'End date must occur after the start date';
            isValid = false;
        }
        else if(!this.validateSeven()) {
            errors.endDate.afterStart = 'End date must occur at least 7 days after the start date';
            isValid = false;
        }
        else{
            errors.endDate.afterStart = '';
            isValid = true;
        }
        this.setState({errors});
        return isValid;
    }

    validateDays(){
        let errors = Object.assign({},this.state.errors);
        let days = this.state.schedule.days;
        let isValid = true;

        if (days.length === 0){
            errors.days.required = 'Please choose at least one day';
            isValid = false;
        }
        else {
            errors.days.required = '';
            isValid = true;
        }

        this.setState({errors});
        return isValid;
    }

    //let frequencyValue = getFrequencyValue();
    //console.log('Frequency value ' + frequencyValue);

    getFrequencyValue() {
      console.log('In getFrequencyValue');

      //let frequency = this.state.schedule.frequency;
      /*console.log('Original frequency ', frequency);

      switch(frequency) {

          case "ONE TIME":
          return "0";

          case "ONE WEEK":
          return "1";

          case "TWO WEEKS":
          return "2";

          case "THREE WEEKS":
          return "3";

          case "FOUR WEEKS":
          return "4";

          default:
          return "0";
      }*/
      /*if(frequency == "ONE WEEK") {
        return "1";
      }*/
      return "1";
    }

    render() {
        const {schedules} = this.props;

        return(
            <div className="container">
                <form className name="myForm" noValidate>
                    <div className="row">
                        <div className="col-md-2">
                            <TextInput
                                name="usernameInput"
                                label="Username"
                                placeholder="Enter username"
                                value={this.state.schedule.respondents[0].user.email}
                                onChange={this.onUpdate}
                                error={this.state.errors.username.required}
                            />
                        </div>
                        <div className="col-md-2">
                            <SelectInput
                                name="survey"
                                label="Select a Survey"
                                value={this.state.schedule.survey}
                                onChange={this.onUpdate}
                                options={[
                                    {
                                        text: 'Sprint Checkup',
                                        value: "SC"
                                    },
                                    {
                                        text: "SPD Team",
                                        value: "ST"
                                    },
                                    {
                                        text: "SPD Leaders",
                                        value: "SL"
                                    },
                                    {
                                        text: "EM Quantitative",
                                        value: "EMQ"
                                    },
                                    {
                                        text: "TL Quantitative",
                                        value: "TLQ"
                                    }
                                ]}
                                error={this.state.errors.survey.required}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <TextInput
                                name="startDate"
                                label="Start Date"
                                type="date"
                                value={this.state.schedule.startDate}
                                validate={this.validateStartDate}
                                onChange={this.onUpdate}
                                error={this.state.errors.startDate.required}
                            />
                        </div>
                        <div className="col-md-2">
                            <TextInput
                                name="endDate"
                                label="End Date"
                                type="date"
                                value={this.state.schedule.endDate}
                                validate={this.validateEndDate}
                                onChange={this.onUpdate}
                                error={this.state.errors.endDate.afterStart}
                            />
                        </div>
                    </div>

                   <div className="row">
                        <div className="col-md-8">
                            <fieldset className="form-group">
                                <label>Choose at least one day:</label>
                                <CheckboxGroup
                                    list={this.days}
                                    onClick={this.updateDays}
                                    error={this.state.errors.days.required}
                                />
                            </fieldset>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <SelectInput
                                name="frequency"
                                label="Frequency"
                                value={this.state.schedule.frequency}
                                defaultOptionLabel = "One Time"
                                defaultOptionValue = "0"
                                onChange={this.onUpdate}
                                options={[
                                    {
                                        text: "1 Week",
                                        value: "1"
                                    },
                                    {
                                        text: "2 Weeks",
                                        value: "2"
                                    },
                                    {
                                        text: "3 Weeks",
                                        value: "3"
                                    },
                                    {
                                        text: "4 Weeks",
                                        value: "4"
                                    }
                                ]}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h4>Attributes:</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <SelectInput
                                        name="client"
                                        label="Client"
                                        defaultOption="-choose-"
                                        value={this.state.schedule.client}
                                        onChange={this.onUpdate}
                                        options={[

                                        ]}
                                    />
                                </li>
                                <li className="list-group-item">
                                    <SelectInput
                                        name="project"
                                        label="Project"
                                        defaultOption="-choose-"
                                        value={this.state.schedule.project}
                                        onChange={this.onUpdate}
                                        options={[

                                        ]}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <SelectInput
                                        name="office"
                                        label="Office"
                                        value={this.state.schedule.respondents[0].allowedAttributes[0].attributeValue}
                                        onChange={this.onUpdate}
                                        options={[
                                            {
                                                text: 'Beaverton',
                                                value: 'beaverton'
                                            },
                                            {
                                                text: "Baltimore",
                                                value: "baltimore"
                                            }
                                        ]}
                                        />
                                </li>
                                <li className="list-group-item">
                                    <SelectInput
                                        name="role"
                                        label="Role"
                                        value={this.state.schedule.respondents[0].allowedAttributes[2].attributeValue}
                                        onChange={this.onUpdate}
                                        options={[
                                            {
                                                text: 'Engagement Manager',
                                                value: 'EM'
                                            },
                                            {
                                                text: "Tech Lead",
                                                value: "TL"
                                            },
                                            {
                                                text: "Business Analyst",
                                                value: "BA"
                                            },
                                            {
                                                text: "Developer",
                                                value: "DEV"
                                            }
                                        ]}
                                        />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <br />
                    <div className="col-md-12">
                        <span><button onClick={this.onClickSubmit} type="button" className="btn btn-success">Submit</button></span>
                        <span><button type="button" className="btn btn-secondary">Cancel</button></span>
                    </div>
                </form>
            </div>
        );
    }
}

UpdateScheduleForm.propTypes = {
    schedules: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  /*let schedule = {
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
  };*/

    return {
        //schedule: schedule,
        schedules: state.schedules
    };
}

//Pull in the React Router context so router is available on this.context.router.
/*ScheduleForm.contextTypes = {
  router: PropTypes.object
};*/

/*function getScheduleById(schedules, id) {
  const schedule = schedules.filter(schedule => schedule.id == id);
  console.log('schedule.length is ' , schedule.length);
  console.log('schedule[0]' , schedule[0]);
  if (schedule.length) return schedule[0]; //since filter returns an array, have to grab the first.
  return null;
}


function mapStateToProps(state, ownProps) {

  console.log('State.schedules length' , state.schedules.length);
  console.log('ownprops is ' , ownProps);
  //debugger;
  var scheduleId = '';
  if(ownProps.params != null) {
    scheduleId = ownProps.params.id;   // from the path `/schedules/:id`
    console.log('scheduleId is ', ownProps.params.id);
  }

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
} */

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateScheduleForm);

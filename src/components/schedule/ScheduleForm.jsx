import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';
import CheckboxGroup from '../common/CheckboxGroup.jsx';
import UserCheckboxGroup from './UserCheckboxGroup.jsx';
import RespondentList from './RespondentList.jsx';
//redux imports
import * as userActions from '../../actions/userActions';
import toastr from 'toastr';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../../actions/scheduleActions';

import HateoasUtils from '../../utils/hateoasUtils';

class ScheduleForm extends React.Component {

    constructor(props, context) {
        super(props, context);


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
        this.updateUsers = this.updateUsers.bind(this);
        this.validateStartDate = this.validateStartDate.bind(this);
        this.validateSeven = this.validateSeven.bind(this);

        this.state = {
            schedule: {
                survey: '',
                frequency: '',
                startDate: '',
                endDate: '',
                days: [],
                respondents: []
            },
            attributes: {
                project: "",
                client: "",
                office: ""
            },

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
    }

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

    updateUsers(event) {
        const userId = parseInt(event.target.value);
        const user = this.props.users.find((user) => {
            return user.id === userId;
        });

        let respondent = Object.assign({}, this.state.attributes);
        respondent.user = user;

        let schedule = Object.assign({}, this.state.schedule)
        console.log(schedule.respondents);
        const newRespondents = [...schedule.respondents, Object.assign({}, respondent)]
        console.log(newRespondents);
        schedule.respondents = newRespondents;

        console.log(schedule.respondents);
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

    render() {
        const {schedules} = this.props;

        return(
            <div className="container">
                <form className name="myForm" noValidate>
                    <div className="row">
                        <div className="col-md-2">
                            <SelectInput
                                name="survey"
                                label="Select a Survey"
                                value={this.state.schedule.survey}
                                onChange={this.onUpdate}
                                options={[
                                    {
                                        text: 'Sprint Checkup',
                                        value: 'SC'
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
                            <UserCheckboxGroup
                                users={this.props.users}
                                onClick={this.updateUsers}
                            />
                        </div>

                        <div className="col-md-2">
                            <RespondentList
                                respondents={this.state.schedule.respondents}
                                onClick={this.updateUsers}
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
                                defaultOptionValue = "4"
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
                                        value={this.state.attributes.client}
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
                                        value={this.state.attributes.project}
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
                                        value={this.state.attributes.office}
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

ScheduleForm.propTypes = {
    users: PropTypes.array.isRequired,
    schedules: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};



function mapStateToProps(state, ownProps) {
    return {
        users: state.users,
        schedules: state.schedules
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, userActions, scheduleActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);

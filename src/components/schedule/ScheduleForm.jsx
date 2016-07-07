import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';
import CheckboxGroup from '../common/CheckboxGroup.jsx';

class ScheduleForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.days = daysOfTheWeek;

        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.updateDays = this.updateDays.bind(this);
        this.validateStartDate = this.validateStartDate.bind(this);

        this.state = {
            schedule: {
                username: 'test',
                survey: '',
                client: '',
                project: '',
                frequency: '',
                role: '',
                startDate: '',
                endDate: '',
                office: '',
                days: []
            },

            isFormValid: 'true',

            errors: {
              username: {
                required: ''
              },
              survey: {
                required: 'Survey is required'
              },
              startDate: {
                required: ''
              },
              endDate: {
                afterStart: ''
              },
              days: {
                required: 'bad'
              }
            }
        };
    }

    onClickSubmit() {
        console.log(this.state.schedule);

    }

    onUpdate(event) {
        const property = event.target.name;
        let val = event.target.value;
        let schedule = Object.assign({}, this.state.schedule);
        schedule[property] = event.target.value;
        console.log(property);
        console.log(val);
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
        console.log(days);
        schedule['days'] = days;
        return this.setState({schedule});
    }




    validateStartDate(event){
      console.log("validate start date");
        //return (value ? true : false)
    }



    render() {
        return(
            <div className="container">
                <form className name="myForm" noValidate>
                    <div className="row">
                        <div className="col-md-2">
                            <TextInput
                                name="usernameInput"
                                label="Username"
                                placeholder="Enter username"
                                onChange={this.onClickSubmit}
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
                            <TextInput
                                name="startDate"
                                label="Start Date"
                                type="date"
                                value={this.state.schedule.startDate}
                                validate={this.validateStartDate}
                                onChange={this.onUpdate}
                            />
                        </div>
                        <div className="col-md-2">
                            <TextInput
                                name="endDate"
                                label="End Date"
                                type="date"
                                value={this.state.schedule.endDate}
                                onChange={this.onUpdate}
                                errorMessage="End date must occur after the start date"
                                required
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
                                        value={this.state.schedule.office}
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
                                        value={this.state.schedule.role}
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

export default ScheduleForm;

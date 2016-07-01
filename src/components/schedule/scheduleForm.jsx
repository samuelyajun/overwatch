import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

class ScheduleForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.onClickSubmit = this.onClickSubmit.bind(this);

        this.state = {
            schedule: {username: 'test'}
        };
    }

    onClickSubmit() {
        console.log(this.state.schedule);
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
                                onchange={() => {}}
                            />
                        </div>
                        <div className="col-md-2">
                            <SelectInput
                                name="surveySelect"
                                label="Select a Survey"
                                defaultOption="Sprint Checkup"
                                value="SC"
                                onChange={() => {}}
                                options={[
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
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <TextInput
                                name="startDate"
                                label="Start Date"
                                type="date"
                                onchange={() => {}}
                            />
                        </div>
                        <div className="col-md-2">
                            <TextInput
                                name="endDate"
                                label="End Date"
                                type="date"
                                onchange={() => {}}
                            />
                        </div>
                    </div>

                   <div className="row">
                        <div className="col-md-8">
                            <fieldset className="form-group">
                                <label>Choose atleast one day:</label>

                            </fieldset>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <SelectInput
                                name="frequency"
                                label="Frequency"
                                defaultOption="1 Week"
                                value="1"
                                onChange={() => {}}
                                options={[
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
                                        value=""
                                        onChange={() => {}}
                                        options={[

                                        ]}
                                    />
                                </li>
                                <li className="list-group-item">
                                    <SelectInput
                                        name="project"
                                        label="Project"
                                        defaultOption="-choose-"
                                        value=""
                                        onChange={() => {}}
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
                                        defaultOption="Beaverton"
                                        value="beaverton"
                                        onChange={() => {}}
                                        options={[
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
                                        defaultOption="Engagement Manager"
                                        value="EM"
                                        onChange={() => {}}
                                        options={[
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

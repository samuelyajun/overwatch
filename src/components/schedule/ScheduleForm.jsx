import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';
import CheckboxGroup from '../common/CheckboxGroup.jsx';
import UserCheckboxGroup from './UserCheckboxGroup.jsx';
import RespondentList from './RespondentList.jsx';
import Button from '../common/Button.jsx';
//redux imports
import * as userActions from '../../actions/userActions';
import * as scheduleActions from '../../actions/scheduleActions';
import * as templateActions from '../../actions/templateActions'
import toastr from 'toastr';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HateoasUtils from '../../utils/hateoasUtils';
import ScheduleUtils from '../../utils/scheduleUtils';

class ScheduleForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        const errorTemplateRequired = 'Template is required';
        const errorUsernameRequired = 'Username is required';
        const errorStartDateRequired = 'Start date is required';
        const errorEndDatePreviousToStartDate = 'End date must occur after start date';

        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onUpdateAttribute = this.onUpdateAttribute.bind(this);
        this.updateUsers = this.updateUsers.bind(this);
        this.updateRole = this.updateRole.bind(this);
        this.validateStartDate = this.validateStartDate.bind(this);
        this.validateSeven = this.validateSeven.bind(this);
        this.attrToUrls = this.attrToUrls.bind(this);
        this.onUpdateTemplate = this.onUpdateTemplate.bind(this);
        this.viewSchedules = this.viewSchedules.bind(this);

        this.state = {
            schedule: {
                id: '',
                templateUri: '',
                templateName: '',
                frequency: 'ONE_TIME',
                startDate: '',
                endDate: '',
                respondents: []
            },
            allowedAttributes: [
                {
                    id:"http://localhost:8090/allowedAttributes/7",
                    attributeValue: 'Catalyst DevWorks', //hardcoded for now
                    attributeTypes: {
                        name: 'CLIENT'
                    }
                },
                {
                    id:"http://localhost:8090/allowedAttributes/8",
                    attributeValue: 'Overwatch', //hardcoded for now
                    attributeTypes: {
                        name: 'PROJECT'
                    }
                },
                {
                    id:"http://localhost:8090/allowedAttributes/5",
                    attributeValue: 'Beaverton',
                    attributeTypes: {
                        name: 'OFFICE'
                    }
                }
            ],

            isFormValid: 'true',
            errors: {
              username: {
                required: '',
                length: ''
              },
              templateUri: {
                required: ''
              },
              startDate: {
                required: ''
              },
              endDate: {
                afterStart: '',
                sevenDays: ''
              }
            }
        };
    }



    onClickSubmit() {
        if (this.isFormValid()) {
            var attributes = Object.assign([], this.attrToUrls(this.state.allowedAttributes));
            let formattedSchedule = Object.assign({}, this.state.schedule);

            ScheduleUtils.addRoles(formattedSchedule, attributes);
            ScheduleUtils.addUserLink(formattedSchedule);

           // console.log('***Schedule in ScheduleForm*** ', formattedSchedule);
            //console.log("this.state.schedule:",this.state.schedule)
            this.props.actions.createSchedule(formattedSchedule);
            toastr.options.positionClass = 'toast-top-full-width';
            toastr.success('Schedule submitted!');
            setTimeout(this.viewSchedules,400);
            //browserHistory.push("/schedules/manage");
        } else {
            toastr.options.positionClass = 'toast-top-full-width';
            toastr.error('Validation errors');
        }
    }

    viewSchedules(){
        browserHistory.push("/schedules/manage");
    }

    attrToUrls(attributes){
        var newAttrs=[];
          attributes.forEach(function(attr){
                newAttrs.push(attr.id);
            })
        return newAttrs;
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

    onUpdateTemplate(event){
        let index = event.target.selectedIndex;
        let selectedText = event.target.options[index].text;
        const property = event.target.name;
        let schedule = Object.assign({}, this.state.schedule);
        let errors = Object.assign({},this.state.errors);
        schedule[property] = event.target.value;
        schedule.templateName = selectedText;
        this.setState({errors: errors});
        return this.setState({schedule});
    }

    onUpdateAttribute(event) {
        const type = event.target.name;
        let val = event.target.value;
        let attributes = Object.assign([], this.state.allowedAttributes);
        let errors = Object.assign({},this.state.errors);

        let attribute = attributes.find((attr) => {
            return attr.attributeTypes.name === type;
        });
        attribute.attributeValue = event.target.value;
        this.setState({errors: errors});
        return this.setState({attributes});
    }


    updateUsers(event) {
        const isChecked = event.target.checked;
        const userId = parseInt(event.target.value);
        let schedule = Object.assign({}, this.state.schedule);

        if (isChecked) {
            const user = this.props.users.find((user) => {
                return user.id === userId;
            });

            let respondent = {allowedAttributes: []};
            respondent.user = user;
            respondent.allowedAttributes.push({
                attributeValue: '',
                attributeTypes: {
                    name: 'ROLE'
                }
            });

            const newRespondents = [...schedule.respondents, Object.assign({}, respondent)];
            schedule.respondents = newRespondents;
        } else {
            const newRespondents = [
                ...schedule.respondents.filter((respondent) => {
                    return respondent.user.id !== userId;
                })
            ];
            schedule.respondents = newRespondents;
        }
        return this.setState({schedule});
    }



    updateRole(event) {
        const index = parseInt(event.target.name);
        const role = event.target.value;
        const schedule = Object.assign({}, this.state.schedule);
        schedule.respondents[index].allowedAttributes[0].attributeValue = role;
        return this.setState({schedule});
    }

    isFormValid() {
        return this.validateStartDate() &&
                this.validateEndDate() &&
                this.validateSeven();
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

    formatTemplateLink(link){
      const urlPreSplit = link.split('/');
      const formatUrl = '/' + urlPreSplit[3] + '/' + urlPreSplit[4];

      return formatUrl;
    }

    render() {
        const {schedules, templates} = this.props;
        const schedulePanel = {
            backgroundColor:'#999999',
            borderColor: '#999999',
            color: '#ffffff'
        }

          const marginTop = {
            marginTop: '20px'
        }
        let templateOptions = [];
        templates.map((template) => {
          templateOptions.push( {
            text: template.name,
            value: this.formatTemplateLink(template._links.self.href)
          })
        })

        return(
            <div className="container">
                <form className="myForm" noValidate>
                    <div className="row">
                        <div className="panel">
                            <div className="panel-heading"  style={schedulePanel}><h4>1. General Information</h4></div>
                            <div className="panel-body"> 
                                   <div className="col-xs-6">
                                       <div className="row">
                                           <div className="col-md-6" style={marginTop}>
                                            <SelectInput
                                                name="templateUri"
                                                label="Select a Template"
                                                value={this.state.schedule.templateUri}
                                                onChange={this.onUpdateTemplate}
                                                options={templateOptions}
                                                defaultOptionValue=""
                                                defaultOptionLabel="--Select Name--"
                                                error={this.state.errors.templateUri.required}

                                            />
                                           </div>
                                           <div className="col-md-6"  style={marginTop}>
                                           <SelectInput
                                               name="frequency"
                                               label="Frequency"
                                               value={this.state.schedule.frequency}
                                               defaultOptionLabel = "One Time"
                                               defaultOptionValue = "ONE_TIME"
                                               onChange={this.onUpdate}
                                               options={[
                                                   {
                                                       text: "1 Week",
                                                       value: "ONE_WEEK"
                                                   },
                                                   {
                                                       text: "2 Weeks",
                                                       value: "TWO_WEEKS"
                                                   },
                                                   {
                                                       text: "3 Weeks",
                                                       value: "THREE_WEEKS"
                                                   },
                                                   {
                                                       text: "4 Weeks",
                                                       value: "MONTHLY"
                                                   }
                                               ]}
                                           />
                                       </div>
                                       </div>
                                        <div className="row">
                                           <div className="col-md-6">
                                               <TextInput
                                                   name="startDate"
                                                   label="Start Date"
                                                   type="date"
                                                   value={this.state.schedule.startDate}
                                                   validate={this.validateStartDate}
                                                   onChange={this.onUpdate}
                                                   error={this.state.errors.startDate.required}
                                                   icon="glyphicon glyphicon-calendar"
                                               />
                                           </div>
                                           <div className="col-md-6">
                                               <TextInput
                                                   name="endDate"
                                                   label="End Date"
                                                   type="date"
                                                   value={this.state.schedule.endDate}
                                                   validate={this.validateEndDate}
                                                   onChange={this.onUpdate}
                                                   error={this.state.errors.endDate.afterStart}
                                                   icon="glyphicon glyphicon-calendar"
                                               />
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-xs-6 well">
                                       <div className="row">
                                       <div className="col-md-6">
                                           <ul className="list-unstyled">
                                               <li>
                                                   <SelectInput
                                                       name="CLIENT"
                                                       label="Client"
                                                       defaultOption="-choose-"
                                                       defaultOptionValue=""
                                                       defaultOptionLabel="--Select Client--"
                                                       value={this.state.allowedAttributes[0].attributeValue}
                                                       onChange={this.onUpdate}
                                                       options={[]}
                                                       icon="glyphicon glyphicon-user"
                                                   />
                                               </li>
                                               <li>
                                                   <SelectInput
                                                       name="PROJECT"
                                                       label="Project"
                                                       defaultOptionValue=""
                                                       defaultOptionLabel="--Select Project--"
                                                       value={this.state.allowedAttributes[1].attributeValue}
                                                       onChange={this.onUpdate}
                                                       options={[]}
                                                       icon="glyphicon glyphicon-briefcase"
                                                   />
                                               </li>
                                           </ul>
                                       </div>
                                       <div className="col-md-6">
                                           <ul className="list-unstyled">
                                               <li>
                                                    <SelectInput
                                                        name="OFFICE"
                                                        label="Office"
                                                        defaultOptionValue=""
                                                        defaultOptionLabel="--Select Location--"
                                                        value={this.state.allowedAttributes[2].attributeValue}
                                                        onChange={this.onUpdateAttribute}
                                                        options={[
                                                            {
                                                                id:"http://localhost:8090/allowedAttributes/5",
                                                                text: 'Beaverton',
                                                                value: 'Beaverton'
                                                            },
                                                            {
                                                                id:"http://localhost:8090/allowedAttributes/6",
                                                                text: "Baltimore",
                                                                value: "Baltimore"
                                                            }
                                                             ]}
                                                        icon="glyphicon glyphicon-globe"
                                                    />
                                               </li>
                                           </ul>
                                       </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="panel">
                          <div className="panel-heading" style={schedulePanel}><h4>2. Select Recipients</h4></div>
                          <div className="panel-body">
                                <div className="col-md-4">
                                    <UserCheckboxGroup
                                        users={this.props.users}
                                        onClick={this.updateUsers}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <RespondentList
                                        respondents={this.state.schedule.respondents}
                                        onChange={this.updateRole}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-md-12">
                        <Button label = {'Submit'} type = {'button'} buttonClassName = {'btn btn-primary'} onClick={this.onClickSubmit}/>
                        <Button label = {'Cancel'} type = {'button'} buttonClassName = {'btn btn-secondary'} onClick={this.viewSchedules}/>
                    </div>
                </form>
            </div>
        );
    }
}

ScheduleForm.propTypes = {
    users: PropTypes.array.isRequired,
    schedules: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    templates: PropTypes.array.isRequired
};



function mapStateToProps(state, ownProps) {
   console.log('in mapStateToProps() in scheduleForm ');
    return {
        users: state.users,
        schedules: state.schedules,
        templates: state.templates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, userActions, scheduleActions, templateActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);

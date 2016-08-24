import React, {PropTypes} from 'react';
//redux imports
import * as userActions from '../../actions/userActions';
import * as scheduleActions from '../../actions/scheduleActions';
import * as surveyActions from '../../actions/surveyActions';
import * as templateActions from '../../actions/templateActions';
import toastr from 'toastr';
import { Router, browserHistory, Route, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ScheduleUtils from '../../utils/scheduleUtils';
import ScheduleForm from './ScheduleForm.jsx';
import PageTitle from '../common/PageTitle.jsx';


const scheduleOuterDiv = {
    marginTop: '75px'
};

const alignCenterStyle = {
    textAlign: 'center'
};

class ManageSchedulePage extends React.Component {
    constructor(props, context){
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
        this.formatTemplateLink =this.formatTemplateLink.bind(this);
        this.viewSchedules = this.viewSchedules.bind(this);
        this.validateTemplate = this.validateTemplate.bind(this);
        this.validateFrequency = this.validateFrequency.bind(this);
        this.validateOffice = this.validateOffice.bind(this);
        this.validateProject = this.validateProject.bind(this);
        this.validateRespondents = this.validateRespondents.bind(this);
        this.validateRoles = this.validateRoles.bind(this);

        this.state = {
            schedule: {id: '',
                templateUri: '',
                templateName: '',
                frequency: '',
                startDate: '',
                endDate: '',
                respondents: []},
            allowedAttributes: [
                {
                    id:"",
                    attributeValue: '', 
                    attributeTypes: {
                        name: 'CLIENT'
                    }
                },
                {
                    id:"",
                    attributeValue: '', //hardcoded for now
                    attributeTypes: {
                        name: 'PROJECT'
                    }
                },
                {
                    id:"",
                    attributeValue: '',
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
              frequency: {
                required: ''
              },
              startDate: {
                required: ''
              },
              endDate: {
                afterStart: '',
                sevenDays: ''
              },
              client: {
                required: ''
              },
              location: {
                required: ''
              },
              project: {
                required: ''
              },
              respondents: {
                required: ''
              },
              roles: {
                required: ''
              }
            }
        };
    }

    onClickUpdate(event) {
        event.persist();
        browserHistory.push('/schedules/update/' + event.currentTarget.value.id);
    }

    onClickSubmit() {
        if (this.isFormValid()) {
            let attributes = Object.assign([], this.attrToUrls(this.state.allowedAttributes));
            let formattedSchedule = Object.assign({}, this.state.schedule);

            ScheduleUtils.addRoles(formattedSchedule, attributes);
            ScheduleUtils.addUserLink(formattedSchedule);

            this.props.actions.postToSurveyWithSchedule(formattedSchedule);
            toastr.options.positionClass = 'toast-top-full-width';
            toastr.success('Schedule submitted!');
            browserHistory.push("/schedules/");
        } else {
            toastr.options.positionClass = 'toast-top-full-width';
            toastr.error('Validation errors');
        }
    }

    attrToUrls(attributes){
        let newAttrs=[];
          attributes.forEach(function(attr){
                newAttrs.push(attr.id);
            });
        return newAttrs;
    }

     viewSchedules(event) {
        event.persist();
        browserHistory.push('/schedules/');
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
        attribute.id = event.target.value;

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
                this.validateSeven()&&
                this.validateTemplate()&&
                this.validateFrequency()&&
                this.validateClient()&&
                this.validateOffice()&&
                this.validateProject()&&
                this.validateRespondents()&&
                this.validateRoles();
    }

    validateRoles(){
        let errors = Object.assign({},this.state.errors);
        let isValid = false;
        let roles = this.state.schedule.respondents.map((resp)=>{return resp.allowedAttributes[0].attributeValue;});
        let result=false;
        roles.forEach(function(){
            for(let i=0;i<roles.length;i++){
                if(!roles[i]){
                    errors.roles.required = 'Each respondent must have a role';
                    return;
                }   
            }
            isValid = true;
            errors.roles.required = '';
        });

        this.setState({errors});
        return isValid;
    }

    validateRespondents(){
        let errors = Object.assign({},this.state.errors);
        let isValid = false;
        if(this.state.schedule.respondents.length<1){
            errors.respondents.required = 'Respondents required';
            isValid = false;
        }else{
            errors.respondents.required = '';
            isValid = true;
        }
        
        this.setState({errors});
        return isValid;
    }

    validateProject(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;
        if(this.state.allowedAttributes[1].attributeValue === ''){
            errors.project.required = 'Project required';
            isValid = false;
        }else{
            errors.project.required = '';
        }
        this.setState({errors});
        return isValid;
    }

    validateOffice(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;
        if(this.state.allowedAttributes[2].attributeValue === ''){
            errors.location.required = 'Office required';
            isValid = false;
        }else{
            errors.location.required = '';
        }
        this.setState({errors});
        return isValid;
    }

    validateClient(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;
        if(this.state.allowedAttributes[0].attributeValue === ''){
            errors.client.required = 'Frequency required';
            isValid = false;
        }else{
            errors.client.required = '';
        }
        this.setState({errors});
        return isValid;
    }

    validateFrequency(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;
        if(this.state.schedule.frequency === ''){
            errors.frequency.required = 'Frequency required';
            isValid = false;
        }else{
            errors.frequency.required = '';
        }
        this.setState({errors});
        return isValid;
    }

    validateTemplate(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;
        if(this.state.schedule.templateUri === ''){
            errors.templateUri.required = 'Template required';
            isValid = false;
        }else{
            errors.templateUri.required = '';
        }
        this.setState({errors});
        return isValid;
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
        const {schedules, templates, users} = this.props;
        let templateOptions = [];
        templates.map((template) => {
        templateOptions.push( {
            text: template.name,
            value: this.formatTemplateLink(template._links.self.href)
        });
        });

        return (
                <div className="container" style={scheduleOuterDiv}>
                <PageTitle name={'Create Schedule'}/>
                 <ScheduleForm initialState={this.state} formatTemplateLink={this.formatTemplateLink}
                templateOptions={templateOptions}
                templateUri={this.state.schedule.templateUri} onUpdateTemplate={this.onUpdateTemplate}
                errorsTemplateUri={this.state.errors.templateUri.required}
                scheduleFrequency={this.state.schedule.frequency} 
                errorsFrequency={this.state.errors.frequency.required}
                onUpdate={this.onUpdate} scheduleStartDate={this.state.schedule.startDate}
                validateStartDate={this.validateStartDate} errorsStartDate={this.state.errors.startDate.required}
                scheduleEndDate={this.state.schedule.endDate} validateEndDate={this.validateEndDate}
                errorsEndDate={this.state.errors.endDate.afterStart}
                allowedAttributesClient={this.state.allowedAttributes[0].attributeValue}
                errorsClient={this.state.errors.client.required}
                allowedAttributesProject={this.state.allowedAttributes[1].attributeValue}
                errorsProject={this.state.errors.project.required}
                allowedAttributesLocation={this.state.allowedAttributes[2].attributeValue}
                errorsLocation={this.state.errors.location.required}
                onUpdateAttribute={this.onUpdateAttribute}
                users={users} respondents={this.state.schedule.respondents}
                errorsRespondents={this.state.errors.respondents}
                errorsRoles={this.state.errors.roles}  
                updateUsers={this.updateUsers} updateRole={this.updateRole}
                onClickSubmit={this.onClickSubmit} viewSchedules={this.viewSchedules}
            />  
            </div>
        );

    }
}



ManageSchedulePage.propTypes = {
    schedules: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    templates: PropTypes.array.isRequired
};

//Pulling in the React Router context, so router is available via this.context.router
ManageSchedulePage.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        users: state.users,
        schedules: state.schedules,
        templates: state.templates
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(Object.assign({}, userActions, scheduleActions, templateActions, surveyActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedulePage);

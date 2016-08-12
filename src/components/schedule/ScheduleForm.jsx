import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';
import UserCheckboxGroup from './UserCheckboxGroup.jsx';
import RespondentList from './RespondentList.jsx';
import UserForm from './UserSelection.jsx';
import SurveyScheduleDate from './SurveyScheduleDate.jsx';
import AttributesComponent from './AttributesComponent.jsx';
import Button from '../common/Button.jsx';
//redux imports
import * as userActions from '../../actions/userActions';
import * as scheduleActions from '../../actions/scheduleActions';
import * as surveyActions from '../../actions/surveyActions';
import * as templateActions from '../../actions/templateActions';
import toastr from 'toastr';
import { Router, browserHistory, Route, IndexRoute, Link  } from 'react-router';

const ScheduleForm = ({initialState,formatTemplateLink, templates, templateUri,
  onUpdateTemplate, errorsTemplateUri, scheduleFrequency, onUpdate, scheduleStartDate,
  validateStartDate, errorsStartDate, scheduleEndDate, validateEndDate, errorsEndDate,
  allowedAttributesZero, allowedAttributesOne, allowedAttributesTwo, onUpdateAttribute,
  users, respondents, updateUsers, updateRole, onClickSubmit, viewSchedules, templateOptions
})  =>  {

        const schedulePanel = {
            backgroundColor:'#999999',
            borderColor: '#999999',
            color: '#ffffff'
        };

          const marginTop = {
            marginTop: '20px'
        };

        return(
            <div className="container">
                <form className="myForm" noValidate>
                    <div className="row">
                        <div className="panel">
                            <div className="panel-heading"  style={schedulePanel}><h4>1. General Information</h4></div>
                              <div className="panel-body">

                                  <div className="col-xs-6">

                                    <SurveyScheduleDate templateUri={templateUri} onUpdateTemplate={onUpdateTemplate}
                                      templateOptions={templateOptions} errorsTemplateUri={errorsTemplateUri}
                                      scheduleFrequency={scheduleFrequency} onUpdate={onUpdate} scheduleStartDate={scheduleStartDate}
                                      validateStartDate={validateStartDate} errorsStartDate={errorsStartDate}
                                      scheduleEndDate={scheduleEndDate} validateEndDate={validateEndDate}
                                      errorsEndDate={errorsEndDate}
                                    />

                                  </div>

                                  <div className="col-xs-6 well">
                                    <AttributesComponent allowedAttributesZero={allowedAttributesZero}
                                      allowedAttributesOne={allowedAttributesOne}
                                      allowedAttributesTwo={allowedAttributesTwo}
                                      onUpdateAttribute={onUpdateAttribute}
                                     />

                                  </div>

                              </div>
                            </div>
                    </div>
                    <div className="row">
                       <UserForm users={users} respondents={respondents} updateUsers={updateUsers} updateRole={updateRole} />
                    </div>
                    <br />
                    <div className="col-md-12">
                        <Button label = {'Submit'} type = {'button'} buttonClassName = {'btn btn-primary'} onClick={onClickSubmit}/>
                        <Button label = {'Cancel'} type = {'button'} buttonClassName = {'btn btn-secondary'} onClick={viewSchedules}/>
                    </div>
                </form>
            </div>
        );
    }


ScheduleForm.propTypes = {
    users: PropTypes.array.isRequired,
    schedules: PropTypes.array.isRequired,
    templates: PropTypes.array.isRequired
};


export default ScheduleForm;

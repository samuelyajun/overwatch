import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';

const SurveyScheduleDate = ({templateUri, onUpdateTemplate, templateOptions, errorsTemplateUri,
	scheduleFrequency, onUpdate, scheduleStartDate, validateStartDate, errorsStartDate,
	scheduleEndDate, validateEndDate, errorsEndDate}) => {

    const schedulePanel = {
        backgroundColor:'#999999',
        borderColor: '#999999',
        color: '#ffffff'
    };

	const marginTop = {
	    marginTop: '20px'
	};

    return (
    <div>
			<div className="row">

                <div className="col-md-6" style={marginTop}>
                    <SelectInput
                        name="templateUri"
                        label="Select a Template"
                        value={templateUri}
                        onChange={onUpdateTemplate}
                        options={templateOptions}
                        defaultOptionValue=""
                        defaultOptionLabel="--Select Name--"
                        error={errorsTemplateUri}

                    />
                </div>

                <div className="col-md-6"  style={marginTop}>
                   <SelectInput
                       name="frequency"
                       label="Frequency"
                       value={scheduleFrequency}
                       defaultOptionLabel = "One Time"
                       defaultOptionValue = "ONE_TIME"
                       onChange={onUpdate}
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
                               value: "FOUR_WEEKS"
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
			         value={scheduleStartDate}
			         validate={validateStartDate}
			         onChange={onUpdate}
			         error={errorsStartDate}
			         icon="glyphicon glyphicon-calendar"
			     />
			  </div>
			  <div className="col-md-6">
			     <TextInput
			         name="endDate"
			         label="End Date"
			         type="date"
			         value={scheduleEndDate}
			         validate={validateEndDate}
			         onChange={onUpdate}
			         error={errorsEndDate}
			         icon="glyphicon glyphicon-calendar"
			     />
			  </div>
			</div>
    </div>
    );

};

export default SurveyScheduleDate;

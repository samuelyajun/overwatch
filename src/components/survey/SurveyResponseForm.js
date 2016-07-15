import React, {PropTypes} from 'react';
import SurveyQuestionList from './SurveyQuestionList.jsx';
import SurveyQuantityQuestionList from './SurveyQuantityQuestionList.jsx';
import Button from '../common/Button.jsx';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

let i = 1;
let surveyTemplate;
let submitButtonType = 'submit';
let cancelButtonType = 'reset';
let submitButtonClass = 'btn btn-primary';
let cancelButtonClass = 'btn btn-default';

if (template.type === "qualitative" ) {
    surveyTemplate = <SurveyQuestionList questions={template.questions}/>
} else {
    surveyTemplate = <SurveyQuantityQuestionList questions = {template.questions} />
}

const SurveyResponseForm = ({template, onSave, saving, onChange}) => {
    return (
        <div style={surveyPageOuterDiv}>
            <h1>{template.name}</h1>
            <h2>{template.description}</h2>
            <form name="surveyForm" noValidate>
                <SurveyQuestionList questions={template.questions} />
                <Button label = {submitButtonType} type = {submitButtonType} buttonClassName = {submitButtonClass} onClick={this.redirectToAddSurveyPage}/>
                <Button labe = {cancelButtonType} type = {cancelButtonType} buttonClassName = {cancelButtonClass}/>
            </form>
        </div>
    );
};
//{
//    surveyTemplate
//}


SurveyResponseForm.propTypes = {
    template: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func,
    saving: React.PropTypes.bool,
    onChange: React.PropTypes.func
};

export default SurveyResponseForm;
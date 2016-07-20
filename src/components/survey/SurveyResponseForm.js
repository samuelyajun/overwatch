import React, {PropTypes} from 'react';
import SurveyQuestionList from './SurveyQuestionList.jsx';
import SurveyQuantityQuestionList from './SurveyQuantityQuestionList.jsx';
import Button from '../common/Button.jsx';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

let submitButtonType = 'submit';
let cancelButtonType = 'reset';
let submitButtonClass = 'btn btn-primary';
let cancelButtonClass = 'btn btn-default';


const SurveyResponseForm = ({ survey }) => {
    return (
        <div style={surveyPageOuterDiv} className="container">
            <div className="row">
                <p>{survey.surveyTemplate.templateInstruction}</p>
            </div>
            <form name="surveyForm" noValidate>
                {survey.surveyTemplate.templateName === "SPD" ?
                    <SurveyQuestionList survey = {survey} /> :
                    <SurveyQuantityQuestionList survey = {survey} />
                }
                <Button label = {submitButtonType} type = {submitButtonType} buttonClassName = {submitButtonClass}/>
                <Button label = {cancelButtonType} type = {cancelButtonType} buttonClassName = {cancelButtonClass}/>
            </form>
        </div>
    );
};

SurveyResponseForm.propTypes = {
    survey: PropTypes.object.isRequired,
    onSave: PropTypes.func,
    saving: PropTypes.bool,
    onChange: PropTypes.func
};




//<SurveyQuestionList
//    survey = {survey}
///>



export default SurveyResponseForm;
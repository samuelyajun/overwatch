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


const SurveyResponseForm = ({ surveys, onSave, saving, onChange}) => {
    let i = 0;
    //let surveyTemplateType;
    //if (surveys[0].surveyTemplate.questions.questionType === "qualitative" ) {
    //    surveyTemplateType = <SurveyQuestionList
    //        key = {surveys[i].id}
    //        survey = {surveys[i]}
    //    />;
    //} else {
    //    surveyTemplateType = <SurveyQuantityQuestionList
    //        key = {surveys[i].id}
    //        survey = {surveys[i]}
    //    />;
    //}
    return (
        <div style={surveyPageOuterDiv}>
            <form name="surveyForm" noValidate>
                <SurveyQuestionList
                    survey = {surveys}
                />
                <Button label = {submitButtonType} type = {submitButtonType} buttonClassName = {submitButtonClass}/>
                <Button label = {cancelButtonType} type = {cancelButtonType} buttonClassName = {cancelButtonClass}/>
            </form>
        </div>
    );
};



SurveyResponseForm.propTypes = {
    surveys: PropTypes.array.isRequired,
    onSave: PropTypes.func,
    saving: PropTypes.bool,
    onChange: PropTypes.func
};



export default SurveyResponseForm;
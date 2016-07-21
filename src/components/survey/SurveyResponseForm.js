import React, {PropTypes} from 'react';
import SurveyQuestionList from './SurveyQuestionList.jsx';
import SurveyQuantityQuestionList from './SurveyQuantityQuestionList.jsx';
import Button from '../common/Button.jsx';

const surveyPageOuterDiv = {
    marginTop: '75px'
};


const SurveyResponseForm = ({ survey, onSubmit }) => {

    let submitButtonType = 'submit';
    let cancelButtonType = 'reset';
    let submitButtonClass = 'btn btn-primary';
    let cancelButtonClass = 'btn btn-default';

    return (
        <div style={surveyPageOuterDiv} className="container">
            <form name="surveyForm" noValidate>
                {survey.template.name === "SPD" ?
                    <SurveyQuestionList survey = {survey} /> :
                    <SurveyQuantityQuestionList survey = {survey} />
                }
                <Button label = {submitButtonType} type = {'button'} buttonClassName = {submitButtonClass} onClick={onSubmit}/>
                <Button label = {cancelButtonType} type = {cancelButtonType} buttonClassName = {cancelButtonClass}/>
            </form>
        </div>
    );
};

SurveyResponseForm.propTypes = {
    survey: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func
};



export default SurveyResponseForm;
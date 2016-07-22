import React, {PropTypes} from 'react';
import LikertQuestion from '../question/LikertQuestion.jsx';
import NumericQuestion from '../question/NumericQuestion.jsx';
import Button from '../common/Button.jsx';

const surveyPageOuterDiv = {
    marginTop: '25px',
    marginBottom: '75px'
};


const SurveyResponseForm = ({ survey, onSubmit, className }) => {

    let submitButtonType = 'submit';
    let cancelButtonType = 'reset';
    let submitButtonClass = 'btn btn-primary';
    let cancelButtonClass = 'btn btn-default';

    return (
        <div style={surveyPageOuterDiv} className={className + " container"}>
            <form name="surveyForm" noValidate>
                    <div className="table-responsive">
                        {survey.template.type === "Qualitative" ?
                            <LikertQuestion survey = {survey} /> :
                            <NumericQuestion survey = {survey} />
                        }
                    </div>
                <Button label = {submitButtonType} type = {'button'} buttonClassName = {submitButtonClass} onClick={onSubmit}/>
                <Button label = {cancelButtonType} type = {cancelButtonType} buttonClassName = {cancelButtonClass}/>
            </form>
        </div>
    );
};

SurveyResponseForm.propTypes = {
    survey: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func,
    className: PropTypes.string
};



export default SurveyResponseForm;
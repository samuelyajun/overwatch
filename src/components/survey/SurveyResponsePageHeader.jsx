import React, {PropTypes} from 'react';

const SurveyResponsePageHeader  = ({ survey }) => {
    return (
        <div className="page-header">
            <h1>{survey.surveyTemplate.templateName}</h1>
            <small>{survey.surveyTemplate.templateDescription}</small>
        </div>
    )
}

SurveyResponsePageHeader.propTypes = {
    survey: PropTypes.object.isRequired
};

export default SurveyResponsePageHeader;
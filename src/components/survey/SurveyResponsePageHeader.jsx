import React, {PropTypes} from 'react';

const SurveyResponsePageHeader  = ({ survey }) => {
    return (

        <div className="jumbotron">
            <div className="container">
                <div className="logoContainer">
                    <div className="logo"></div>
                </div>
                <div className="surveyHeaderContainer">
                    <h1>{survey.surveyName}</h1>
                    <small>{survey.template.description}</small>
                </div>
            </div>
        </div>
    );
};

SurveyResponsePageHeader.propTypes = {
    survey: PropTypes.object.isRequired
};

export default SurveyResponsePageHeader;
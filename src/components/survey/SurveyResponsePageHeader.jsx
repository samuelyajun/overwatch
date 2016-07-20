import React, {PropTypes} from 'react';

const SurveyResponsePageHeader  = ({ headerTitle, subHeader }) => {
    return (

        <div className="jumbotron">
            <div className="container">
                <div className="logoContainer">
                    <div className="logo"></div>
                </div>
                <div className="surveyHeaderContainer">
                    <h1>{headerTitle}</h1>
                    <small>{subHeader}</small>
                </div>
            </div>
        </div>
    );
};

SurveyResponsePageHeader.propTypes = {
    headerTitle: PropTypes.string,
    subHeader: PropTypes.string
};

export default SurveyResponsePageHeader;
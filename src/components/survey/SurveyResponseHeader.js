// Survey Response Header contains details from Scheduling for the issued survey that is being filled out
import React, {PropTypes} from 'react';

const SurveyResponseHeader = ({survey}) => {
    return (
        <div className="row">
            <div className="col-xs-6">
                <div>
                    <h1 className="surveyTitle">survey.name(EOS-4 End of Sprint Survey)</h1>
                </div>
                <div>
                    <p className="surveyDescription">(survey.description)</p>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="surveyCreationDate">
                    7/4/16(survey.creationDate)
                </div>
                <div className="surveyDueDate">
                    7/4/16(survey.dueDate)
                </div>
            </div>
        </div>
    );
};

SurveyResposeHeader.propTypes = {
    survey: PropTypes.object.isRequired
}

export default SurveyResposeHeader;
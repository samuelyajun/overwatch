import React from 'react';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class SurveyConfirmationPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div style={surveyPageOuterDiv} className="container-fluid">
                <h1>Thank you for your feedback</h1>
                <p>Your survey responses have been submitted successfully.</p>
            </div>
        );
    }
}

export default SurveyConfirmationPage;
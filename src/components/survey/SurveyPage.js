import React from 'react';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class SurveyPage extends React.Component {
    render() {
        return (
            <div style={surveyPageOuterDiv}>
                <h1>Survey</h1>
                <p>Survey Page</p>
            </div>
        );
    }
}

export default SurveyPage;
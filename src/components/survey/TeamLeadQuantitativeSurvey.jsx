import React from 'react';
import SurveyQuantityQuestionList from './SurveyQuantityQuestionList.jsx';
import Button from '../common/Button.jsx';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class TeamLeadQuantitativeSurvey extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    redirectToAddSurveyPage() {
        toastr.options.positionClass = 'toast-top-full-width';
        toastr.success('Survey Submitted!');
        setTimeout(function() {
            browserHistory.push('/confirmation');
        }, 1000);
    }
    render() {

        const surveys =
            [
                {
                    "id": 1,
                    "suid": "S12345DE",
                    "surveyTemplate": {
                        "templateName": "Lead Project Data",
                        "templateDescription": "This is a survey to assess project health as we approach end of sprint.",
                        "templateInstruction": "This is to be done 4 days before a sprint end. Please fill out the following to the best of your ability.",
                        "project": {
                            "id": 1,
                            "name": "Choice Vacation Rentals",
                            "engagementManager": {
                                "id": 1,
                                "engagementManagerName": "David Bernal"
                            }
                        },
                        "questions": [
                            {
                                "id": 1,
                                "quid": "ABCDEF123",
                                "questionLabel": "Personal EoS-4 Confidence Deliverable",
                                "questionText": "Currently, how many bugs categorized as 'blocker' exist in the backlog? (Critical, Major and Low priority)",
                                "questionRequired": true,
                                "questionCategory": "deliverable",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 2,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins - how many builds were done over the course of the sprint that ends today?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },

                            {
                                "id": 3,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Git/SCM - how many check-ins were done by the team over the sprint?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },

                            {
                                "id": 4,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins or other code coverage tool - what is the level of unit test coverage on your most recent build?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 5,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins - how many failed builds were there in the sprint ending today?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 6,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "In build tool or IDE, how many automated test cases are there?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 7,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins or IDE - how many automated tests were run in the most recent build?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 8,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins/IDE - How many automated tests were quarantined/disabled in the most recent build?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },{
                                "id": 9,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins/IDE - How many automated tests failed in the most recent build?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },{
                                "id": 10,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins - what was the build duration (including running tests) for the latest build?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 11,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins/Sonar - what is your average cyclomatic complexity?Max cyclomatic complexity?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 12,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Jenkins/Lint tool - how many lint violations were in the most recent build?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            }

                        ]
                    }
                }
            ];

        let submitButtonType = 'submit';
        let cancelButtonType = 'reset';
        let submitButtonClass = 'btn btn-primary';
        let cancelButtonClass = 'btn btn-default';

        return (
            <div style={surveyPageOuterDiv}>
                <div className="container-fluid">
                    <h1>Tech Lead</h1>
                    <h2>End of Sprint Survey</h2>
                    {
                        <SurveyQuantityQuestionList key = {surveys[0].id} survey = {surveys[0]} />
                    }
                    <Button type = {submitButtonType} buttonClassName = {submitButtonClass} onClick={this.redirectToAddSurveyPage}/>
                    <Button type = {cancelButtonType} buttonClassName = {cancelButtonClass}/>
                </div>
            </div>
        );
    }
}

export default TeamLeadQuantitativeSurvey;
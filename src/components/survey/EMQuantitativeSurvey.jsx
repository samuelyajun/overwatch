import React from 'react';
import SurveyQuantityQuestionList from './SurveyQuantityQuestionList.jsx';
import Button from '../common/Button.jsx';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class EMQuantitativeSurvey extends React.Component {
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
                        "templateName": "EM Project Data",
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
                                "questionText": "How many points were committed to at the start of the sprint ending today?",
                                "questionRequired": true,
                                "questionCategory": "deliverable",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 2,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "How many points were accepted today?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },

                            {
                                "id": 3,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "How many stories were added mid-sprint to the sprint ending today?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },

                            {
                                "id": 4,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "How many stories had their requirements changed mid-sprint?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 5,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Of these, how many are dev-ready (meaning the requirements and acceptance criteria are complete and approved, and the story has been estimate/pointed)?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 6,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "How many points worth of dev-ready stories are currently in there backlog?",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 7,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "For each team member, indicate the number of points delivered by that individual during the sprint.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "quantitative"
                            },
                            {
                                "id": 8,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Entering today's sprint planning, how many stories are in the backlog?",
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
                    <h1>Engagement Manager</h1>
                    <h2>Project Survey</h2>
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

export default EMQuantitativeSurvey;
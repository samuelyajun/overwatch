import React from 'react';
import SurveyQuestionList from './SurveyQuestionList.jsx'
import Button from '../common/Button.jsx';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class LeadSprintPlanningSurvey extends React.Component {
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
                        "templateName": "EoS-4",
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
                                "questionText": "I am completely confident that my team will deliver its sprint commitment.",
                                "questionRequired": true,
                                "questionCategory": "deliverable",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },
                            {
                                "id": 2,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "I am completely confident that the project is on track and will be successful.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },

                            {
                                "id": 3,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "I am completely confident that the client will be happy with project results.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },

                            {
                                "id": 4,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "My team's code is of exceptional quality.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },
                            {
                                "id": 5,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "My team is working together extremely well.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },
                            {
                                "id": 6,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "I have all of the tools and resources I need to complete my project.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },
                            {
                                "id": 7,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "The requirements in my cards are clear, complete and cohesive.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },
                            {
                                "id": 8,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "Client stakeholders are appropriately engaged to the level required for project success",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },{
                                "id": 9,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "The client is not a hinderance to project success.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
                            },{
                                "id": 10,
                                "quid": "Q123487",
                                "questionLabel": "Team Sprint Day Question",
                                "questionText": "My work is challenging and rewarding.",
                                "questionRequired": true,
                                "questionCategory": "blockers",
                                "questionType": "qualitative",
                                "optionCategory": {
                                    "id": 1,
                                    "optionCategoryName": "Agree-Disagree"
                                },
                                "optionChoices": [
                                    {
                                        "id": 1,
                                        "optionChoiceName": "Strongly Agree"
                                    },
                                    {
                                        "id": 2,
                                        "optionChoiceName": "Agree"
                                    },
                                    {
                                        "id": 3,
                                        "optionChoiceName": "Neutral"
                                    },
                                    {
                                        "id": 4,
                                        "optionChoiceName": "Disagree"
                                    },
                                    {
                                        "id": 5,
                                        "optionChoiceName": "Strongly Disagree"
                                    }
                                ]
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
                    <h1>Tech Lead/Engagement Managers</h1>
                    <h2>End of Sprint Survey</h2>
                    {
                        <SurveyQuestionList key = {surveys[0].id} survey = {surveys[0]} />
                    }
                    <Button type = {submitButtonType} buttonClassName = {submitButtonClass} onClick={this.redirectToAddSurveyPage}/>
                    <Button type = {cancelButtonType} buttonClassName = {cancelButtonClass}/>
                </div>
            </div>
        );
    }
}

export default LeadSprintPlanningSurvey;
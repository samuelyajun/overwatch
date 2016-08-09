import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as surveyResponseActions from '../../actions/responseAction';
import {bindActionCreators} from 'redux';
import SurveyResponsePageHeader from './SurveyResponsePageHeader.jsx';
import SurveyResponseForm from './SurveyResponseForm';
import MessageComponent from '../common/MessageComponent.jsx';
import { browserHistory } from 'react-router';
import toastr from 'toastr';


const surveyContainer = {
    marginBottom: '75px'
};


const errorHeader = "Oh no!";
const errorSubHeader = 'Survey not found';
const errorMsg = 'Please contact your admin';

class SurveyResponsePage extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            showError: false,
            showConfirmation: false,
            showSurveyForm: true,
            surveyResponse: {
                'uniqueSurveyId': '',
                'originatorId': '',
                'answers': []
            },
            errors: {},
            saving: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNumericChange = this.handleNumericChange.bind(this);
    }


    componentWillReceiveProps(nextProps) {
        if(this.props.survey.id !== nextProps.survey.id) {
            this.setState({
                survey: Object.assign({}, nextProps.survey),
                surveys: Object.assign({}, nextProps.surveys)
            });
        }

    }
    onSubmit(event) {
        // console.log("onSubmit reached");
        event.preventDefault();
        // console.log("STATE OF SURVEYS", this.state.surveys);

        if (!this.validateForm()) {
            return;
        }
        const surveyQuestions = this.state.survey.template.questions;
        surveyQuestions.map(question => {
            question['selectedValue'] = '';
        });
        this.setState({survey: this.state.survey});
        // console.log("SURVEY RESPONSE STATE AT SUBMIT", this.state.surveyResponse);
        this.props.actions.saveSurveyResponse(this.state.surveyResponse);
        return this.setState(
            {
                showConfirmation: !this.state.showConfirmation,
                showSurveyForm: !this.state.showSurveyForm
            });
    }

    // Validation that all questions have responses
    validateForm(){
        let errors = {};
        let isValid = true;
        const {query} = this.props.location;
        const responseOriginatorId = query.originatorId;
        const surveyObject = Object.assign({}, this.state.survey);
        // console.log("RESPONSE STATE AT VALIDATE", this.state.surveyResponse);
        if(!responseOriginatorId) {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-right",
                "preventDuplicates": true,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "3000",
                "extendedTimeOut": "700",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            toastr.error('No Originator ID is detected. Please provide an orignator ID.');
            isValid = false;
            errors.color = 'errors';
        }
        surveyObject.template.questions.map(
            (question, index) => {
                if(question.selectedValue === undefined || question.selectedValue === null || question.selectedValue == ''){
                    toastr.options = {
                        "closeButton": true,
                        "debug": false,
                        "newestOnTop": false,
                        "progressBar": false,
                        "positionClass": "toast-top-right",
                        "preventDuplicates": true,
                        "onclick": null,
                        "showDuration": "300",
                        "hideDuration": "1000",
                        "timeOut": "3000",
                        "extendedTimeOut": "700",
                        "showEasing": "swing",
                        "hideEasing": "linear",
                        "showMethod": "fadeIn",
                        "hideMethod": "fadeOut"
                    };
                    toastr.error('Question ' + ++index +' is missing a response');
                    errors.title = 'Missing response to question(s)';
                    errors.color = 'errors';
                    isValid = false;
                }
            }
        );





        this.setState({errors: errors});
        return isValid;
    }

    // Handles likert question responses
    handleChange(value, event) {
        const {query} = this.props.location;
        const field = event.target.name;

        let surveyObject = Object.assign({}, this.state.survey);
        // console.log("SURVEY STATE **********", this.state.survey);
        // console.log(this.state);

        const responseUniqueSurveyId = surveyObject.suid;
        const responseOriginatorId = query.originatorId;
        surveyObject.template.questions[field].selectedValue = value;
        // survey.template.questions[index].selectedValue = value;
        // let answerValue = surveyObject.template.questions[index].selectedValue;
        // console.log("ANSWERVALUE", event.target.value);

        let questionLink = "/questions/" + surveyObject.template.questions[field].id;

        let surveyResponse = Object.assign({}, this.state.surveyResponse);
        surveyResponse.uniqueSurveyId = responseUniqueSurveyId;
        surveyResponse.originatorId = responseOriginatorId;
        let answer = {questionLink, value};

        let questionLinkPrevious = answer.questionLink;
        if(!surveyResponse.answers.filter((answer)=>
            {
                return answer.questionLink === questionLinkPrevious;
            }).length>0) {
            surveyResponse.answers.push(answer);
        } else if(surveyResponse.answers.filter((answer)=> {
            return answer.questionLink === questionLinkPrevious;
        }).length>0) {
            surveyResponse.answers[field] = answer;
        }
        // console.log('ANSWERS', surveyResponse);
        // console.log("(Answer: " + answer.questionLink + ", " + answer.value + "), ");

        return this.setState(
            {
                surveyResponse: surveyResponse,
                survey: surveyObject
            }
        );
    }

    // Handles numeric question responses
    handleNumericChange(event) {
        const {query} = this.props.location;
        const survey = this.state.survey;
        const surveyResponse = Object.assign({}, this.state.surveyResponse);
        const index = event.target.name;

        survey.template.questions[index].selectedValue = event.target.value;
        let questionId = survey.template.questions[index].id;

        const responseUniqueSurveyId = survey.suid;
        const responseOriginatorId = query.originatorId;

        let value = event.target.value;
        // console.log("ANSWER VALUE", value);
        let questionLink = "/question/" + questionId;
        let answer = {questionLink, value};
        let questionLinkPrevious = answer.questionLink;
        surveyResponse.uniqueSurveyId = responseUniqueSurveyId;
        surveyResponse.originatorId = responseOriginatorId;
        if(!surveyResponse.answers.filter((answer)=> {
            return answer.questionLink === questionLinkPrevious;
        }).length>0) {
            surveyResponse.answers.push(answer);
        } else if(surveyResponse.answers.filter((answer)=> {
            return answer.questionLink === questionLinkPrevious;
        }).length>0) {
            surveyResponse.answers[index] = answer;
        }

        // console.log("AnswerList: " + surveyResponse);
        // console.log("(Answer: " + answer.questionLink + ", " + answer.value + "), ");

        return this.setState(
            {
                surveyResponse: surveyResponse
            }
        );

    }

    render() {
        const {survey, numAjaxRequestsInProgress} = this.props;
        let surveyObject;
        if(this.props.location.search === "") {
            surveyObject =
                (
                    <div>
                    <SurveyResponsePageHeader
                        headerTitle={errorHeader}
                        subHeader={errorSubHeader}
                    />
                    <MessageComponent className={this.state.showError ? 'hidden' : ''}
                          text={errorMsg}
                    />
                </div>
                );

        } else if (survey && !numAjaxRequestsInProgress > 0){
            /*console.log(survey);*/
            surveyObject =
                (
                    <div>
                        <SurveyResponsePageHeader
                            headerTitle={survey.template.name + ' Survey'}
                        />
                        <SurveyResponseForm
                            className={this.state.showSurveyForm ? '' : 'hidden'}
                            surveyProps = {this.state.survey}
                            onSubmit={this.onSubmit}
                            handleChange={this.handleChange}
                            handleNumericChange={this.handleNumericChange}
                            errors={this.state.errors}
                        />
                    </div>
                );
        }
        return (
            <div style={surveyContainer}>
                {surveyObject}
                <MessageComponent
                    className={this.state.showConfirmation ? '' : 'hidden'}
                    title={'Survey Submitted!'}
                    text={'Thanks for submitting your survey!'}
                />
            </div>
        );
    }
}

SurveyResponsePage.propTypes = {
    survey: PropTypes.object,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object,
    numAjaxRequestsInProgress: PropTypes.number
};

function getSurveyBySuid(surveys, suid) {
    const survey = surveys.filter(survey=> survey.suid === suid);
    if(survey) return survey[0];
    /*console.log(survey);*/
    return null;
}

function mapStateToProps(state, ownProps) {
    const {query} =  ownProps.location;
    const suid = query.suid;

    let survey = {
        'id': '',
        'suid': '',
        'surveyDisplayLink': '',
        'surveyName': '',
        'template': {}
    };

    if(suid && state.surveys.length > 0) {
        survey = getSurveyBySuid(state.surveys, suid);
    }
    // console.log("STATE -> PROPS", state);

    return {
        surveyResponse: state.surveyResponse,
        survey: survey,
        surveys: state.surveys,
        numAjaxRequestsInProgress: state.numAjaxRequestsInProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(surveyResponseActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SurveyResponsePage);
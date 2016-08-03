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
            saving: false,

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
        console.log("onSubmit reached");
        event.preventDefault();
        this.setState
        if (!this.validateForm()) {
            return;
        }
        console.log("SURVEY RESPONSE STATE AT SUBMIT", this.state.surveyResponse);
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
        const surveyObject = this.props.survey;
        console.log("RESPONSE STATE AT VALIDATE", this.state.surveyResponse);
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
        }
        // surveyObject.template.questions.map(
        //     (question, index) => {
        //         if(question.value === undefined && (question.selectedValue === undefined|| question.selectedValue === null)){
        //             toastr.options = {
        //                 "closeButton": true,
        //                 "debug": false,
        //                 "newestOnTop": false,
        //                 "progressBar": false,
        //                 "positionClass": "toast-top-right",
        //                 "preventDuplicates": true,
        //                 "onclick": null,
        //                 "showDuration": "300",
        //                 "hideDuration": "1000",
        //                 "timeOut": "3000",
        //                 "extendedTimeOut": "700",
        //                 "showEasing": "swing",
        //                 "hideEasing": "linear",
        //                 "showMethod": "fadeIn",
        //                 "hideMethod": "fadeOut"
        //             };
        //             toastr.error('Question ' + ++index +' is missing a response');
        //             isValid = false;
        //         }
        //     }
        // );





        this.setState({errors});
        return isValid;
    }

    // Handles likert question responses
    handleChange(value, event) {
        const {query} = this.props.location;
        const field = event.target.name;
        const {survey} = this.props;
        // let someValueTarget = event.target.value;
        // console.log(someValueTarget);


        let surveyObject = Object.assign({}, this.state.survey);
        console.log("SURVEY STATE **********", this.state.survey);
        console.log("SURVEYs STATE ^^^^^^^^^^^^", this.state.surveys);
        const responseUniqueSurveyId = surveyObject.suid;
        const responseOriginatorId = query.originatorId;
        // this.state.survey.template.questions[field].selectedValue = value;
        surveyObject.template.questions[field].selectedValue = value;
        const answerValue = value;


            // let questionLink =  "/questions/" + survey.template.questions[index].id;
        console.log("answerValue", answerValue);


        // survey.template.questions[index].selectedValue = value;
        // let answerValue = surveyObject.template.questions[index].selectedValue;
        // console.log("ANSWERVALUE", event.target.value);

        let questionLink = "/questions/" + survey.template.questions[field].id;

        let surveyResponse = Object.assign({}, this.state.surveyResponse);
        surveyResponse.uniqueSurveyId = responseUniqueSurveyId;
        surveyResponse.originatorId = responseOriginatorId;
        let answer = {questionLink, answerValue};

        let questionLinkPrevious = answer.questionLink;
        if(!surveyResponse.answers.filter((answer)=> {return answer.questionLink === questionLinkPrevious}).length>0) {
            surveyResponse.answers.push(answer);
        } else if(surveyResponse.answers.filter((answer)=> {return answer.questionLink === questionLinkPrevious}).length>0) {
            surveyResponse.answers[field] = answer;
        }
        console.log('ANSWERS', surveyResponse);
        console.log("(Answer: " + answer.questionLink + ", " + answer.value + "), ");

        return this.setState(
            {
                surveyResponse: surveyResponse,
                survey: surveyObject
            }
        );
    }

    // Handles numeric question responses
    handleNumericChange(event) {
        let answers = [];

        const {surveys} = this.props;
        const {survey} = this.props;
        const index = event.target.name;

        survey.template.questions[index].value = event.target.value;
        let questionId = survey.template.questions[index].id;

        let answerValue = event.target.value;
        let questionLink = "/question/" + questionId;

        let answer = {questionLink, answerValue};
        console.log("(Answer: " + answer.questionLink + ", " + answer.answerValue + "), ");
        answers.push(answer);
        console.log("AnswerList: " + answers[answer]);

        this.setState({surveys});

    }

    render() {
        const {survey, numAjaxRequestsInProgress} = this.props;
        console.log(survey);
       /* console.log(this.props.location);*/
        let surveyObject;
        if(this.props.location.search === "") {
            //surveyObject = <div>NO SURVEYS</div>
            surveyObject =
            <div>
                <SurveyResponsePageHeader
                    headerTitle={errorHeader}
                    subHeader={errorSubHeader}
                />
                <MessageComponent className={this.state.showError ? 'hidden' : ''}
                      text={errorMsg}
                />
            </div>

        } else if (survey && !numAjaxRequestsInProgress > 0){
            /*console.log(survey);*/
            surveyObject =<div>
                <SurveyResponsePageHeader
                    headerTitle={survey.template.name + ' Survey'}
                />
                <SurveyResponseForm
                    className={this.state.showSurveyForm ? '' : 'hidden'}
                    surveyProps = {this.state.survey}
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                    handleNumericChange={this.handleNumericChange}
                />
            </div>
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
    surveys: PropTypes.array.isRequired,
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
    console.log("STATE -> PROPS", state);

   /* console.log(survey);*/
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
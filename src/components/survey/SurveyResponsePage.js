import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as surveyActions from '../../actions/surveyActions';
import {bindActionCreators} from 'redux';
import SurveyResponsePageHeader from './SurveyResponsePageHeader.jsx';
import SurveyResponseForm from './SurveyResponseForm';
import MessageComponent from '../common/MessageComponent.jsx';
import { browserHistory } from 'react-router';
import toastr from 'toastr';


const surveyContainer = {
    marginBottom: '75px'
};

let surveyResponse = {};
let answers = [];
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
            survey: Object.assign({}, this.props.survey),
            errors: {},
            saving: false,
            answers: [],
            surveyResponse: {}
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNumericChange = this.handleNumericChange.bind(this);
    }

    onSubmit(event) {
        console.log("onSubmit reached");
        event.preventDefault();
        if(this.validateForm() === true){
            const {survey} = this.props;
            surveyResponse.answers = answers;
            surveyResponse.uniqueSurveyId = survey.suid;
            surveyResponse.originatorId = "8991029012321";

            console.log(surveyResponse.uniqueSurveyId);
            console.log(surveyResponse);

            this.props.actions.saveSurvey(surveyResponse);
            this.setState({showConfirmation: !this.state.showConfirmation});
            this.setState({showSurveyForm: !this.state.showSurveyForm});
        }
    }

    // Validation that all questions have responses
    validateForm(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;
        const {survey} = this.props;

        survey.template.questions.map(
            (question, index) => {
                if(question.value === undefined && question.selectedValue === undefined){
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
                    isValid = false;
                }
            }
        );

        this.setState({errors});
        return isValid;
    }

    // Handles likert question responses
    handleChange(value, event) {
        const {surveys} = this.props;
        const {survey} = this.props;
        const index = event.target.name;

        survey.template.questions[index].selectedValue = value;
        let questionLink =  "/questions/" + survey.template.questions[index].id;
        let answerValue = value;

        let answer = {questionLink, answerValue};

        console.log("(Answer: " + answer.questionLink + ", " + answer.answerValue + "), ");

        answers.push(answer);
        console.log("AnswerList: " + answers[answer]);

        this.setState({surveys});
    }

    // Handles numeric question responses
    handleNumericChange(event) {

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
                    survey={survey}
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
    numAjaxRequestsInProgress: PropTypes.func
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
    /*console.log(suid);
     console.log("QUERY", query);*/

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

   /* console.log(survey);*/
    return {
        survey: survey,
        surveys: state.surveys,
        numAjaxRequestsInProgress: state.numAjaxRequestsInProgress

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(surveyActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SurveyResponsePage);
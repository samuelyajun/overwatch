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

class SurveyResponsePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showError: false,
            showConfirmation: false,
            showSurveyForm: true
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNumericChange = this.handleNumericChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.validateForm() === true){
            this.setState({showConfirmation: !this.state.showConfirmation});
            this.setState({showSurveyForm: !this.state.showSurveyForm});
        }
    }

    //Validates that all questions have responses
    validateForm(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;

        const {query} = this.props.location;
        let i = query.surveyId;
        const {surveys} = this.props;

        surveys[i].template.questions.map(
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
                    }
                    toastr.error('Question ' + ++index +' is missing a response');

                    isValid = false;
                    return;
                }
            }
        );

        this.setState({errors});
        return isValid;
    }
    // Handles likert question Responses
    handleChange(value, event) {
        const {query} = this.props.location;
        let i = query.surveyId;
        const {surveys} = this.props;
        const index = event.target.name;

        let surveysCopy = Object.assign ({}, surveys);
        surveysCopy[i].template.questions[index].selectedValue = value;
        this.setState({surveys});
    }

    //Handles numeric question responses
    handleNumericChange(event) {
        const {query} = this.props.location;
        let i = query.surveyId;
        const {surveys} = this.props;
        const index = event.target.name;

        let surveysCopy = Object.assign ({}, surveys);
        surveysCopy[i].template.questions[index].value = event.target.value;
        this.setState({surveys});
    }

    render() {
        const {query} = this.props.location;
        let i = query.surveyId;
        const {surveys} = this.props;
        return (
            <div style={surveyContainer}>
                {surveys.length > 0 ?
                    <div>
                        <SurveyResponsePageHeader 
                            headerTitle={surveys[i].template.name + ' Survey'}
                        />
                        <SurveyResponseForm
                            className={this.state.showSurveyForm ? '' : 'hidden'}
                            survey={surveys[i]} onSubmit={this.onSubmit}
                            handleChange={this.handleChange}
                            handleNumericChange={this.handleNumericChange}
                        />
                    </div>
                    :  null
                }
                <MessageComponent
                    className={this.state.showConfirmation ? '' : 'hidden'}
                    title={'Survey Submitted!'}
                    text={'Thank you for Completing the Survey'}
                />
            </div>
        );
    }
}

SurveyResponsePage.propTypes = {
    surveys: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
        surveys: state.surveys
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(surveyActions, dispatch)
    };
}


export default  connect(mapStateToProps, mapDispatchToProps)(SurveyResponsePage);
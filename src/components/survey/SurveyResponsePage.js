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
            surveySubmitted: false,
            showSurveyForm: true
        };
    }

    onSubmit() {
        this.setState({surveySubmitted: true});
        this.setState({showSurveyForm: false});
    }

    validateForm(){
        let errors = Object.assign({},this.state.errors);
        let isValid = true;

        if(this.state.schedule.startDate === ''){
            errors.startDate.required = 'Start date is required';
            isValid = false;
        }
        else{
            errors.startDate.required = '';
            isValid = true;
        }

        this.setState({errors});
        return isValid;
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
                        <SurveyResponseForm survey={surveys[i]} onSubmit={this.onSubmit}/>
                    </div>
                    : <MessageComponent title={'Survey Not Found'}/>
                }
                <MessageComponent title={'Survey Submitted!'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum semper mollis. Etiam leo nunc, hendrerit vitae mauris vitae, eleifend suscipit mi. Suspendisse potenti. Quisque vitae maximus enim. '} />
            </div>
        );
    }
}

SurveyResponsePage.propTypes = {
    surveys: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
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
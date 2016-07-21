import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as surveyActions from '../../actions/surveyActions';
import {bindActionCreators} from 'redux';
import SurveyResponsePageHeader from './SurveyResponsePageHeader.jsx';
import SurveyResponseForm from './SurveyResponseForm';
import { browserHistory } from 'react-router';
import toastr from 'toastr';


class SurveyResponsePage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    onSubmit() {
        setTimeout(function() {
            browserHistory.push("/confirmation");
        }, 1000);
        toastr.options.positionClass = 'toast-top-full-width';
        toastr.success('Schedule submitted!');
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
        let i = 1;
        const {surveys} = this.props;
        return (
            <div>
                {surveys.length > 0 ?
                    <div>
                        <SurveyResponsePageHeader
                            headerTitle={surveys[i].surveyTemplate.templateName + ' Survey'}
                        />
                        <SurveyResponseForm survey={surveys[i]} onSubmit={this.onSubmit}/>
                    </div>
                    : null
                }
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
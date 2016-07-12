import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as surveyActions from '../../actions/surveyActions';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class SurveyPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Thank you for your feedback</h1>
                <p>Your survey responses have been submitted successfully.</p>
            </div>
        );
    }
}

SurveyPage.propTypes = {
};

function mapStateToProps (state, ownProps) {
    return {

    };
}

function mapDispatchToProps (dispatch) {
    return {
        //createSurvey: (survey) => dispatch(surveyActions.createSurvey(survey))
        actions: bindActionCreators(surveyActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage);

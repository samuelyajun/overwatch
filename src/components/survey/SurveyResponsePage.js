import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as surveyActions from '../../actions/surveyActions';
import {browserHistory} from 'react-router';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class SurveyPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddSurveyPage = this.redirectToAddSurveyPage.bind(this);
    }

    surveyRow(survey, index) {
        return <div key={index}>{survey.name}</div>;
    }

    redirectToAddSurveyPage() {
        browserHistory.push('/course');
    }

    render() {
        const {surveys} = this.props;
        return (
            <div>
                <h1>Surveys</h1>
                <div style={surveyPageOuterDiv}>
                    <h1>Survey</h1>
                    <p>Survey Page</p>
                </div>
            </div>
        );
    }
}

SurveyPage.propTypes = {
    surveys: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        surveyss: state.surveys
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(surveyActions, dispatch)
    };
}

export default connect (mapStateToProps, mapDispatchToProps)(SurveyPage);
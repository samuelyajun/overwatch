import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as surveyActions from '../../actions/surveyActions';
import SurveyResponseForm from './SurveyResponseForm';
import toastr from 'toastr';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class SurveyResponsePage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {surveys} = this.props;
        return (
            <div className="container">
                    <SurveyResponseForm
                        surveys = {surveys}
                    />
            </div>
        );
    }
}

SurveyResponsePage.propTypes = {
    surveys: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
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
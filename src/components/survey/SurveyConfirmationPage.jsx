import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as surveyActions from '../../actions/surveyActions';
import {bindActionCreators} from 'redux';
import SurveyResponsePageHeader from './SurveyResponsePageHeader.jsx';


class SurveyConfirmationPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let i = 0;
        const {surveys} = this.props;
        return (
            <div className="container-fluid">
                    <SurveyResponsePageHeader headerTitle={surveys[i].surveyTemplate.templateName + ' Survey'}/>
                    <div className="container">
                        <h1>Survey Submitted!</h1>
                        <p>Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo.
                            Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada,
                            integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.
                        </p>
                    </div>
            </div>
        );
    }
}

SurveyConfirmationPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SurveyConfirmationPage);
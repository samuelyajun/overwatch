import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as surveyActions from '../../actions/surveyActions';
import {bindActionCreators} from 'redux';
import SurveyResponsePageHeader from './SurveyResponsePageHeader.jsx';
import SurveyResponseForm from './SurveyResponseForm';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class SurveyResponsePage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {query} = this.props.location;
        console.log(query);
        let i = query.surveyId;
        const {surveys} = this.props;
        return (
            <div className="container-fluid">
                {surveys.length > 0 ?
                    <div>
                        <SurveyResponsePageHeader survey={surveys[i]}/>
                        <SurveyResponseForm survey={surveys[i]}/>
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
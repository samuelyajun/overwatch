import React from 'react';

const templateOuterDivStyle = {
    marginTop: '75px'
};

class ManageSurveyPage extends React.Component {
    render() {
        return (
            <div style={templateOuterDivStyle}>
                <h1>ManageSurvey Page</h1>
                <p>ManageSurvey Page</p>
            </div>
        );
    }
}

ManageSurveyPage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageSurveyPage.contextTypes = {
    router: PropTypes.object
};

function getSurveyById(surveys, id) {
    const survey = surveys.filter(survey => survey.id == id);
    if(survey.length) return survey[0];
    return null;
}

function mapStateToProps(state, ownProps){
    const surveyId = ownProps.params.id;
    let survey = {id: '', watchHref: '', name: '', type: '', description: '', templateId: ''};

    if(surveyId && state.surveys.length > 0) {
        survey = getSurveyById(state.surveys, surveyId);
    }

    const templatesFormattedForDropdown = state.templates.map(template => {
        return {
            value: template.id,
            text: template.name + ' ' + template.type
        };
    });

    return {
        survey: survey,
        templates: atemplatesFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(surveyActions, dispatch)
    };
}

export default connect (mapStateToProps, mapDispatchToProps)(ManageSurveyPage);
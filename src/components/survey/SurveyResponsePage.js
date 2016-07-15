import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as templateActions from '../../actions/templateActions';
import SurveyResponseForm from './SurveyResponseForm';
import toastr from 'toastr';

const surveyPageOuterDiv = {
    marginTop: '75px'
};

class SurveyResponsePage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            template: Object.assign({}, props.template),
            errors: {},
            saving: false
        };

        this.updateTemplateState = this.updateTemplateState.bind(this);
        this.saveTemplate = this.saveTemplate.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.template.id != nextProps.template.id) {
            this.setState({template: Object.assign({}, nextProps.template)});
        }
    }

    updateTemplateState(event) {
        const field = event.target.name;
        let template = this.state.template;
        template[field] = event.target.value;
        return this.setState({template: template});
    }

    saveTemplate(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveTemplate(this.state.template)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect() {
        this.setState({saving: false});
        toastr.success('Template Saved!');
        this.context.router.push('/surveyConfirmationPage');
    }

    render() {
        return (
            <div className="container">
                <SurveyResponseForm
                    template={this.state.template}
                />
            </div>
        );
    }
}

SurveyResponsePage.propTypes = {
    template: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

SurveyResponsePage.contextTypes = {
    router: PropTypes.object
};

function getTemplateById(templates, id) {
    const template = templates.filter(template => template.id == id);
    if(template.length) return template[0];
    return null;
}

function mapStateToProps(state, ownProps){
    const templateId = ownProps.params.id;
    let template = {id: '', watchHref: '', name: '', type: '', description: '', createDate: '', version: ''};

    if(templateId && state.templates.length > 0) {
        template = getTemplateById(state.templates, templateId);
    }

    return {
        template: template
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(templateActions, dispatch)
    };
}


export default  connect(mapStateToProps, mapDispatchToProps)(SurveyResponsePage);
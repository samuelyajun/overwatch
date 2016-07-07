import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as templateActions from '../../actions/templateActions';
import TemplateList from './TemplateList';
import {browserHistory} from 'react-router';

const TemplatesPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddTemplatePage = this.redirectToAddTemplatePage.bind(this);
    }

    templateRow(template, index) {
        return <div key={index}>{template.name}</div>;
    }

    redirectToAddTemplatePage() {
        browserHistory.push('/template');
    }

    render() {
        const {templates} = this.props;
        return (
            <div>
                <h1>Templates</h1>
                <input type="submit"
                       value="Add Template"
                       className="btn btn-primary"
                       onClick={this.redirectToAddTemplatePage}/>
                <TemplateList templates={templates}/>
            </div>
        );
    }
}

TemplatesPage.propTypes = {
    templates: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return{
        templates: state.templates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(templateActions, dispatch)
    };
}

export default (mapStateToProps, mapDispatchToProps)(TemplatesPage);
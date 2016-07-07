import React from 'react';

const templateOuterDivStyle = {
    marginTop: '75px'
};

class ManageTemplatePage extends React.Component {

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
        this.context.router.push('/templates');
    }

    render() {
        return (
            <div style={templateOuterDivStyle}>
                <h1>ManageTemplate Page</h1>
                <p>ManageTemplate Page</p>
            </div>
        );
    }

}

export default ManageTemplatePage;
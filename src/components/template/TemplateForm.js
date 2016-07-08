import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const TemplateForm = ({template, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1> Manage Template</h1>
            <TextInput
                name="name"
                label="Name"
                value={template.name}
                onChange={onChange}
                error={errors.name}/>

            <TextInput
                name="type"
                label="Type"
                value={template.type}
                onChange={onChange}
                error={errors.type}/>

            <TextInput
                name="description"
                label="Description"
                value={template.description}
                onChange={onChange}
                error={errors.description}/>
        </form>
    );
};

TemplateForm.propTypes = {
    template: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default TemplateForm;
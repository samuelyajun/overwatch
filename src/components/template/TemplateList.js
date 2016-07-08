import React, {PropTypes} from 'react';
import TemplateListRow from './TemplateListRow';

const TemplateList = ({templates}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>$nbsp;</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Created on</th>
                <th>Version</th>
            </tr>
            </thead>
            <tbody>
            {templates.map(template =>
                <TemplateListRow key={template.id} template={template} />
            )}
            </tbody>
        </table>
    );
};

TemplateList.propTypes = {
    templates: PropTypes.array.isRequired
};

export default TemplateList;
import React, {PropTypes} from 'react';
import QuestionListRow from '../question/QuestionListRow';

const TemplateForm = ({template}) => {
    console.log(template);
    return (
        <div>
                <h1> Manage Template</h1>
                <h4>{template.name}</h4>
                <h4>{template.type}</h4>
                <p>{template.description}</p>
                <table>
                    <thead>
                        <tr>ID</tr>
                        <tr>Text</tr>
                        <tr>Response Type</tr>
                    </thead>
                    <tbody>
                    {template.questions.map(question =>
                        <QuestionListRow key={question.id} question={question} />
                    )}
                    </tbody>
                </table>
        </div>
    );
};

TemplateForm.propTypes = {
    template: React.PropTypes.object.isRequired
};

export default TemplateForm;
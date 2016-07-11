import React, {PropTypes} from 'react';
import QuestionListRow from '../question/QuestionListRow';

const templateOuterDivStyle = {
    margin: '25px'
};

let tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

const TemplateForm = ({template}) => {
    return (
        <div style={templateOuterDivStyle}>
                <h1>Template Details</h1>
                <h4>{template.name}</h4>
                <h4>{template.type}</h4>
                <p>{template.description}</p>
            <table style={tableStyle} className="table">
                    <thead>
                        <tr>
                            <td>Text</td>
                            <td>Response Type</td>
                        </tr>
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
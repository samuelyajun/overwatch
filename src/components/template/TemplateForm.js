import React, {PropTypes} from 'react';
import QuestionListRow from '../question/QuestionListRow';


const templateOuterDivStyle = {
    margin: '25px'
};

let tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

const TemplateForm = ({template, onSave, saving, onChange}) => {
    return (
        <div style={templateOuterDivStyle}>
                <h1>Template Details</h1>
                <h4>{template.name}</h4>
                <h4>{template.type}</h4>
                <p>{template.description}</p>
            <form>
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
                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Saving...' : 'Save'}
                    className="btn btn-primary"
                    onClick={onSave}/>
            </form>
        </div>
    );
};

TemplateForm.propTypes = {
    template: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired
};

export default TemplateForm;
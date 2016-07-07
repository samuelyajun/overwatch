import React, {PropTypes} from 'react';
import QuestionListRow from './QuestionListRow';

const TemplatePage = ({template}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>$nbsp;</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>

            </tr>
            </thead>
            <tbody>
            {questions.map(template =>
                <QuestionsListRow key={template.question.id} question={question} />
            )}
            </tbody>
        </table>
    );
};

TemplatePage.propTypes = {
    questions: PropTypes.array.isRequired
};

export default TemplatePage;
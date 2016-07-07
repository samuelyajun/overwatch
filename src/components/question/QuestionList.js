import React, {PropTypes} from 'react';
import QuestionListRow from './QuestionListRow';

const QuestionList = ({questions}) => {
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
            {questions.map(question =>
                <QuestionListRow key={question.id} question={question} />
            )}
            </tbody>
        </table>
    );
};

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired
};

export default QuestionList;
import React, {PropTypes} from 'react';



const QuestionListRow = ({question}) => {
    return (
        <tr>
            <td>{question.questionText}</td>
            <td>{question.responseType}</td>

        </tr>
    );
};

QuestionListRow.propTypes = {
    question: PropTypes.object.isRequired
};

export default QuestionListRow;
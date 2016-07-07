import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const QuestionListRow = ({question}) => {
    return (
        <tr>
            <td><a href={question.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/question/' + question.id}>{question.name}</Link></td>
            <td>{question.questionText}</td>
            <td>{question.responseType}</td>
            <td>{question.tags}</td>

        </tr>
    );
};

QuestionListRow.propTypes = {
    question: PropTypes.object.isRequired
};

export default QuestionListRow;
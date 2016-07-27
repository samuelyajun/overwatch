import React, {PropTypes} from 'react';
import QuestionListRow from './QuestionListRow';

let tableStyle = {
    class: "table table-hover table-bordered"
};

const QuestionList = ({questions}) => {
    return (
        <tr>
            <td>
                <div>
                    <table style={tableStyle} className="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Response Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {questions.map(question =>
                            <QuestionListRow key={question.id} question={question} />
                        )}
                        </tbody>
                    </table>
                </div>
            </td>
        </tr>
    );
};

QuestionList.propTypes = {
    questions: PropTypes.array,
    selectedValue: PropTypes.string
};

export default QuestionList;
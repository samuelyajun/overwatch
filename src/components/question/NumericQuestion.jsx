import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import NumberInput from '../common/NumberInput';


const listStyle = {
    textAlign: 'center'
};

const rowStyles = {
    verticalAlign: 'middle'
};

const questionStyling = {
    textAlign: 'left'
};

let tableStyle = "table table-hover table-striped";


const NumericQuestionList = ({surveyProps, handleNumericChange}) => {
    return (
        <table className={tableStyle}>
            <tbody>
            {
                surveyProps.template.questions.map((question, index) => {
                        return (
                            <tr key={index}>
                                <td style={rowStyles}><b>{index+1}.</b></td>
                                <td style={rowStyles}> {question.questionText}</td>
                                <td className="col-xs-6">
                                    <NumberInput
                                        name={`${index}`}
                                        type="number"
                                        min={question.answerType.minRange}
                                        max={question.answerType.maxRange}
                                        onChange={handleNumericChange}
                                    />
                                </td>
                            </tr>
                        );
                    }
                )
            }
            </tbody>
        </table>
    );
};

NumericQuestionList.propTypes = {
    surveyProps: PropTypes.object.isRequired,
    handleNumericChange: PropTypes.func
};

export default NumericQuestionList;
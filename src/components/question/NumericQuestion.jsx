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


const NumericQuestionList = ({survey, handleNumericChange}) => {
    return (
         <table className={tableStyle}> 
            <tbody>
                {
                    survey.template.questions.map((question, index) => {
                           return (
                            <tr key={index+1}>
                                <td style={rowStyles}><b>{index}.</b></td>
                                <td style={rowStyles}> {question.questionText}</td>
                                <td className="col-xs-6">
                                    <NumberInput
                                        name={index}
                                        type="number"
                                        min={question.responseType.minRange}
                                        max={question.responseType.maxRange}
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
    survey: PropTypes.object.isRequired
};

export default NumericQuestionList;
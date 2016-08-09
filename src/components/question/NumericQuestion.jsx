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


const NumericQuestionList = ({surveyProps, handleNumericChange, error}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0){
        wrapperClass += " " + 'has-error';
    }
    return (
        <table className={tableStyle}>
            <tbody>
            {
                surveyProps.template.questions.map((question, index) => {
                        return (
                            <tr key={index} className={wrapperClass}>
                                <td style={rowStyles}><b>{index+1}.</b></td>
                                <td style={rowStyles}> {question.questionText}</td>
                                <td className="col-xs-6 field">
                                    <NumberInput
                                        name={`${index}`}
                                        type="number"
                                        min={question.answerType.minRange}
                                        max={question.answerType.maxRange}
                                        onChange={handleNumericChange}
                                        className="form-control"
                                    />
                                    {error && <div className="alert alert-danger">{error}</div>}
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
    surveyProps: React.PropTypes.object.isRequired,
    handleNumericChange: React.PropTypes.func,
    error: PropTypes.string
};

export default NumericQuestionList;
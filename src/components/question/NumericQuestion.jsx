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



const NumericQuestionList = ({survey}) => {
    console.log(survey.template.questions);
    return (
         <table className={tableStyle}> 
            <tbody>
                {
                    survey.template.questions.map(question => {
                           return (
                            <tr>
                                <td style={rowStyles}><b>{question.id}.</b></td>
                                <td style={rowStyles}> {question.questionText}</td>
                                <td className="col-xs-6">
                                    <p>
                                        <NumberInput name = {question._links.self.href} type="number" min="0"/>
                                    </p>
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
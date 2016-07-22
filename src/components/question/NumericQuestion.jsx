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
                            <tr key={question.id}>
                                <td style={rowStyles}><b>{question.id}.</b></td>
                                <td style={rowStyles}> {question.questionText}</td>
                                <td className="col-xs-6">
                                        <NumberInput name = {question._links.self.href} type="number" min="0" max="99"/>
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
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import NumberInput from '../common/NumberInput';


const listStyle = {
    textAlign : 'center'
};

const rowStyle = {
    textAlign: 'center'
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
                                <td style={rowStyle}>{question.id}.</td>
                                <td> {question.questionText}</td>
                                <td>
                                    <NumberInput name = {question._links.self.href} type="number" min="0"/>
                                </td>
                            </tr>
                            )
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
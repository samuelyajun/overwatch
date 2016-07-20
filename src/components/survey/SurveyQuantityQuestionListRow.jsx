import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import NumberInput from '../common/NumberInput';


const rowStyle = {
    textAlign: 'center'
};

const SurveyQuantityListRow = ({ question }) => {
    return (
        <tr>
            <td style={rowStyle}>{question.id}.</td>
            <td>
                {question.questionText}
                <NumberInput name = {question._links.self.href} type="number" min="0"/>
            </td>
        </tr>
    );
};

SurveyQuantityListRow.propTypes = {
    question : PropTypes.object.isRequired
};

export default SurveyQuantityListRow;
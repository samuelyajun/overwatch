import React, {PropTypes} from 'react';
import RespondentListRow from './RespondentListRow.jsx';

const RespondentList = ({respondents, onChange}) => {
    return (
        <div>
            {
                respondents.map((respondent, index) => {
                    return (
                        <RespondentListRow index={index} key={respondent.user.id} respondent={respondent} onChange={onChange} />
                    );
                })
            }
        </div>
    );
}

RespondentList.propTypes = {
    respondents: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RespondentList;

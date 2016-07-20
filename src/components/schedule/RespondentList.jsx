import React, {PropTypes} from 'react';
import RespondentListRow from './RespondentListRow.jsx';

const RespondentList = ({respondents, onClick}) => {
    return (
        <div>
            {
                respondents.map((respondent) => {
                    return (
                        <RespondentListRow key={respondent.user.id} respondent={respondent} onClick={onClick} />
                    );
                })
            }
        </div>
    );
}

RespondentList.propTypes = {
    respondents: PropTypes.array.isRequired
}

export default RespondentList;

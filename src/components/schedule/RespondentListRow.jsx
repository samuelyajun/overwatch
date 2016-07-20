import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';

const RespondentListRow = ({respondent, onClick}) => {
    return (
        <div>
            <span>{`${respondent.user.firstName} ${respondent.user.lastName}`}</span>
            <SelectInput
                name="role"
                label="Role"
                value={respondent.role}
                onChange={onClick}
                options={[
                    {
                        text: 'Engagement Manager',
                        value: 'EM'
                    },
                    {
                        text: "Tech Lead",
                        value: "TL"
                    },
                    {
                        text: "Business Analyst",
                        value: "BA"
                    },
                    {
                        text: "Developer",
                        value: "DEV"
                    }
                ]}
            />
        </div>
    );
}

RespondentListRow.propTypes = {
    respondent: PropTypes.object.isRequired
}

export default RespondentListRow;

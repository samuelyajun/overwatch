import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';

const RespondentListRow = ({respondent, onChange, index}) => {
    return (
        <div>
            <span>{`${respondent.user.firstName} ${respondent.user.lastName}`}</span>
            <SelectInput
                name={`${index}`}
                label="Role"
                value={respondent.allowedAttributes[0].value}
                onChange={onChange}
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
};

RespondentListRow.propTypes = {
    respondent: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    index: PropTypes.number
};

export default RespondentListRow;

import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';

const RespondentListRow = ({respondent, onChange, index}) => {

    return (
        <div>
            <span>{`${respondent.user.firstName} ${respondent.user.lastName}`}</span>
            <SelectInput
                name={`${index}`}
                label="Role"
                value={respondent.allowedAttributes[0].attributeValue}
                onChange={onChange}
                options={[
                    {
                        id:1,
                        text: 'Engagement Manager',
                        value: "http://localhost:8090/allowedAttributes/1"
                    },
                    {
                        id:2,
                        text: "Tech Lead",
                        value: "http://localhost:8090/allowedAttributes/2"
                    },
                    {
                        id:3,
                        text: "Business Analyst",
                        value: "http://localhost:8090/allowedAttributes/3"
                    },
                    {
                        id:4,
                        text: "Developer",
                        value: "http://localhost:8090/allowedAttributes/4"
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

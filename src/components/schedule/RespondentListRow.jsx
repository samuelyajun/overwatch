import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';

const noMargin = {
    marginBottom: '0px'
};

const RespondentListRow = ({respondent, onChange, index}) => {

    return (
        <div className="well col-md-5 col-md-offset-1">
            <span className="col-md-5"><label>{`${respondent.user.firstName} ${respondent.user.lastName}`}</label></span>
            <SelectInput
                style={noMargin}
                name={`${index}`}
                value={respondent.allowedAttributes[0].attributeValue}
                onChange={onChange}
                defaultOptionValue= ""
                defaultOptionLabel= "--Select Role--"
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
                className="col-md-7"
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

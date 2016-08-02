import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';

const noMargin = {
    marginBottom: '0px'
}

const RespondentListRow = ({respondent, onChange, index}) => {
    return (
        <div className='well col-md-5 col-md-offset-1' >
            <span className='col-md-5'><label>{`${respondent.user.firstName} ${respondent.user.lastName}`}</label></span>
            <SelectInput
                style={noMargin}
                name={`${index}`}
                value={respondent.allowedAttributes[0].value}
                onChange={onChange}
                defaultOptionValue= ""
                defaultOptionLabel= "--Select Role--"
                options={[
                    {
                        text: "Engagement Manager",
                        value: "EM"
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
                className='col-md-7'
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

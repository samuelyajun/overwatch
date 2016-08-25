import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';

const noMargin = {
    marginBottom: '0px'
};

const recipientWell = {
    height: '80px'
};

const recipientLabel = {
    height: '40px',
    verticalAlign: 'middle',
    overflow: 'hidden'
};

const RespondentListRow = ({respondent, onChange, index}) => {
(function(){
  console.log("RespondentListRow",respondent);
  // console.log("allowedAttributes 0",respondent.allowedAttributes[0].attributeValue);
  // console.log("allowedAttributes 1",respondent.allowedAttributes[1].attributeValue);
  // console.log("allowedAttributes 2",respondent.allowedAttributes[2].attributeValue);
})();
    return (
        <div className="well col-md-5 col-md-offset-1" style={recipientWell}>
            <div style={recipientLabel}>
            <span className="col-md-5"><label>{`${respondent.user.firstName} ${respondent.user.lastName}`}</label></span>
               <div className="col-md-7"> 
                    <SelectInput
                       style={noMargin}
                       name={`${index}`}
                       defaultOptionValue= "--Select--"
                       defaultOptionLabel= {respondent.allowedAttributes[0].attributeValue}
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
                       className="col-md-7"
                   />
                </div>
            </div>
        </div>
    );
};

RespondentListRow.propTypes = {
    respondent: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    index: PropTypes.number
};

export default RespondentListRow;

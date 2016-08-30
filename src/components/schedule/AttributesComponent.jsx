import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput.jsx';
import TextInput from '../common/TextInput';

const AttributesComponent = ({allowedAttributesClient, allowedAttributesProject, allowedAttributesLocation, 
  onUpdateAttribute, scheduleToUpdate, errorsClient, errorsLocation, errorsProject}) => {

    return (
      <div>
        {(!scheduleToUpdate)?
      <div className="row">
       <div className="col-md-6">
           <ul className="list-unstyled">
               <li>
                   <SelectInput
                       name="CLIENT"
                       label="Client"
                       defaultOption="-choose-"
                       defaultOptionValue=""
                       defaultOptionLabel="--Select Client--"
                       value={allowedAttributesClient}
                       onChange={onUpdateAttribute}
                       error={errorsClient}
                       options={[
                          {
                                id:"http://localhost:8090/allowedAttributes/7",
                                text: "Cake Systems",
                                value: "http://localhost:8090/allowedAttributes/7"
                            },
                             {
                                id:"http://localhost:8090/allowedAttributes/8",
                                text: "Cockram",
                                value: "http://localhost:8090/allowedAttributes/8"
                            },
                           {
                                id:"http://localhost:8090/allowedAttributes/9",
                                text: 'Catalyst DevWorks',
                                value: "http://localhost:8090/allowedAttributes/9"
                            },
                            {
                                id:"http://localhost:8090/allowedAttributes/10",
                                text: "Cambia",
                                value: "http://localhost:8090/allowedAttributes/10"
                            }
                        ]}
                       icon="glyphicon glyphicon-user"
                   />
               </li>
               <li>
                   <SelectInput
                       name="PROJECT"
                       label="Project"
                       defaultOptionValue=""
                       defaultOptionLabel="--Select Project--"
                       value={allowedAttributesProject}
                       onChange={onUpdateAttribute}
                       error={errorsProject}
                       options={[
                           {
                                id:"http://localhost:8090/allowedAttributes/11",
                                text: "Cake Systems",
                                value: "http://localhost:8090/allowedAttributes/11"
                            },
                             {
                                id:"http://localhost:8090/allowedAttributes/12",
                                text: "3DS MAC and AutoCAD",
                                value: "http://localhost:8090/allowedAttributes/12"
                            },
                              {
                                id:"http://localhost:8090/allowedAttributes/13",
                                text: 'Overwatch',
                                value: "http://localhost:8090/allowedAttributes/13"
                            },
                            {
                                id:"http://localhost:8090/allowedAttributes/14",
                                text: "Mobile",
                                value: "http://localhost:8090/allowedAttributes/14"
                            }
                        ]}
                       icon="glyphicon glyphicon-briefcase"
                   />
               </li>
           </ul>
       </div>
       <div className="col-md-6">
           <ul className="list-unstyled">
               <li>
                    <SelectInput
                        name="OFFICE"
                        label="Office"
                        defaultOptionValue=""
                        defaultOptionLabel="--Select Location--"
                        value={allowedAttributesLocation}
                        onChange={onUpdateAttribute}
                        error={errorsLocation}
                        options={[
                            {
                                id:"http://localhost:8090/allowedAttributes/5",
                                text: 'Beaverton',
                                value: "http://localhost:8090/allowedAttributes/5"
                            },
                            {
                                id:"http://localhost:8090/allowedAttributes/6",
                                text: "Baltimore",
                                value: "http://localhost:8090/allowedAttributes/6"
                            }
                             ]}
                        icon="glyphicon glyphicon-globe"
                    />
               </li>
           </ul>
       </div>
    </div>:

    <div className="row">
     <div className="col-md-6">
         <ul className="list-unstyled">
             <li>
                 <SelectInput
                     name="CLIENT"
                     label="Client"
                     defaultOption={scheduleToUpdate.client}
                     defaultOptionValue={scheduleToUpdate.client}
                     defaultOptionLabel={scheduleToUpdate.client}
                     value={allowedAttributesClient}
                     onChange={onUpdateAttribute}
                     options={[
                        {
                              id:"http://localhost:8090/allowedAttributes/7",
                              text: "Cake Systems",
                              value: "http://localhost:8090/allowedAttributes/7"
                          },
                           {
                              id:"http://localhost:8090/allowedAttributes/8",
                              text: "Cockram",
                              value: "http://localhost:8090/allowedAttributes/8"
                          },
                         {
                              id:"http://localhost:8090/allowedAttributes/9",
                              text: 'Catalyst DevWorks',
                              value: "http://localhost:8090/allowedAttributes/9"
                          },
                          {
                              id:"http://localhost:8090/allowedAttributes/10",
                              text: "Cambia",
                              value: "http://localhost:8090/allowedAttributes/10"
                          }
                      ]}
                     icon="glyphicon glyphicon-user"
                 />
             </li>
             <li>
                 <SelectInput
                     name="PROJECT"
                     label="Project"
                     defaultOptionValue={scheduleToUpdate.project}
                     defaultOptionLabel={scheduleToUpdate.project}
                     value={scheduleToUpdate.project}
                     onChange={onUpdateAttribute}
                     options={[
                         {
                              id:"http://localhost:8090/allowedAttributes/11",
                              text: "Cake Systems",
                              value: "http://localhost:8090/allowedAttributes/11"
                          },
                           {
                              id:"http://localhost:8090/allowedAttributes/12",
                              text: "3DS MAC and AutoCAD",
                              value: "http://localhost:8090/allowedAttributes/12"
                          },
                            {
                              id:"http://localhost:8090/allowedAttributes/13",
                              text: 'Overwatch',
                              value: "http://localhost:8090/allowedAttributes/13"
                          },
                          {
                              id:"http://localhost:8090/allowedAttributes/14",
                              text: "Mobile",
                              value: "http://localhost:8090/allowedAttributes/14"
                          }
                      ]}
                     icon="glyphicon glyphicon-briefcase"
                 />
             </li>
         </ul>
     </div>
     <div className="col-md-6">
         <ul className="list-unstyled">
             <li>
                  <SelectInput
                      name="OFFICE"
                      label="Office"
                      defaultOptionValue=""
                      defaultOptionLabel="--Select Location--"
                      value={allowedAttributesLocation}
                      onChange={onUpdateAttribute}
                      options={[
                          {
                              id:"http://localhost:8090/allowedAttributes/5",
                              text: 'Beaverton',
                              value: "http://localhost:8090/allowedAttributes/5"
                          },
                          {
                              id:"http://localhost:8090/allowedAttributes/6",
                              text: "Baltimore",
                              value: "http://localhost:8090/allowedAttributes/6"
                          }
                           ]}
                      icon="glyphicon glyphicon-globe"
                  />
             </li>
         </ul>
     </div>
  </div>
}

</div>
    );

};

AttributesComponent.propTypes = {
  allowedAttributesClient: PropTypes.string,
  allowedAttributesProject: PropTypes.string,
  allowedAttributesLocation: PropTypes.string,
  onUpdateAttribute: PropTypes.func,
  scheduleToUpdate: PropTypes.object,
  errorsClient: PropTypes.string.isRequired,
  errorsLocation: PropTypes.string.isRequired,
  errorsProject: PropTypes.string.isRequired
};

export default AttributesComponent;

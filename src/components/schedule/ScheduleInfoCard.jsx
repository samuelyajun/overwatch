import React, {PropTypes} from 'react';

const InfoCard = (props) => {
    return (
        <div className="col-md-2 scheduleBox">
            <div>
                <span>id: </span><span>{props.schedule.id}</span>
            </div>
            <div>
                <span>username: </span><span>{props.schedule.username}</span>
            </div>
            <div>
                <span>template: </span><span>{props.schedule.surveyTemplate}</span>
            </div>
            <div>
                <span>start: </span><span>{props.schedule.startDate}</span>
            </div>
            <div>
                <span>end: </span><span>{props.schedule.endDate}</span>
            </div>
            <div>
                <span>frequency (weeks): </span><span>{props.schedule.frequency}</span>
            </div>
            <div>
                <span>completed: </span><span>{props.schedule.completed}</span>
            </div>
            <h4>atrributes:</h4>
            <div>
                <span>client: </span><span>{props.schedule.attrs.client}</span>
            </div>
            <div>
                <span>project: </span><span>{props.schedule.attrs.project}</span>
            </div>
            <div>
                <span>office: </span><span>{props.schedule.attrs.office}</span>
            </div>
            <div>
                <span>role: </span><span>{props.schedule.attrs.role}</span>
            </div>
            // <br />
            // <div>
            //     <button ng-click="update($ctrl.info.id)">Update</button>
            //  </div>
        </div>
    );
};

InfoCard.propTypes = {
    schedule: PropTypes.object.isRequired
};

export default InfoCard;

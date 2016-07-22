import HateoasUtils from './hateoasUtils';

class ScheduleUtils {

    static addAttributes(schedule, attributes) {
        let scheduleCopy = Object.assign({}, schedule);
        scheduleCopy.respondents.forEach((respondent) => {
            let originalAttributes = respondent.allowedAttributes;
            let newAttributes = originalAttributes.concat(attributes);
            respondent.allowedAttributes = newAttributes;
        });

        return scheduleCopy;
    }

    static addUserLink(schedule) {
        let scheduleCopy = Object.assign({}, schedule);
        schedule.respondents.forEach((respondent) => {
            respondent.user = HateoasUtils.getObjectLink(respondent.user);
        });
        return scheduleCopy;
    }
}

export default ScheduleUtils;

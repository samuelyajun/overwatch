import HateoasUtils from './hateoasUtils';

class ScheduleUtils {

    static addAttributes(schedule, attributes) {
        schedule.respondents.forEach((respondent) => {
            let originalAttributes = respondent.allowedAttributes;
            let newAttributes = originalAttributes.concat(attributes);
            respondent.allowedAttributes = newAttributes;
        });
    }

    static addUserLink(schedule) {
        schedule.respondents.forEach((respondent) => {
            respondent.user = HateoasUtils.getObjectLink(respondent.user);
        });
    }
}

export default ScheduleUtils;

import HateoasUtils from './hateoasUtils';

class ScheduleUtils {

    static addAttributes(schedule, attributes) {
        console.log("attributes in schedule utils:",attributes);
        schedule.respondents.forEach((respondent) => {
            let originalAttributes = respondent.allowedAttributes;
            console.log("respondent.allowedAttributes.value:",respondent.allowedAttributes.attributeValue);
            console.log("respondent:", respondent);
            let newAttributes = originalAttributes.concat(attributes);
            respondent.allowedAttributes = newAttributes;
        });
    }

    static addAttributes2(schedule, attributes) {
        schedule.respondents.forEach((respondent) => {
          
            respondent.allowedAttributes = attributes;
        });
    }

    static addUserLink(schedule) {
        schedule.respondents.forEach((respondent) => {
            respondent.user = HateoasUtils.getObjectLink(respondent.user);
        });
    }
}

export default ScheduleUtils;

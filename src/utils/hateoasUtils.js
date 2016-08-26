const LINK_REGEX = /^https?:\/\/.*?(\/.*)$/;

/**
* A helper class to parse data from the HATEOAS json objects
*/
class HateoasUtils {
    //returns a relative uri from a HATEOAS object
    static getObjectLink(obj) {
        const links = obj._links;
        if (!links) {
            console.log("HateoasUtils - NO LINKS?", obj._links)
            return;
        }

        const selfLink = links.self.href;
        const relativeUri = LINK_REGEX.exec(selfLink);
//console.log("HateoasUtils", selfLink)
        //return relativeUri[1];
        return selfLink;
    }

     static createObjectLink(obj) {

        const selfLink = 'http://localhost:8090/users/' + obj.id;
        //const relativeUri = LINK_REGEX.exec(selfLink);
console.log("HateoasUtils", selfLink)
        //return relativeUri[1];
        return selfLink;
    }

    static getUserLink(obj) {
        console.log(obj);
        const links = obj._links;
        if (!links) {
            console.log("HateoasUtils - NO LINKS?", obj._links)
            return;
        }

        const selfLink = links.self.href;
        const relativeUri = LINK_REGEX.exec(selfLink);
console.log("HateoasUtils", selfLink)
        //return relativeUri[1];
        return selfLink;
    }

    //returns the json object from a call to a rest repo
    static getObjects(json) {
        //if no _embedded field, we're getting a single object and we return it
        if (json._embedded === undefined) {
            return Object.assign({}, json);
        }

        //assume we have at least one field since that's all that should be in _embedded
        const field = Object.keys(json._embedded)[0];
        return Object.assign([], json._embedded[field]);
    }
}

export default HateoasUtils;

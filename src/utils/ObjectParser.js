const LINK_REGEX = /^https?:\/\/.*?\/(.*)$/;

class ObjectParser {
    static function getObjectLink(obj) {
        const links = obj._links;
        if (!links) {
            return;
        }

        const selfLink = links.self.href;
        const relativeUri = LINK_REGEX.exec(selfLink);
        console.log(relativeUri);
        
        return selfLink[0];
    }
}

export default ObjectParser;

import delay from './delay';
const templates = [
    {
        "id": 1,
        "name": "Team - 4 Days until end of Sprint",
        "type": "Qualitative",
        "description": "issued to team 4 days before the end of sprint, due on last day of sprint",
        "createDate": null,
        "version": "v1.0",
        "_links": {
            "self": {
                "href": "http://localhost:8090/templates/1"
            },
            "template": {
                "href": "http://localhost:8090/templates/1"
            },
            "questions": {
                "href": "http://localhost:8090/templates/1/questions"
            }
        }
    },
        {
            "id": 2,
            "name": "Team - Sprint Planning Day",
            "type": "Qualitative",
            "description": "issued to team on their sprint planning day, due 3 days there after",
            "createDate": null,
            "version": "v1.0",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/templates/2"
                },
                "template": {
                    "href": "http://localhost:8090/templates/2"
                },
                "questions": {
                    "href": "http://localhost:8090/templates/2/questions"
                }
            }
        },
        {
            "id": 3,
            "name": "EM/TL - Sprint Planning Day",
            "type": "Qualitative",
            "description": "issued to Engagement manager and Tech Lead on their sprint planning day, due 3 days there after",
            "createDate": null,
            "version": "v1.0",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/templates/3"
                },
                "template": {
                    "href": "http://localhost:8090/templates/3"
                },
                "questions": {
                    "href": "http://localhost:8090/templates/3/questions"
                }
            }
        },
        {
            "id": 4,
            "name": "EM - 4 Days until end of Sprint",
            "type": "Quantitative",
            "description": "issued to team 4 days before the end of sprint, due on last day of sprint",
            "createDate": null,
            "version": "v1.0",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/templates/4"
                },
                "template": {
                    "href": "http://localhost:8090/templates/4"
                },
                "questions": {
                    "href": "http://localhost:8090/templates/4/questions"
                }
            }
        },
        {
            "id": 5,
            "name": "TL - Sprint Planning Day",
            "type": "Quantitative",
            "description": "issued to team on their sprint planning day, due 3 days there after",
            "createDate": null,
            "version": "v1.0",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/templates/5"
                },
                "template": {
                    "href": "http://localhost:8090/templates/5"
                },
                "questions": {
                    "href": "http://localhost:8090/templates/5/questions"
                }
            }
        }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
};

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (template) => {
    return replaceAll(template.name, ' ', '-');
};

class TemplateApi {
    static getAllTemplates() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], templates));
            }, delay);
        });
    }

    static saveTemplate(template) {
        template = Object.assign({}, template); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minTemplateNameLength = 1;
                if (template.name.length < minTemplateNameLength) {
                    reject(`Name must be at least ${minTemplateNameLength} characters.`);
                }

                if (template.id) {
                    const existingTemplateIndex = templates.findIndex(a => a.id == template.id);
                    templates.splice(existingTemplateIndex, 1, template);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    template.id = generateId(template);
                    template.watchHref = `http://www.pluralsight.com/courses/${template.id}`;
                    template.push(template);
                }

                resolve(template);
            }, delay);
        });
    }

    /*static deleteTemplate(templateId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfTemplateToDelete = templates.findIndex(template => {
                    template.templateId == templateId;
                });
                templates.splice(indexOfTemplateToDelete, 1);
                resolve();
            }, delay);
        });
    }*/
}

export default  TemplateApi;

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _delay = require("./delay");

var _delay2 = _interopRequireDefault(_delay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var templates = [{
    "id": 1,
    "name": "Team - 4 Days until end of Sprint",
    "type": "Qualitative",
    "description": "issued to team 4 days before the end of sprint, due on last day of sprint",
    "createDate": null,
    "version": "v1.0",
    "questions": [{
        "id": 1,
        "questionText": "I am completely confident that my team will deliver its sprint commitment.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/1"
            },
            "question": {
                "href": "http://localhost:8090/questions/1{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/1/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/1/responseType"
            }
        }
    }, {
        "id": 2,
        "questionText": "The issues, impediments and blockers that have come up during this sprint were managed effectively (or are being effectively managed).",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/2"
            },
            "question": {
                "href": "http://localhost:8090/questions/2{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/2/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/2/responseType"
            }
        }
    }, {
        "id": 3,
        "questionText": "I am completely confident that the client will be happy with sprint results/deliverables.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/3"
            },
            "question": {
                "href": "http://localhost:8090/questions/3{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/3/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/3/responseType"
            }
        }
    }]

}, {
    "id": 2,
    "name": "Team - Sprint Planning Day",
    "type": "Qualitative",
    "description": "issued to team on their sprint planning day, due 3 days there after",
    "createDate": null,
    "version": "v1.0",
    "questions": [{
        "id": 1,
        "questionText": "I am completely confident that my team will deliver its sprint commitment.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/1"
            },
            "question": {
                "href": "http://localhost:8090/questions/1{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/1/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/1/responseType"
            }
        }
    }, {
        "id": 4,
        "questionText": "I am completely confident that the project is on track and will be successful.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/4"
            },
            "question": {
                "href": "http://localhost:8090/questions/4{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/4/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/4/responseType"
            }
        }
    }, {
        "id": 5,
        "questionText": "I am completely confident that the client will be happy with project results.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/5"
            },
            "question": {
                "href": "http://localhost:8090/questions/5{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/5/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/5/responseType"
            }
        }
    }, {
        "id": 6,
        "questionText": "My team\"s code is of exceptional quality.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/6"
            },
            "question": {
                "href": "http://localhost:8090/questions/6{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/6/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/6/responseType"
            }
        }
    }, {
        "id": 7,
        "questionText": "My team is working together extremely well.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/7"
            },
            "question": {
                "href": "http://localhost:8090/questions/7{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/7/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/7/responseType"
            }
        }
    }, {
        "id": 8,
        "questionText": "I have all of the tools and resources I need to complete my project.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/8"
            },
            "question": {
                "href": "http://localhost:8090/questions/8{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/8/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/8/responseType"
            }
        }
    }, {
        "id": 9,
        "questionText": "The requirements in my cards are clear, complete and cohesive.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/9"
            },
            "question": {
                "href": "http://localhost:8090/questions/9{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/9/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/9/responseType"
            }
        }
    }, {
        "id": 10,
        "questionText": "Client stakeholders are appropriately engaged to the level required for project success.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/10"
            },
            "question": {
                "href": "http://localhost:8090/questions/10{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/10/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/10/responseType"
            }
        }
    }, {
        "id": 11,
        "questionText": "The client is not a hinderance to project success.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/11"
            },
            "question": {
                "href": "http://localhost:8090/questions/11{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/11/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/11/responseType"
            }
        }
    }, {
        "id": 12,
        "questionText": "I have enough distraction-free time to complete my sprint commitments.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/12"
            },
            "question": {
                "href": "http://localhost:8090/questions/12{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/12/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/12/responseType"
            }
        }
    }, {
        "id": 13,
        "questionText": "My Scrum Master/Delivery Manager does an excellent job managing client expectations.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/13"
            },
            "question": {
                "href": "http://localhost:8090/questions/13{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/13/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/13/responseType"
            }
        }
    }, {
        "id": 14,
        "questionText": "My Scrum Master/Delivery Manager does an excellent job of facilitating our meetings and events.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/14"
            },
            "question": {
                "href": "http://localhost:8090/questions/14{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/14/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/14/responseType"
            }
        }
    }, {
        "id": 15,
        "questionText": "My Scrum Master/Delivery Manager does an excellent job of resolving issues and removing blockers/impediments.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/15"
            },
            "question": {
                "href": "http://localhost:8090/questions/15{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/15/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/15/responseType"
            }
        }
    }, {
        "id": 16,
        "questionText": "My Tech Lead is readily available to help resolve issues, answer questions and provide guidance/advice.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/16"
            },
            "question": {
                "href": "http://localhost:8090/questions/16{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/16/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/16/responseType"
            }
        }
    }, {
        "id": 17,
        "questionText": "My Tech Lead does an excellent job of resolving issues and removing blockers/impediments.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/17"
            },
            "question": {
                "href": "http://localhost:8090/questions/17{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/17/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/17/responseType"
            }
        }
    }]
}, {
    "id": 3,
    "name": "EM/TL - Sprint Planning Day",
    "type": "Qualitative",
    "description": "issued to Engagement manager and Tech Lead on their sprint planning day, due 3 days there after",
    "createDate": null,
    "version": "v1.0",
    "questions": [{
        "id": 1,
        "questionText": "I am completely confident that my team will deliver its sprint commitment.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/1"
            },
            "question": {
                "href": "http://localhost:8090/questions/1{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/1/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/1/responseType"
            }
        }
    }, {
        "id": 4,
        "questionText": "I am completely confident that the project is on track and will be successful.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/4"
            },
            "question": {
                "href": "http://localhost:8090/questions/4{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/4/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/4/responseType"
            }
        }
    }, {
        "id": 5,
        "questionText": "I am completely confident that the client will be happy with project results.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/5"
            },
            "question": {
                "href": "http://localhost:8090/questions/5{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/5/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/5/responseType"
            }
        }
    }, {
        "id": 6,
        "questionText": "My team\"s code is of exceptional quality.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/6"
            },
            "question": {
                "href": "http://localhost:8090/questions/6{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/6/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/6/responseType"
            }
        }
    }, {
        "id": 7,
        "questionText": "My team is working together extremely well.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/7"
            },
            "question": {
                "href": "http://localhost:8090/questions/7{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/7/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/7/responseType"
            }
        }
    }, {
        "id": 8,
        "questionText": "I have all of the tools and resources I need to complete my project.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/8"
            },
            "question": {
                "href": "http://localhost:8090/questions/8{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/8/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/8/responseType"
            }
        }
    }, {
        "id": 9,
        "questionText": "The requirements in my cards are clear, complete and cohesive.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/9"
            },
            "question": {
                "href": "http://localhost:8090/questions/9{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/9/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/9/responseType"
            }
        }
    }, {
        "id": 10,
        "questionText": "Client stakeholders are appropriately engaged to the level required for project success.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/10"
            },
            "question": {
                "href": "http://localhost:8090/questions/10{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/10/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/10/responseType"
            }
        }
    }, {
        "id": 11,
        "questionText": "The client is not a hinderance to project success.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/11"
            },
            "question": {
                "href": "http://localhost:8090/questions/11{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/11/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/11/responseType"
            }
        }
    }, {
        "id": 18,
        "questionText": "My work is challenging and rewarding.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/18"
            },
            "question": {
                "href": "http://localhost:8090/questions/18{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/18/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/18/responseType"
            }
        }
    }]
}, {
    "id": 4,
    "name": "EM - 4 Days until end of Sprint",
    "type": "Quantitative",
    "description": "issued to team 4 days before the end of sprint, due on last day of sprint",
    "createDate": null,
    "version": "v1.0",
    "questions": [{
        "id": 19,
        "questionText": "How many points were committed to at the start of the sprint ending today?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/19"
            },
            "question": {
                "href": "http://localhost:8090/questions/19{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/19/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/19/responseType"
            }
        }
    }, {
        "id": 20,
        "questionText": "How many points were accepted today?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/20"
            },
            "question": {
                "href": "http://localhost:8090/questions/20{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/20/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/20/responseType"
            }
        }
    }, {
        "id": 21,
        "questionText": "How many stories were added mid-sprint to the sprint ending today?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/21"
            },
            "question": {
                "href": "http://localhost:8090/questions/21{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/21/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/21/responseType"
            }
        }
    }, {
        "id": 22,
        "questionText": "How many stories had their requirements changed mid-sprint?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/22"
            },
            "question": {
                "href": "http://localhost:8090/questions/22{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/22/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/22/responseType"
            }
        }
    }, {
        "id": 23,
        "questionText": "Entering today's sprint planning, how many stories are in the backlog?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/23"
            },
            "question": {
                "href": "http://localhost:8090/questions/23{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/23/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/23/responseType"
            }
        }
    }, {
        "id": 24,
        "questionText": "Of these, how many are dev-ready (meaning the requirements and acceptance criteria are complete and approved, and the story has been estimate/pointed)?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/24"
            },
            "question": {
                "href": "http://localhost:8090/questions/24{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/24/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/24/responseType"
            }
        }
    }, {
        "id": 25,
        "questionText": "How many points worth of dev-ready stories are currently in there backlog?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/25"
            },
            "question": {
                "href": "http://localhost:8090/questions/25{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/25/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/25/responseType"
            }
        }
    }, {
        "id": 26,
        "questionText": "For each team member, indicate the number of points delivered by that individual during the sprint.",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/26"
            },
            "question": {
                "href": "http://localhost:8090/questions/26{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/26/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/26/responseType"
            }
        }
    }, {
        "id": 27,
        "questionText": "Currently, how many bugs categorized as \"blocker\" exist in the backlog? (Critical, Major and Low priority)",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/27"
            },
            "question": {
                "href": "http://localhost:8090/questions/27{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/27/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/27/responseType"
            }
        }
    }, {
        "id": 28,
        "questionText": "Jenkins - how many builds were done over the course of the sprint that ends today?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/28"
            },
            "question": {
                "href": "http://localhost:8090/questions/28{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/28/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/28/responseType"
            }
        }
    }, {
        "id": 29,
        "questionText": "Git/SCM - how many check-ins were done by the team over the sprint?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/29"
            },
            "question": {
                "href": "http://localhost:8090/questions/29{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/29/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/29/responseType"
            }
        }
    }, {
        "id": 30,
        "questionText": "Jenkins or other code coverage tool - what is the level of unit test coverage on your most recent build?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/30"
            },
            "question": {
                "href": "http://localhost:8090/questions/30{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/30/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/30/responseType"
            }
        }
    }]
}, {
    "id": 5,
    "name": "TL - Sprint Planning Day",
    "type": "Quantitative",
    "description": "issued to team on their sprint planning day, due 3 days there after",
    "createDate": null,
    "version": "v1.0",
    "questions": [{
        "id": 31,
        "questionText": "Jenkins - how many failed builds were there in the sprint ending today?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/31"
            },
            "question": {
                "href": "http://localhost:8090/questions/31{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/31/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/31/responseType"
            }
        }
    }, {
        "id": 32,
        "questionText": "In build tool or IDE, how many automated test cases are there?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/32"
            },
            "question": {
                "href": "http://localhost:8090/questions/32{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/32/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/32/responseType"
            }
        }
    }, {
        "id": 33,
        "questionText": "Jenkins or IDE - how many automated tests were run in the most recent build?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/33"
            },
            "question": {
                "href": "http://localhost:8090/questions/33{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/33/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/33/responseType"
            }
        }
    }, {
        "id": 34,
        "questionText": "Jenkins/IDE - How many automated tests were quarantined/disabled in the most recent build?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/34"
            },
            "question": {
                "href": "http://localhost:8090/questions/34{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/34/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/34/responseType"
            }
        }
    }, {
        "id": 35,
        "questionText": "Jenkins/IDE - How many automated tests failed in the most recent build?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/35"
            },
            "question": {
                "href": "http://localhost:8090/questions/35{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/35/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/35/responseType"
            }
        }
    }, {
        "id": 36,
        "questionText": "Jenkins - what was the build duration (including running tests) for the latest build?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/36"
            },
            "question": {
                "href": "http://localhost:8090/questions/36{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/36/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/36/responseType"
            }
        }
    }, {
        "id": 37,
        "questionText": "Jenkins/Sonar - what is your average cyclomatic complexity?Max cyclomatic complexity?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/37"
            },
            "question": {
                "href": "http://localhost:8090/questions/37{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/37/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/37/responseType"
            }
        }
    }, {
        "id": 38,
        "questionText": "Jenkins/Lint tool - how many lint violations were in the most recent build?",
        "_links": {
            "self": {
                "href": "http://localhost:8090/questions/38"
            },
            "question": {
                "href": "http://localhost:8090/questions/38{?projection}",
                "templated": true
            },
            "tags": {
                "href": "http://localhost:8090/questions/38/tags"
            },
            "responseType": {
                "href": "http://localhost:8090/questions/38/responseType"
            }
        }
    }]
}];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
var generateId = function generateId(template) {
    return replaceAll(template.name, ' ', '-');
};

var TemplateApi = function () {
    function TemplateApi() {
        _classCallCheck(this, TemplateApi);
    }

    _createClass(TemplateApi, null, [{
        key: "getAllTemplates",
        value: function getAllTemplates() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(Object.assign([], templates));
                }, _delay2.default);
            });
        }
    }, {
        key: "saveTemplate",
        value: function saveTemplate(template) {
            template = Object.assign({}, template); // to avoid manipulating object passed in.
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    // Simulate server-side validation
                    var minTemplateNameLength = 1;
                    if (template.name.length < minTemplateNameLength) {
                        reject("Name must be at least " + minTemplateNameLength + " characters.");
                    }

                    if (template.id) {
                        var existingTemplateIndex = templates.findIndex(function (a) {
                            return a.id == template.id;
                        });
                        templates.splice(existingTemplateIndex, 1, template);
                    } else {
                        //Just simulating creation here.
                        //The server would generate ids and watchHref's for new courses in a real app.
                        //Cloning so copy returned is passed by value rather than by reference.
                        template.id = generateId(template);
                        template.watchHref = "http://www.pluralsight.com/courses/" + template.id;
                        template.push(template);
                    }

                    resolve(template);
                }, _delay2.default);
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

    }]);

    return TemplateApi;
}();

exports.default = TemplateApi;

//# sourceMappingURL=mockTemplateApi-compiled.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadQuestionsSuccess = loadQuestionsSuccess;
exports.loadQuestions = loadQuestions;

var _mockQuestionApi = require('../api/mockQuestionApi');

var _mockQuestionApi2 = _interopRequireDefault(_mockQuestionApi);

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _ajaxStatusActions = require('./ajaxStatusActions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadQuestionsSuccess(questions) {
    return { type: types.LOAD_QUESTIONS_SUCCESS, questions: questions };
}

function loadQuestions() {
    return function (dispatch) {
        dispatch((0, _ajaxStatusActions.initiateAjaxRequest)());
        return _mockQuestionApi2.default.getAllQuestions().then(function (questions) {
            dispatch(loadQuestionsSuccess(questions));
        }).catch(function (error) {
            throw error;
        });
    };
}

//# sourceMappingURL=questionActions-compiled.js.map
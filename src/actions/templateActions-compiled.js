'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadTemplatesSuccess = loadTemplatesSuccess;
exports.createTemplateSuccess = createTemplateSuccess;
exports.updateTemplateSuccess = updateTemplateSuccess;
exports.loadTemplates = loadTemplates;
exports.saveTemplate = saveTemplate;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _mockTemplateApi = require('../api/mockTemplateApi');

var _mockTemplateApi2 = _interopRequireDefault(_mockTemplateApi);

var _ajaxStatusActions = require('./ajaxStatusActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function loadTemplatesSuccess(templates) {
    return { type: types.LOAD_TEMPLATES_SUCCESS, templates: templates };
}

function createTemplateSuccess(template) {
    return { type: types.CREATE_TEMPLATE_SUCCESS, template: template };
}

function updateTemplateSuccess(template) {
    return { type: types.UPDATE_TEMPLATE_SUCCESS, template: template };
}

function loadTemplates() {
    return function (dispatch) {
        dispatch((0, _ajaxStatusActions.initiateAjaxRequest)());
        return _mockTemplateApi2.default.getAllTemplates().then(function (templates) {
            dispatch(loadTemplatesSuccess(templates));
        }).catch(function (error) {
            throw error;
        });
    };
}

function saveTemplate(template) {
    return function (dispatch, getState) {
        dispatch((0, _ajaxStatusActions.initiateAjaxRequest)());
        return _mockTemplateApi2.default.saveTemplate(template).then(function (savedTemplate) {
            template.id ? dispatch(updateTemplateSuccess(savedTemplate)) : dispatch(createTemplateSuccess(savedTemplate));
        }).catch(function (error) {
            dispatch((0, _ajaxStatusActions.ajaxRequestError)(error));
            throw error;
        });
    };
}

//# sourceMappingURL=templateActions-compiled.js.map
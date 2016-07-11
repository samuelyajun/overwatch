'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = templateReducer;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function templateReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.templates : arguments[0];
    var action = arguments[1];

    switch (action.type) {

        case types.LOAD_TEMPLATES_SUCCESS:
            return action.templates;

        case types.CREATE_TEMPLATE_SUCCESS:
            return [].concat(_toConsumableArray(state), [Object.assign({}, action.template)]);

        case types.UPDATE_TEMPLATE_SUCCESS:
            return [].concat(_toConsumableArray(state.filter(function (template) {
                return template.id !== action.template.id;
            })), [Object.assign({}, action.template)]);

        default:
            return state;
    }
}

//# sourceMappingURL=templateReducer-compiled.js.map
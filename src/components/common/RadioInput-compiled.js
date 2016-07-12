"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioInput = function RadioInput(_ref) {
    var value = _ref.value;

    return _react2.default.createElement("input", {
        type: "radio",
        value: value
    });
};

RadioInput.propTypes = {
    value: _react.PropTypes.string.isRequired
};

exports.default = RadioInput;

//# sourceMappingURL=RadioInput-compiled.js.map
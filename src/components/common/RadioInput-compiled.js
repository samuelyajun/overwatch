"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioInput = function RadioInput(_ref) {
    var name = _ref.name;
    var value = _ref.value;

    return _react2.default.createElement("input", { className: "radioSelection",
        type: "radio",
        name: name,
        value: value,
        required: true
    });
};

RadioInput.propTypes = {
    name: _react.PropTypes.number.isRequired,
    value: _react.PropTypes.number
};

exports.default = RadioInput;

//# sourceMappingURL=RadioInput-compiled.js.map
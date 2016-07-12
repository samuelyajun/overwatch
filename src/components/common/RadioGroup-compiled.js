"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = function RadioGroup(_ref) {
    var name = _ref.name;
    var onChange = _ref.onChange;
    var selectedValue = _ref.selectedValue;

    return _react2.default.createElement(
        "div",
        { className: "form-group", selectedValue: selectedValue, name: name, onChange: onChange },
        " "
    );
};

RadioGroup.propTypes = {
    name: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    selectedValue: _react.PropTypes.string.isRequired
};

exports.default = RadioGroup;

//# sourceMappingURL=RadioGroup-compiled.js.map
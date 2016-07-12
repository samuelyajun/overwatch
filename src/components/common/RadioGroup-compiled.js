'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioInput = require('./RadioInput');

var _RadioInput2 = _interopRequireDefault(_RadioInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = function RadioGroup(_ref) {
    var name = _ref.name;
    var onChange = _ref.onChange;
    var selectedValue = _ref.selectedValue;
    var question = _ref.question;

    return _react2.default.createElement(
        'div',
        { className: 'form-group', selectedValue: selectedValue, value: undefined.state.value, name: question, onChange: onChange },
        _react2.default.createElement(_RadioInput2.default, { name: question, value: '0' }),
        _react2.default.createElement(_RadioInput2.default, { name: question, value: '1' }),
        _react2.default.createElement(_RadioInput2.default, { name: question, value: '2' }),
        _react2.default.createElement(_RadioInput2.default, { name: question, value: '3' }),
        _react2.default.createElement(_RadioInput2.default, { name: question, value: '4' })
    );
};

RadioGroup.propTypes = {
    name: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    selectedValue: _react.PropTypes.string,
    question: _react.PropTypes.object,
    value: _react.PropTypes.number
};

exports.default = RadioGroup;

//# sourceMappingURL=RadioGroup-compiled.js.map
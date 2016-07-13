'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberInput = function NumberInput(_ref) {
    var name = _ref.name;
    var label = _ref.label;
    var onChange = _ref.onChange;
    var placeholder = _ref.placeholder;
    var value = _ref.value;
    var error = _ref.error;
    var type = _ref.type;
    var min = _ref.min;

    var wrapperClass = 'form-group';

    var topMargin = {
        margin: '15px'
    };

    if (error && error.length > 0) {
        wrapperClass += " " + 'has-error';
        type = type ? type : "text";
    }
    return _react2.default.createElement(
        'div',
        { className: wrapperClass },
        _react2.default.createElement(
            'label',
            { htmlFor: name },
            label
        ),
        _react2.default.createElement(
            'div',
            { className: 'field col-xs-2', style: topMargin },
            _react2.default.createElement('input', { type: type,
                name: name,
                className: 'form-control',
                placeholder: placeholder,
                value: value,
                onChange: onChange,
                min: min
            }),
            error && _react2.default.createElement(
                'div',
                { className: 'alert alert-danger' },
                error
            )
        )
    );
};

NumberInput.propTypes = {
    name: _react.PropTypes.string.isRequired,
    label: _react.PropTypes.string,
    onChange: _react.PropTypes.func.isRequired,
    placeholder: _react.PropTypes.number,
    value: _react.PropTypes.number,
    error: _react.PropTypes.string,
    type: _react.PropTypes.string,
    min: _react.PropTypes.string

};

exports.default = NumberInput;

//# sourceMappingURL=NumberInput-compiled.js.map
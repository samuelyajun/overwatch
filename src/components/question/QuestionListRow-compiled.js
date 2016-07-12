'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioGroup = require('../common/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _RadioInput = require('../common/RadioInput');

var _RadioInput2 = _interopRequireDefault(_RadioInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionListRow = function QuestionListRow(_ref) {
    var question = _ref.question;
    var onChange = _ref.onChange;
    var selectedValue = _ref.selectedValue;


    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            question.id
        ),
        _react2.default.createElement(
            'td',
            null,
            question.questionText
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_RadioInput2.default, { value: question.responseValue, name: question.id })
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_RadioInput2.default, { value: question.responseValue, name: question.id })
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_RadioInput2.default, { value: question.responseValue, name: question.id })
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_RadioInput2.default, { value: question.responseValue, name: question.id })
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_RadioInput2.default, { value: question.responseValue, name: question.id })
        )
    );
};

QuestionListRow.propTypes = {
    question: _react.PropTypes.object.isRequired,
    onChange: _react.PropTypes.func,
    selectedValue: _react.PropTypes.string
};

exports.default = QuestionListRow;

//# sourceMappingURL=QuestionListRow-compiled.js.map
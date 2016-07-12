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
    var value = _ref.value;


    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            question.questionText
        ),
        _react2.default.createElement(
            'td',
            null,
            question.responseType
        ),
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                _RadioGroup2.default,
                { name: "test" },
                _react2.default.createElement(_RadioInput2.default, { value: '0' }),
                _react2.default.createElement(_RadioInput2.default, { value: '1' }),
                _react2.default.createElement(_RadioInput2.default, { value: '2' }),
                _react2.default.createElement(_RadioInput2.default, { value: '3' }),
                _react2.default.createElement(_RadioInput2.default, { value: '4' })
            )
        )
    );
};

QuestionListRow.propTypes = {
    question: _react.PropTypes.object.isRequired,
    value: _react.PropTypes.number
};

exports.default = QuestionListRow;

//# sourceMappingURL=QuestionListRow-compiled.js.map
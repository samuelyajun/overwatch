'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionListRow = function QuestionListRow(_ref) {
    var question = _ref.question;

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
        )
    );
};

QuestionListRow.propTypes = {
    question: _react.PropTypes.object.isRequired
};

exports.default = QuestionListRow;

//# sourceMappingURL=QuestionListRow-compiled.js.map
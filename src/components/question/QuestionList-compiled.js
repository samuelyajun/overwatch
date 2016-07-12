'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QuestionListRow = require('./QuestionListRow');

var _QuestionListRow2 = _interopRequireDefault(_QuestionListRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableStyle = {
    class: "table table-hover table-bordered"
};

var QuestionList = function QuestionList(_ref) {
    var questions = _ref.questions;

    return _react2.default.createElement(
        'table',
        { style: tableStyle, className: 'table' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'th',
                    null,
                    '$nbsp;'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Name'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Type'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Description'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Response Type'
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            { style: tableStyle },
            questions.map(function (question) {
                return _react2.default.createElement(_QuestionListRow2.default, { key: question.id, question: question });
            })
        )
    );
};

QuestionList.propTypes = {
    template: _react.PropTypes.array.isRequired,
    questions: _react.PropTypes.array.isRequired
};

exports.default = QuestionList;

//# sourceMappingURL=QuestionList-compiled.js.map
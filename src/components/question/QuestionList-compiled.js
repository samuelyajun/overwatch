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
    var template = _ref.template;

    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
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
                                '#'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                'Question'
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
                        null,
                        questions.map(function (question) {
                            return _react2.default.createElement(_QuestionListRow2.default, { key: question.id, question: question });
                        })
                    )
                )
            )
        )
    );
};

QuestionList.propTypes = {
    questions: _react.PropTypes.array,
    selectedValue: _react.PropTypes.string
};

exports.default = QuestionList;

//# sourceMappingURL=QuestionList-compiled.js.map
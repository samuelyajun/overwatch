'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QuestionListRow = require('../question/QuestionListRow');

var _QuestionListRow2 = _interopRequireDefault(_QuestionListRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateForm = function TemplateForm(_ref) {
    var template = _ref.template;

    console.log(template);
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            ' Manage Template'
        ),
        _react2.default.createElement(
            'h4',
            null,
            template.name
        ),
        _react2.default.createElement(
            'h4',
            null,
            template.type
        ),
        _react2.default.createElement(
            'p',
            null,
            template.description
        ),
        _react2.default.createElement(
            'table',
            null,
            _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    'ID'
                ),
                _react2.default.createElement(
                    'tr',
                    null,
                    'Text'
                ),
                _react2.default.createElement(
                    'tr',
                    null,
                    'Response Type'
                )
            ),
            _react2.default.createElement(
                'tbody',
                null,
                template.questions.map(function (question) {
                    return _react2.default.createElement(_QuestionListRow2.default, { key: question.id, question: question });
                })
            )
        )
    );
};

TemplateForm.propTypes = {
    template: _react2.default.PropTypes.object.isRequired
};

exports.default = TemplateForm;

//# sourceMappingURL=TemplateForm-compiled.js.map
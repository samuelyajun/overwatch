'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _QuestionList = require('../question/QuestionList');

var _QuestionList2 = _interopRequireDefault(_QuestionList);

var _RadioGroup = require('../common/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _RadioInput = require('../common/RadioInput');

var _RadioInput2 = _interopRequireDefault(_RadioInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templateOuterDivStyle = {
    margin: '25px'
};

var tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

var TemplateForm = function TemplateForm(_ref) {
    var template = _ref.template;
    var onSave = _ref.onSave;
    var saving = _ref.saving;
    var onChange = _ref.onChange;

    return _react2.default.createElement(
        'div',
        { style: templateOuterDivStyle },
        _react2.default.createElement(
            'h1',
            null,
            'Template Details'
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
            'form',
            null,
            _react2.default.createElement(
                'table',
                { style: tableStyle, className: 'table' },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement('tr', null)
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(_QuestionList2.default, { questions: template.questions })
                )
            ),
            _react2.default.createElement('input', {
                type: 'submit',
                disabled: saving,
                value: saving ? 'Saving...' : 'Save',
                className: 'btn btn-primary',
                onClick: onSave })
        )
    );
};

TemplateForm.propTypes = {
    template: _react2.default.PropTypes.object.isRequired,
    onSave: _react2.default.PropTypes.func.isRequired,
    saving: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func.isRequired
};

exports.default = TemplateForm;

//# sourceMappingURL=TemplateForm-compiled.js.map
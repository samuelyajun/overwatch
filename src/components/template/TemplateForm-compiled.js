'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextInput = require('../common/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _SelectInput = require('../common/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateForm = function TemplateForm(_ref) {
    var template = _ref.template;
    var onSave = _ref.onSave;
    var onChange = _ref.onChange;
    var saving = _ref.saving;
    var errors = _ref.errors;

    return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
            'h1',
            null,
            ' Manage Template'
        ),
        _react2.default.createElement(_TextInput2.default, {
            name: 'name',
            label: 'Name',
            value: template.name,
            onChange: onChange,
            error: errors.name }),
        _react2.default.createElement(_TextInput2.default, {
            name: 'type',
            label: 'Type',
            value: template.type,
            onChange: onChange,
            error: errors.type }),
        _react2.default.createElement(_TextInput2.default, {
            name: 'description',
            label: 'Description',
            value: template.description,
            onChange: onChange,
            error: errors.description }),
        _react2.default.createElement('input', {
            type: 'submit',
            disabled: saving,
            value: saving ? 'Saving...' : 'Save',
            className: 'btn btn-primary',
            onClick: onSave })
    );
};

TemplateForm.propTypes = {
    template: _react2.default.PropTypes.object.isRequired,
    onSave: _react2.default.PropTypes.func.isRequired,
    onChange: _react2.default.PropTypes.func.isRequired,
    saving: _react2.default.PropTypes.bool,
    errors: _react2.default.PropTypes.object
};

exports.default = TemplateForm;

//# sourceMappingURL=TemplateForm-compiled.js.map
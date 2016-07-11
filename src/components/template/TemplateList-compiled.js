'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TemplateListRow = require('./TemplateListRow');

var _TemplateListRow2 = _interopRequireDefault(_TemplateListRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableStyle = {
    class: "table table-hover table-bordered"
};

var TemplateList = function TemplateList(_ref) {
    var templates = _ref.templates;

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
                    'Created on'
                ),
                _react2.default.createElement(
                    'th',
                    null,
                    'Version'
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            templates.map(function (template) {
                return _react2.default.createElement(_TemplateListRow2.default, { key: template.id, template: template });
            })
        )
    );
};

TemplateList.propTypes = {
    templates: _react.PropTypes.array.isRequired
};

exports.default = TemplateList;

//# sourceMappingURL=TemplateList-compiled.js.map
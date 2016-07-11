'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TemplateListRow = function TemplateListRow(_ref) {
    var template = _ref.template;

    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                _reactRouter.Link,
                { to: '/template/' + template.id },
                template.name
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            template.type
        ),
        _react2.default.createElement(
            'td',
            null,
            template.description
        ),
        _react2.default.createElement(
            'td',
            null,
            template.createDate
        ),
        _react2.default.createElement(
            'td',
            null,
            template.version
        )
    );
};

TemplateListRow.propTypes = {
    template: _react.PropTypes.object.isRequired
};

exports.default = TemplateListRow;

//# sourceMappingURL=TemplateListRow-compiled.js.map
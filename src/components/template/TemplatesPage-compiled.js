'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('C:\\Users\\klafrance\\workspace\\overwatch-frontend\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\Users\\klafrance\\workspace\\overwatch-frontend\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\Users\\klafrance\\workspace\\overwatch-frontend\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _templateActions = require('../../actions/templateActions');

var templateActions = _interopRequireWildcard(_templateActions);

var _TemplateList = require('./TemplateList');

var _TemplateList2 = _interopRequireDefault(_TemplateList);

var _reactRouter = require('react-router');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    TemplatesPage: {
        displayName: 'TemplatesPage'
    }
};

var _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: 'C:/Users/klafrance/workspace/overwatch-frontend/src/components/template/TemplatesPage.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: 'C:/Users/klafrance/workspace/overwatch-frontend/src/components/template/TemplatesPage.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformHmrLibIndexJs2(_CUsersKlafranceWorkspaceOverwatchFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var templateOuterDivStyle = {
    marginTop: '75px'
};

var TemplatesPage = _wrapComponent('TemplatesPage')(function (_React$Component) {
    _inherits(TemplatesPage, _React$Component);

    function TemplatesPage(props, context) {
        _classCallCheck(this, TemplatesPage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TemplatesPage).call(this, props, context));

        _this.redirectToAddTemplatePage = _this.redirectToAddTemplatePage.bind(_this);
        return _this;
    }

    _createClass(TemplatesPage, [{
        key: 'templateRow',
        value: function templateRow(template, index) {
            return _react3.default.createElement(
                'div',
                { key: index },
                template.name
            );
        }
    }, {
        key: 'redirectToAddTemplatePage',
        value: function redirectToAddTemplatePage() {
            _reactRouter.browserHistory.push('/template');
        }
    }, {
        key: 'render',
        value: function render() {
            var templates = this.props.templates;

            return _react3.default.createElement(
                'div',
                { style: templateOuterDivStyle },
                _react3.default.createElement(
                    'h1',
                    null,
                    'Templates'
                ),
                _react3.default.createElement('input', { type: 'submit',
                    value: 'Add Template',
                    className: 'btn btn-primary',
                    onClick: this.redirectToAddTemplatePage }),
                _react3.default.createElement(_TemplateList2.default, { templates: templates })
            );
        }
    }]);

    return TemplatesPage;
}(_react3.default.Component));

TemplatesPage.propTypes = {
    templates: _react2.PropTypes.array.isRequired,
    actions: _react2.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        templates: state.templates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(templateActions, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TemplatesPage);

//# sourceMappingURL=TemplatesPage-compiled.js.map